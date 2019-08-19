import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(props) {
	const { auth } = props;
  const { signOut } = auth;
  return ( 
    <nav>
      <NavLink to="/">
        Welcome 
      </NavLink>
      <NavLink to="/auctions">
        Auctions 
      </NavLink>
      { !auth.user ? (
        <NavLink to="/login">
          Sign In 
        </NavLink>
      ) : (
        <span>
            <NavLink to="/auction/new">
            New Auction 
          </NavLink>
          Signed in as: {auth.user.username}
          <NavLink to="#" onClick={signOut}>
            Sign Out 
          </NavLink>
        </span>
      )}
    </nav>
  );
}

export default NavBar;