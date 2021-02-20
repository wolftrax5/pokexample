import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { theme } from '../../styles/theme';
import { HeaderBar } from '../HeaderBar';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    }
  }),
);
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <HeaderBar></HeaderBar>
       <div className={classes.root}>
      <Grid container direction='column'>
        <Grid item>
            <h2>CARDS</h2>
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
