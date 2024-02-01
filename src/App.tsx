import React from 'react';

import { Content } from './components/Content/Content';
import { ThemeProvider } from './theme';
import { useStyles } from './App.styles';

function App() {

  const { classes } = useStyles();

  return (
    <ThemeProvider>
      <div className={classes.root}>
        <div className={classes.sidePanel}/>
        <Content/>
      </div>
    </ThemeProvider>
  );
}

export default App;
