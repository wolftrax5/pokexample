import React, {useEffect} from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { usePokemonsData } from '../../hooks/useFetchData'
import { theme } from '../../styles/theme';
import { HeaderBar } from '../HeaderBar';
import {PokeStats} from '../PokeStats';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    cardpanel: {
      margin: theme.spacing(2),
    }
  }),
);
function App() {
  const classes = useStyles();
  const { pokemons, loading } = usePokemonsData();
  useEffect(() => {
    console.log(pokemons, loading)
  }, [pokemons, loading])
  return (
    <ThemeProvider theme={theme}>
      <HeaderBar></HeaderBar>
       <div className={classes.root}>
      <Grid container direction='column'>
        <Grid item className={classes.cardpanel}>
          <Grid container spacing={2}>
          {[0, 1, 2, 3].map((value) => (
            <Grid key={value} item>
            <PokeStats label='Sales' data={value * 10}/>
            </Grid>
          ))}
          </Grid>
        </Grid>
        <Grid item>
          <h2>Table section</h2>
        </Grid>
      </Grid>
    </div>
    </ThemeProvider>
  );
}

export default App;
