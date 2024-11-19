// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.scss';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/notes">Notes</Link>
      <Link to="/aboutus">About Us</Link>

      {isAuthenticated && (
        <Link to="/study" className="special-link">
          Study
        </Link>
      )}

      {isAuthenticated ? (
        <>
          <a href="#" onClick={(e) => {
            e.preventDefault();
            logout({ returnTo: window.location.origin });
          }}>Log Out</a>
          <h1 className="UserName">{"Welcome " + user.name}</h1>
        </>
      ) : (
        <a href="#" onClick={(e) => {
          e.preventDefault();
          loginWithRedirect();
        }}>Log In</a>
      )}
    </div>
  );
};

export default Header;
