import React from 'react';
import Button from '@material-ui/core/Button';
import { analyzeText } from './analysis'
import { useState } from 'react';
import InputBox from 'components/InputBox';
import OutputBox from 'components/OutputBox';
import { Container, Grid } from '@material-ui/core';
import IData from 'models/IData';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: '100%',
      width: '100%'
    },
  }),
);

function App() {
  // CSS
  const classes = useStyles();

  const dataTest: IData = { numLetters: 0, numWords: 0}

  const [data, setData] = useState("");
  const [results, setResults] = useState(dataTest);

  const clickAlert = async () => {
    await analyzeText(data).then(value => {
      console.log(value)
      setResults(value);
    });
  }

  const handleChange = (event: any) => {
    setData(event.target.value)
  }

  return (
        <div className={classes.container}>
          {results.numLetters === 0 ?
            <InputBox handleClick={() => clickAlert()} handleChange={(e) => handleChange(e)} /> :
            <OutputBox data={results} />
          }
        </div>

  );
}

export default App;
