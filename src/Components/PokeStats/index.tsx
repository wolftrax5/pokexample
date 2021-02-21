import React from 'react';
import {Paper , Typography} from '@material-ui/core'
import {
    makeStyles,
    createStyles,
    Theme as AugmentedTheme,
} from '@material-ui/core/styles';

interface IPockeProps {
    label: string;
    data: number | string;
  }
  const useStyles = makeStyles((theme: AugmentedTheme) =>
  createStyles({
    root: {
      width: theme.spacing(22),
      height: theme.spacing(8),
  }}));
export function PokeStats(props: IPockeProps) {
    const classes = useStyles()
    const {label, data} = props
    return(
        <Paper className={classes.root} elevation={1}>
            <Typography variant='h6'>{label}</Typography>
            <Typography variant='h4' >{data}</Typography>
        </Paper>
    )
}

