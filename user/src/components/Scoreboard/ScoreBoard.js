import React, { useState, useEffect } from 'react';

function ScoreBoard() {
    const [scores, setScores] = useState([{
        "rank": 1,
        "teamName": "CodeCrafters",
        "time": "36:15:22",
        "score": 100,
    },
    {
        "rank": 2,
        "teamName": "ByteBlasters",
        "time": "37:45:10",
        "score": 100,
    },
    {
        "rank": 3,
        "teamName": "HackHeroes",
        "time": "39:02:50",
        "score": 50,
    },
    {
        "rank": 4,
        "teamName": "PixelPioneers",
        "time": "40:30:18",
        "score": 400,
    },
    {
        "rank": 5,
        "teamName": "BitBusters",
        "time": "41:55:30",
        "score": 300,
    }]);

    // useEffect(() => {
    //     setScores(scores);
    // }, []); // Empty dependency array ensures this effect runs only once after the initial render

    return (
        <div className="recent-order">
            <h2>Score Board</h2>
            <table>
                <thead>
                    <tr>
                        {/* <th>Rank</th> */}
                        <th>Team Name</th>
                        <th>Time</th>
                        <th>Score</th>
                        {/* <th></th> */}
                    </tr>
                </thead>
                <tbody>
                    {scores.map((score, index) => (
                        <tr key={index}>
                            {/* <td>{score.rank}</td> */}
                            <td>{score.teamName}</td>
                            <td>{score.time}</td>
                            <td>{score.score}</td>
                            {/* <td className="primary">Details</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ScoreBoard;
