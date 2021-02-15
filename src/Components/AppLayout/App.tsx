import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';
import { theme } from '../../styles/theme';
import{
  CustomCheckbox
} from '../CustomCheckbox';

function App() {
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
        <Typography color='secondary' variant='h1'>
          Edit <code>src/App.tsx</code> and save to reload.
        </Typography>
      <Typography>
        <Link  href="https://reactjs.org" onClick={preventDefault}>
        Learn React
        </Link>
      </Typography>
    </div>
      <CustomCheckbox />
    </ThemeProvider>
  );
}

export default App;
