import React, { Component } from 'react';
import scoreClass from './scoreClass'

class Speed extends Component {
  scoreText (score) {
    if(score <= 3.3){
      return "Identify"
    }

    if(score > 3.3 && score <= 5.3){
      return "Protect"
    }

    if(score > 5.3){
      return "Detect"
    }
  }
  render() {
    return (
      <div className="spCont">
        <div className="num">
          <span id="spScore" className={scoreClass(this.props.item)}>{this.props.item}</span>
          <span className="spMaxScore">/10</span>
        </div>
        <span className="text">{this.scoreText(this.props.item)}</span>
      </div>
    );
  }
}

export default Speed;
