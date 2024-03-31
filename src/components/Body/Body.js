import React from 'react';
import './Body.css'
import ElevatedButton from '../ElevatedButton/ElevatedButton';

function Body() {
    const handleClick = () => {
        alert("View Challenges");
    };

    return (
        <div className="body-wrapper">
            <div className="text-and-logo-container">
                <div className="body-container">
                    <div className="body-text">
                        Colosseum 14.0
                    </div>
                    <div className="body-text" style={{ marginTop: '10px' }}>
                        Capture The Flag (CTF)
                    </div>
                    {/* <div className="challenge-button" style={{ marginTop: '10px' }}>
                        <button type="button" autoFocus onClick={handleClick} >VIEW CHALLENGES</button>
                    </div> */}

                    <div style={{ marginTop: '25px' }}>
                        <ElevatedButton onClick={handleClick}>View Challenges</ElevatedButton>
                    </div>
                </div >
                {/* <div className="logo-container" >
                    <Logo1 />
                </div> */}
            </div>
        </div>
    );
}

export default Body;
