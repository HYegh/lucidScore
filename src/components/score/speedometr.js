import React from 'react';
import SVG from '../../svg/pointer.svg'

const Speedometr = _ => {
  return (
    <div className="spContent">
      <div className="speedCont">
          <div className="speedometr">
              <span></span>
          </div>
          <img src={SVG} alt="pointer" className="pointer" />
          <span className="low">Low</span>
          <span className="high">High</span>
      </div>
    </div>
  )
}

export default Speedometr;
