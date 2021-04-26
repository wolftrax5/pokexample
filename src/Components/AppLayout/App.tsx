import React, {useEffect, useState} from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import {Grid, Container } from '@material-ui/core';

import {useToggle} from '../../hooks/useToogle';
import { theme } from '../../styles/theme';
import { SideBar } from '../SideBar'
import { HeaderBar } from '../HeaderBar';
import {PokeGrid} from '../PokeGrid';
import { GroupTabs } from '../GroupTabs';
import {usePokeTypesList} from '../../hooks/useTypesPokemon';

import { EMPTY_POKETYPE_API, TypePokemon} from '../../Interfaces';
import {fetchForm} from '../../Utils/api/pokemon'

const Panel = ({pokemons}: any) => {
  const [pokemonType, ] = useState(pokemons);
  const [showPokemons, ] = useState(pokemons.length > 0);
  
  return (
    <>
    {
      showPokemons ?
      pokemonType.map((item: TypePokemon)=> (
        <h2>{item.pokemon.name}</h2>
  ))
      : 'wait a second'
    }
    </>)
}


function App() {
  let { pokeTypes, loading, fetchData} = usePokeTypesList()

  const [tabsData, setTabsData] = useState([
    {label: 'Not Data', component: <Panel pokemons={EMPTY_POKETYPE_API.pokemon}/>}
  ])
  const clickPokemon= (pokemon: string)=> {
    try {
      const enpoint = fetchForm(pokemon)
    
      console.log('click pokemon', enpoint)
    } catch (error) {
    }

  }
  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    console.log(pokeTypes)
    if(pokeTypes.length > 0) {
      const tabs = pokeTypes.map((item) => ({
        label: item.name,
        component:(
            <PokeGrid pokemons={item.pokemon} onPokeClick={clickPokemon}
            />
        )
      }))
      setTabsData(tabs)
    }
  }, [pokeTypes])


  const {boolState, toggle}= useToggle(false)
  return (
    <ThemeProvider theme={theme}>
      <HeaderBar onMenuClick={toggle}></HeaderBar>
      <SideBar openBar={boolState} closer={toggle}/>

       <Container>
       <Grid container direction='column'>
        <Grid style= {{width: '100%'}} item>
          <GroupTabs tabs={tabsData} />
        </Grid>
      </Grid>

      </Container>
    </ThemeProvider>
  );
}

export default App;
