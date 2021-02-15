import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { theme } from '../../styles/theme';


function App() {
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <Typography>
          Edit <code>src/App.tsx</code> and save to reload.
        </Typography>
      <Typography>
        <Link  href="https://reactjs.org" onClick={preventDefault}>
        Learn React
        </Link>
      </Typography>
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
