import React from 'react'
import LineGraph from '../../components/LineChart/LineChart'
import ScoreBoard from '../../components/Scoreboard/ScoreBoard'
import NavBar from '../../components/NavBar/NavBar'
import Logo from '../../components/Logo/Logo'
function Progress() {
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
        
        <div style={{ paddingTop: '70px' }}>
            <LineGraph />
            <ScoreBoard />
        </div>
        </div>
    )
}

export default Progress