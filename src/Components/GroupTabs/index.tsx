import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

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
export interface ITabProp {
  label: string;
  component: JSX.Element;
}
export interface IGroupTabsProps {
  tabs: ITabProp[];
}

export function GroupTabs(props: IGroupTabsProps) {
  const {tabs} = props;

  const [tabSelected, setTabSelected] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabSelected(newValue);
  };

  return (
    <>
      <AppBar position="static" color="default">
        <Tabs
          value={tabSelected}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant='scrollable'
          scrollButtons='auto'
        >
          {
            tabs.length !== 0 ? tabs.map((item, i) => (
              <Tab
                id={`${item.label} tab`}
                key={`${item.label} key ${i}`}
                label={item.label}
                arial-label={`${item.label} tab`}
              />
            )) : null
          }
        </Tabs>
      </AppBar>
      {
        tabs.length !== 0 ? tabs.map((item, i) => (
          <TabPanel value={tabSelected} index={i}  key={`${item.label} panel ${i}`}>
            {item.component}
          </TabPanel>
        )) : null
      }
    </>
  );
}