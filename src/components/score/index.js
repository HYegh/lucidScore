import React from 'react';
import CurrentScore from './currentScore'
import Result from './result'
import Speedometr from './speedometr'
import Speeds from './speeds'


const Score = _ => {
  return (
    <div className="scoreContent">
      <CurrentScore />
      <Result />
      <Speedometr />
      <Speeds />
  </div>
  )
}

export default Score;