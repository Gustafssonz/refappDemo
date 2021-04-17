import React from 'react';
import InputBox from 'components/InputBox';
import OutputBox from 'components/OutputBox';

function App() {

  const input: String = '';

  return (
    <div className="App">
      <header className="App-header">
      <InputBox></InputBox>

      <OutputBox ></OutputBox>
      </header>
    </div>
  );
}

export default App;
