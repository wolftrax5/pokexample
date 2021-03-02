import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { ResponsiveTable } from '../ResponsiveTable'
import { Paper } from '@material-ui/core';
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    panelContainer: {
      [theme.breakpoints.down('sm')]: {
        overflow: 'auto'
      },
    }

  }),
);
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  const classes = useStyles()
  return (
    <Paper
      square
      className={classes.panelContainer}
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>{children}</>
      )}
    </Paper>
  );
}

export function GroupTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Item One"  />
          <Tab label="Item Two"  />
          <Tab label="Item Three"  />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ResponsiveTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </>
  );
}