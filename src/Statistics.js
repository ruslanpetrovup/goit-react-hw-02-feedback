import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
        return good === 0 && bad === 0 ? <><h2>Statistical</h2><p>No feedback given</p></>:(
            <>
                <h2>Statistical</h2>
                <p>Good:{good}</p>
                <p>Neutral:{neutral}</p>
                <p>Bad:{bad}</p>
                <p>Total: {total}</p>
                <p>Positive feedback: {good === 0 && bad === 0 ? 0 : positivePercentage}%</p>
            </>
        )
    }
export default Statistics