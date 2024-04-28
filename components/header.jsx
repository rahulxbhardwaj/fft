import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.scss';
const Header = () => {
  return (
    <div className="navbar">
      <Link to="/home">Home</Link>
       <Link to="/courses">Courses</Link>
       <Link to="/aboutus">About Us</Link>

    </div>
  )
}
export default Header;