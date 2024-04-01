import React from 'react';
// Import your CSS file for styling

const ElevatedButton = ({ onClick, children }) => {
    return (
        <button className="elevated-button" onClick={onClick}>
            {children}
        </button>
    );
};

export default ElevatedButton;
