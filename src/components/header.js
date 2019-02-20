import React from 'react';
import Image from '../images/Layer_1.png'

const Header = _ => {
  return (
    <header>
        <img src={Image} alt="logo" />
        <div className="headerText">
            LucidScore.AI [CompanyName] [Logged in UserName]
        </div>
        <span className="icon"></span>
    </header>
  )
}

export default Header;