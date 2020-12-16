import { useState } from 'react';
import './App.css';

import Statistics from './Components/Statistics';
import Section from './Components/Section';
import FeedbackOptions from './Components/FeedbackOptions';
import Notification from './Components/Notification';

export default function App() {
    const [good,  setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const options = Object.keys({ good, neutral, bad });

    const countTotalFeedback = () => {
        const countTotal = good + neutral + bad;
        return countTotal;
    }

    const countPositiveFeedbackPercentage = () => {
        const countPositiveFeedback = Math.round(good / countTotalFeedback() * 100);
        return countPositiveFeedback;
    }

    const increment = (option) => {
        switch (option) {
            case 'good':
                setGood(state => state + 1);
                break;
            case 'neutral':
                setNeutral(state => state + 1);
                break;
            case 'bad':
                setBad(state => state + 1);
                break;
            default:
                console.log('пустий масив');
        }
        }
        
    return (<div className="App">
        <Section title={"Please leave feedback"}>
        <FeedbackOptions options={options} onLeaveFeedback={increment}/>
        </Section>
        <Section title={"Statistick"}>
                {countTotalFeedback() ? <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={countTotalFeedback}
                    positivePercentage={countPositiveFeedbackPercentage} /> : <Notification message="No feedback given" />}
        </Section>
      </div>
    );
}