import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.scss';
const Header = () => {
  return (
    <div className="navbar">
      <Link to="/home">Home</Link>
      {/* <Link to="/notes">Notes</Link> */}
       <Link to="/notes">Notes</Link>
       <Link to="/aboutus">About Us</Link>
    </div>
  )
}
export default Header;