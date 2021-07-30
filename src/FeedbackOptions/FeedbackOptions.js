import React from 'react';
import style from './FeedbackOptions.module.css'

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
    return (
        <>
        <button className={style.button} type="button" onClick={onGood}>Good</button>
        <button className={style.button} type="button" onClick={onNeutral}>Neutral</button>
        <button className={style.button} type="button" onClick={onBad}>Bad</button>
        </>
    )
}
export default FeedbackOptions