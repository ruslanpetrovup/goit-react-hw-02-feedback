import React from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
    onGood = () => {
        this.setState(prevState => {
            return {
                good: prevState.good + 1
            }
        })
    }
    onNeutral = () => {
        this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1
            }
        })
    }
    onBad = () => {
        this.setState(prevState => {
            return {
                bad: prevState.bad + 1
            }
        })
    }
    countTotalFeedback = () => {
        const total = this.state.good + this.state.neutral + this.state.bad;
        return total
    }
    countPositiveFeedbackPercentage = () => {
        const positive = (this.state.good) / (this.state.bad + this.state.good ) * 100
        return positive
    }
    render() {
        return (
            <div>
                <FeedbackOptions onGood={this.onGood} onNeutral={this.onNeutral} onBad={this.onBad}/>
                <Statistics good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}/>
            </div>
        )
    }
}
export default Feedback