import React, { useState, useEffect } from 'react';

function ScoreBoard() {
    const [scores, setScores] = useState([]);
    const [button, setButton] = useState(true);

    useEffect(() => {
        const fetchScores = async () => {
            try {
                let response;
                if (button) {
                    response = await fetch('http://localhost:3000/getuserRegister');
                }
                // } else {
                //     response = await fetch('http://localhost:3000/selectTopUsers');
                // }

                if (!response.ok) {
                    throw new Error('Failed to fetch scores');
                }
                
                const data = await response.json();
                console.log('API Response:', data); // Log the API response for debugging
                setScores(data);
            } catch (error) {
                console.error('Error fetching scores:', error);
            }
        };

        fetchScores();
    }, [button]); // Depend on button state only, not scores
    
    // const handleTopUserClick = () => {
    //     setButton(false);
    // };

    const handleAllUserClick = () => {
        setButton(true);
    };

    return (
        <div className="recent-order">
            <h2>Score Board</h2>
            <table>
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Time</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {scores.map((score, index) => (
                        <tr key={index}>
                            <td>{score.teamname}</td>
                            <td>{score.lastUpdated}</td>
                            <td>{score.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <button onClick={handleTopUserClick}>Top User</button> */}
            <button onClick={handleAllUserClick}>All User</button>
        </div>
    );
}

export default ScoreBoard;
