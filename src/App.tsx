import React from 'react';
import Button from '@material-ui/core/Button';
import { analyzeText } from './analysis'
import { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import InputBox from 'components/InputBox';
import OutputBox from 'components/OutputBox';



function App() {
  const [data, setData] = useState("");
  const [result2, setResult] = useState({})
  var noanswer : boolean = false;
  var result: { numWords: number; numLetters: number };

  const clickAlert = async () => {
    return result = await analyzeText(data);
  }

  // const renderQuestionOrAnswer = () => {
  //   if (isLoggedIn) {
  //     return <InputBox></InputBox>;
  //   } else {
  //     return <OutputBox></OutputBox>;
  //   }
  // }

  // const fetchData = async () =>  {
  //   input = await analyzeText(testData);
  // };
  // fetchData();

    return (
      <div className="App">
          <header className="App-header">
          {result2 ?
          <InputBox handleClick={(e) => clickAlert(e)}></InputBox> :
          <OutputBox text="hej"></OutputBox>
          }
          </header>
      </div>
    );
}

export default App;
