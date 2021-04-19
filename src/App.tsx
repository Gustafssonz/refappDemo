import React from 'react';
import { analyzeText } from './analysis'
import { useState } from 'react';
import InputBox from 'components/InputBox';
import OutputBox from 'components/OutputBox';
import IData from 'models/IData';
import './App.css';

function App() {

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
        <div className="app">
          {results.numLetters === 0 ?
            <InputBox handleClick={() => clickAlert()} handleChange={(e) => handleChange(e)} /> :
            <OutputBox data={results} />
          }
        </div>

  );
}

export default App;
