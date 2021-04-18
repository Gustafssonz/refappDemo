import React from 'react';
import Button from '@material-ui/core/Button';
import { analyzeText } from './analysis'
import { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import InputBox from 'components/InputBox';
import OutputBox from 'components/OutputBox';


interface IData {
  numWords: number,
  numLetters: number
}

function App() {
  const [data, setData] = useState("");
  const [numLetters, setLetters] = useState(Number);
  const [numWords, setWords] = useState(Number);
  var noanswer: boolean = false;


  let result: { numWords: number; numLetters: number };

  const clickAlert = async () => {
    console.log(data);
    await analyzeText(data).then( value => {

      console.log("analyse", value)
      setLetters(value.numLetters);
      setWords(value.numWords);
    });
    // setResult(result);

  }
  // console.log(result2);

  // const fetchData = async () => {
  //   input = await analyzeText(testData);
  // };
  // fetchData();

  return (
    <div className="App">
      <header className="App-header">
        {numLetters === 0 ?
        <>
          <TextField id="standard-basic" onChange={e => setData(e.target.value)}></TextField>
			    <Button variant="contained" onClick={() => clickAlert()}>Submit</Button>
        </>: <p>Your text consist of {numWords} words ({numLetters} letters)</p>
        }
      </header>
    </div>
  );
}

export default App;
