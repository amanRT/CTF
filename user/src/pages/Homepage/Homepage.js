import React from 'react';
import './Homepage.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Body from '../../components/Body/Body';
import Challenges from '../Challenges/challenges'; // Assuming you have a Challenges component
import Logo from '../../components/Logo/Logo';
import Progress from '../Progress/Progress';

const Homepage = ({ id }) => {
    console.log(id);
    return (
        <div style={{ backgroundColor: 'black' }}>
            <div className='logo-app-container'>
                <div className='logo-container'>
                    <Logo />
                </div>
                <div className="app-container">
                    <NavBar />
                </div>
            </div>
            
            <Routes>
                <Route path="/" exact element={<Body id={id} />} />
                {/* Pass the id to the Challenges component */}
                {/* <Route path="/challenges" element={<Challenges id={id} />} /> */}
                <Route path="/progress" element={<Progress />} />
            </Routes>
        </div>
    );
}

export default Homepage;
