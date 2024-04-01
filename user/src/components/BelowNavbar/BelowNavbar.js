import React from 'react'
// import Hackert from './Hackert.png'
import aigenerated from './aigenerated.png';
import './BelowNavbar.css';

export default function BelowNavbar() {
  return (
    <div className='Below-Navbar-main'>
      
      <div className='glow-on-hover Below-Navbar-content'>
        <p><span className='ctf-high'>Capture the Flag (CTF)</span> in computer security is an exercise in which participants attempt to find text strings, called "flags", which are secretly hidden in purposefully-vulnerable Files, Documents, Programs and Websites.
          <br/> <br/>
Participants competing in teams or individually to solve a series of challenges that test their Cybersecurity skills, such as General Skills, Cryptography, Web Exploitation, Forensics & OSINT.</p>

<h2>🚩Catch The Flag🚩</h2>
      </div>
      <div className='Below-Navbarimage'>
        <img src={aigenerated} alt="" />
      </div>
    </div>
  )
}
