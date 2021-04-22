import React, { useEffect } from 'react';
import { analyzeText } from './analysis'
import { useState } from 'react';
import InputBox from 'components/InputBox';
import OutputBox from 'components/OutputBox';
import IData from 'models/IData';
import { CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  app: {
    display: 'flex',
    alignContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%'
  },
}));

function App() {
  const classes = useStyles();

  const dataTest: IData = { numLetters: 0, numWords: 0}
  const [data, setData] = useState("");
  const [results, setResults] = useState(dataTest);
  const [isLoading, setLoading] = useState<boolean>(false);

  const clickAlert = async () => {
    setLoading(true);
    const value = await analyzeText(data);
    setLoading(false);
    setResults(value);
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData(event.target.value)
  }

  if (isLoading) {
    return (
      <div className={classes.app}>
      <CircularProgress />
      </div>
    );
  }
  return (
    <div className={classes.app}>
      {results.numLetters === 0 ?
        <InputBox handleClick={() => clickAlert()} handleChange={(e) => handleChange(e)} currentData={data} /> :
        <OutputBox data={results} />
      }
    </div>
  );
}

export default App;
