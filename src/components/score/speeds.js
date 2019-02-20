import React, { Component } from 'react';
import { connect } from 'react-redux';
import Speed from './speed.js'

class Speeds extends Component {
  render() {
    return (
      <div className="spedsContent">
        { this.props.data.map((item,index) => <Speed key={index} item={item} />) }
      </div>
    );
  }
}


export default connect(
  (state) => ({data: state.lScore.data}),
)(Speeds);

