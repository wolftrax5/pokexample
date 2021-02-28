import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import {Grid, Container} from '@material-ui/core';

// import { usePokemonsData } from '../../hooks/useFetchData'
import { theme } from '../../styles/theme';
import { HeaderBar } from '../HeaderBar';
import {PokeStats} from '../PokeStats';
import { GroupTabs } from '../GroupTabs';
import { ResponsiveTable } from '../ResponsiveTable'

function App() {
  /*const { pokemons, loading } = usePokemonsData('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200');
  useEffect(() => {
    console.log(pokemons, loading)
  }, [pokemons, loading])*/
  return (
    <ThemeProvider theme={theme}>
      <HeaderBar></HeaderBar>
       <Container>

      <Grid container direction='column'>
        <Grid item>
          <Grid container  spacing={1}>
          {[0, 1, 2, 3].map((value) => (
            <Grid key={value} item>
            <PokeStats label='Sales' data={value * 10}/>
            </Grid>
          ))}
          </Grid>
        </Grid>
        <Grid item>
            <Container>
              <h2>Table section</h2>
              <GroupTabs/>
              <ResponsiveTable />
            </Container>
        </Grid>
      </Grid>

      </Container>
    </ThemeProvider>
  );
}

export default App;
