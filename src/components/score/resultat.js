import React, { Component } from 'react';
import { connect } from 'react-redux'
import scoreClass from './scoreClass'

class Resultat extends Component {
  render() {
    return (
      <div className="resultat">
        <span 
          id="scoreSpan"
          className={scoreClass(this.props.currentScore)}>{this.props.currentScore}</span>
        <span className="slesh">/</span>
        <span className="maxScoreSpan">10</span>
      </div>
    );
  }
}

export default connect(
  (state) => ({currentScore: state.lScore.currentScore}),
)(Resultat);
