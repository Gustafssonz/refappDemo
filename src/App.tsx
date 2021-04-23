import React from 'react';
import { analyzeText } from './analysis'
import { useState } from 'react';
import InputBox from 'components/InputBox';
import OutputBox from 'components/OutputBox';
import IData from 'models/IData';
import { Button, Card, CardContent, CircularProgress, createMuiTheme, CssBaseline, makeStyles, MuiThemeProvider, Slide } from '@material-ui/core';
import CardComponent from 'components/CardComponent';

const useStyles = makeStyles(() => ({
  app: {
    display: 'flex',
    alignContent: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    color: '#fff',
    background: 'linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)',
    backgroundSize: '300% 300%',
    animation: 'Gradient 10s ease infinite',
    height: '100vh',
  },
}));

function App() {

  const classes = useStyles();

  return (

    <div className={classes.app}>
      <CardComponent />
    </div>
  );
}

export default App;
