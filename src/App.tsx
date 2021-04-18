import React from 'react';
import Button from '@material-ui/core/Button';
import { analyzeText } from './analysis'
import { useState } from 'react';
import InputBox from 'components/InputBox';


interface IData {
  numWords: number,
  numLetters: number
}

function App() {
  const [data, setData] = useState("");
  const [numLetters, setLetters] = useState(Number);
  const [numWords, setWords] = useState(Number);


  let result: { numWords: number; numLetters: number };

  const clickAlert = async () => {
    await analyzeText(data).then( value => {
      setLetters(value.numLetters);
      setWords(value.numWords);
    });
  }

  const handleChange = (e: any) => {
    setData(e.target.value)
  }

  return (
    <div className="App">
        {numLetters === 0 ?
        <>
          <InputBox handleClick={() => clickAlert()} handleChange={ (e) => handleChange(e)} ></InputBox>
        </>: <p>Your text consist of {numWords} words ({numLetters} letters)</p>
        }
    </div>
  );
}

export default App;
