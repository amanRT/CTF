// import React, { Component } from 'react';
// // import './CSS/Homepage.css'; // Import your CSS file
// import 'C://Users//Paras//Desktop//Coloseum//colloseum//src//HomePage//CSS//Homepage.css'
// import NavBar from './Page1/NavBar';
// import Body from './Page1/Body';
// import Logo from './Page1/Logo';
// import ScoreBoard from './Page2/ScoreBoard';
// import LineGraph from './Page2/LineChart';

// export class Homepage extends Component {
//     render() {
//         return (
//             <>
//                 <div className="app-container">
//                     <Logo />
//                     <NavBar />
//                 </div>
//                 <Body />
//                 <div className="chart-container">
//                     <LineGraph />
//                     <ScoreBoard />
//                 </div>
//                 <div>
//                 </div>
//             </>
//         );
//     }
// }

// export default Homepage;

import React from 'react';
import './Homepage.css';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Body from '../../components/Body/Body'; // Assuming you have a Home component
// import Challenges from './Challenges'; // Assuming you have a Challenges component
import Logo from '../../components/Logo/Logo';
import Progress from '../Progress/Progress';

export default function App() {
    return (
            <div style={{ backgroundColor: 'black', }}>
                <div className='logo-app-container'>
                    <div className='logo-container'>
                        <Logo />
                    </div>
                    <div className="app-container">
                        <NavBar />
                    </div>
                </div>
                <Routes>
                    <Route path="/" exact element={<Body />} />
                    {/* <Route path="/scoreboard" element={<ScoreBoard />} /> */}
                    <Route path="/progress" element={<Progress />} />
                    {/* <Route path="/graph" element={<LineChart />} /> */}
                    {/* <Route path="/challenges" element={<Challenges />} /> */}
                </Routes>
            </div>
    );
}