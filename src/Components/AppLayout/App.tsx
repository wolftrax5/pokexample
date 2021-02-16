import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { theme } from '../../styles/theme';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
       <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper} >xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper} >xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper} >xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper} >xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper} >xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper} >xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper} >xs=3</Paper>
        </Grid>
      </Grid>
    </div>
    </ThemeProvider>
  );
}

export default App;
