import React from 'react';
import './App.css';
import Header from './components/header'
import Score from './components/score'

const App = _ => {
  return (
    <div className="App">
      <Header />
      <Score />
    </div>
  );
}

export default App;
