import React from 'react';
import './Header.scss';
import logo from '../../img/logo.png';
import { headerData } from './headerData';

const Header = () => {

const headerImg=headerData.map((item)=><img key={item.id} src={item.logo} alt={`Seeon logo ${item.id}`}/>);
 
  return(
      <header className='header'>
          <img src={logo} alt="logo" className="header__logo" />
          <h3 className="heading-3">Your own home</h3>
          <h1 className="heading-1">The ultimate personal freedom</h1>
          <button className="btn header__btn">view our properties</button>
          <div className="header__seenon-text">Seen on</div>
          <div className="header__seenon-logo">
            {headerImg}
            </div>      
      </header>
  );
};

export default Header;
