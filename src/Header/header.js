import React from 'react';
import Menu from './Menu/Menu';
import Image from './Image/image';
import Gradient from './gradient/gradient';
import './header.scss';

function Header(props) {
   const {countCartItems} = props
  return (
    <header>
        <Menu countCartItems={countCartItems}/>
        <Gradient/>
        <Image/>
        
    </header>
    
  );
}

export default Header;
