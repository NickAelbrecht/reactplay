import React from 'react';

const scoreboard = ({ score, clearScore, incrementScore }) => {


    return (
        <>
            <div>
                Score : {score}
            </div>
            <button onClick={() => incrementScore(1)}>
                + 1
            </button>
            <br></br>
            <button onClick={clearScore}>
                Maak leeg
            </button>
        </>
    );

};

export default scoreboard;