import React, { useState, useEffect } from 'react';
// import {Routes,Route} from 'react-router-dom'

import {Link} from 'react-router-dom';
import './Navbar.css';
import Logo from './logo1ctf.png'
export default function Navbar() {
  const [text, setText] = useState('');
  const fullText = "Coolosseum 14.0";
  const typingSpeed = 100; // Adjust typing speed (milliseconds)

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {

      if (index < fullText.length - 1) {
        setText(prevText => prevText + fullText[index]);
        index++;
      } else {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, []); // empty dependency array to run effect only once on mount

  return (
    <div>

      <div className='Navbar-Links'>
        <div className='navbar-logo'>
          <img src={Logo} alt='#'></img>
        </div>
        <div  className='navbar-inside-links'>
        <Link className='button' to='/'>Home</Link>
        <Link className='button' to="/login">Login</Link>
        <Link className='button' to='/register'>Register</Link> 
        </div>
      </div>
      {/* <div className='Navbar-underline'></div> */}
      <div id='typing-heading' className='Navbar-colosseum'>
        <h1>{text}</h1>
      </div>
    </div>
  );
}

