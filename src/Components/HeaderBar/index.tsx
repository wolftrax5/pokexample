import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { MenuSharp } from  '@material-ui/icons';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Bar: {
      marginBottom: theme.spacing(2),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);
interface IHeaderBarProps {
  onMenuClick: ()=> void;
  title?: string;
}
export const HeaderBar = ({onMenuClick}:IHeaderBarProps) => {
  const classes = useStyles();
  return (
      <AppBar  className={classes.Bar} position="static">
        <Toolbar>
          <IconButton onClick={onMenuClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuSharp />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
              PokeApp
          </Typography>
        </Toolbar>
      </AppBar>
  );
}