import React, { useEffect, useState } from 'react';
import {Box , Typography} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';

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
    const theme = useTheme();

    const [colorText, setColorText]= useState(theme.palette.text.secondary)
    const {success, error} = theme.palette
    useEffect(()=> {
        
        if(data > 20){
            setColorText(success.main)
        }
        if(data<20){
            setColorText(error.main)
        }
    }, [data, success, error])
    return(
        <Box display="flex" flexDirection="row" justifyContent="space-around" alignItems="center" className={classes.root} bgcolor="background.paper">
            <Typography>{label}</Typography>
            <Typography variant='h4' style={{ color: colorText }}>{data}</Typography>
        </Box>
    )
}

