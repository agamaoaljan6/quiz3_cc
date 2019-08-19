import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return ( 
    <nav>
      <NavLink to="/">
        Welcome 
      </NavLink>
      <NavLink to="/auctions">
        Auctions 
      </NavLink>
    </nav>
  );
}

export default NavBar;