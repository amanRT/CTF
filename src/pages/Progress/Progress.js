import React from 'react'
import LineGraph from '../../components/LineChart/LineChart'
import ScoreBoard from '../../components/Scoreboard/ScoreBoard'

function Progress() {
    return (
        <div style={{ paddingTop: '70px' }}>
            <LineGraph />
            <ScoreBoard />
        </div>
    )
}

export default Progress