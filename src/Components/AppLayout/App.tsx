import React, {useEffect} from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import {Grid, Container } from '@material-ui/core';

import {useToggle} from '../../hooks/useToogle';
import { theme } from '../../styles/theme';
import { SideBar } from '../SideBar'
import { HeaderBar } from '../HeaderBar';
import {PokeStats} from '../PokeStats';
import { GroupTabs } from '../GroupTabs';
import {MultipleSelect} from '../Filter'

import { fetchTypes } from '../../Utils/api/types';

const Body = () => (
  <>
    <h2>Table section</h2>
    <GroupTabs/>
  </>
)
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

  useEffect(() => {
    fetchTypes()
  }, [])

  const {boolState, toggle}= useToggle(false)
  return (
    <ThemeProvider theme={theme}>
      <HeaderBar onMenuClick={toggle}></HeaderBar>
      <SideBar openBar={boolState} closer={toggle}/>

       <Container>
       <MultipleSelect />
       <Grid container direction='column'>
        <Grid item>
          <CardPanel />
        </Grid>
        <Grid style= {{width: '100%'}} item>
            <Body />
        </Grid>
      </Grid>

      </Container>
    </ThemeProvider>
  );
}

export default App;
