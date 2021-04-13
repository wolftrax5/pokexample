import React, {useEffect, useState} from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import {Grid, Container } from '@material-ui/core';

import {useToggle} from '../../hooks/useToogle';
import { theme } from '../../styles/theme';
import { SideBar } from '../SideBar'
import { HeaderBar } from '../HeaderBar';
import {PokeStats} from '../PokeStats';
import { GroupTabs } from '../GroupTabs';
import {MultipleSelect} from '../Filter'
import {usePokeTypesList} from '../../hooks/useTypesPokemon';

const Panel = ({name}: any) => (<h2>{name}</h2>)

const CardPanel = () => (
  <Grid container  spacing={2}>
    {[0, 1, 2, 3,4,5 ].map((value) => (
      <Grid key={value} item>
        <PokeStats label='Sales' data={value * 10}/>
      </Grid>
    ))}
  </Grid>
)

function App() {
  let { pokeTypes, loading, fetchData} = usePokeTypesList()

  const [tabsData, setTabsData] = useState([
    {label: 'Not Data', component: <Panel name={'not Data'}/>}
  ])

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if(pokeTypes.length > 0) {
      const tabs = pokeTypes.map((item) => ({
        label: item.name,
        component:(
            <Panel name={item.name}
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
