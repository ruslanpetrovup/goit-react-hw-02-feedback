import React from 'react';

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
    return (
        <>
        <button type="button" onClick={onGood}>Good</button>
        <button type="button" onClick={onNeutral}>Neutral</button>
        <button type="button" onClick={onBad}>Bad</button>
        </>
    )
}
export default FeedbackOptions