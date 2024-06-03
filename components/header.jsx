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
      <a href ="https://drive.google.com/drive/folders/1MrmCnH6IQGM7-Abdw-Z8MZhzb-e4RE8Q?usp=sharing">Most Repeated</a>
       <a href ="https://drive.google.com/drive/folders/1j1lfex00koNFlRSxAmFzyGRgHwY6MRTe?usp=sharing">YT Lecture Notes</a>
    </div>
  )
}
export default Header;