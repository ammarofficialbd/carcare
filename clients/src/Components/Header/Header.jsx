// src/components/Navbar.js
import React from 'react';
import { FaBars } from "react-icons/fa";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUser, faShoppingCart, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import LayOut from '../LayOut';
import SocialIcons from '../SocialIcons';
const Header = ({toggleSidebar}) => {
  return (
    <div className="navbar">
      <LayOut>
        <> 
        <div className="navbar-top">
         <SocialIcons/>
        <div className="logo">KICKER</div>
        <div className="user-actions">
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faShoppingCart} />
          <button className="subscribe-button">
            <FontAwesomeIcon icon={faPaperPlane} /> Subscribe
          </button>
        </div>
      </div>
      </>
      </LayOut>


      <div className="navbar-bottom">

        <LayOut> 
        <div className='nav-btm'> 
        <div className="menu-icon" onClick={toggleSidebar}> <FaBars /></div>
        <div className="menu-items">
          <a href="#">HOME</a>
          <a href="#">FEATURES</a>
          <a href="#">CATEGORIES</a>
          <a href="#">DESIGN</a>
          <a href="#">POST STYLES</a>
          <a href="#">SHOP</a>
        </div>
        <div className="search-icon">🔍</div>
          </div>
        </LayOut>
       
      </div>
    
    
    
    </div>
  );
};

export default Header;
