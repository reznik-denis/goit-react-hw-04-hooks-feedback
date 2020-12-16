import React from 'react';
import PropTypes from 'prop-types';

function Statistics ({good, neutral, bad, total, positivePercentage}) {
        const countTotal = total();
        const countPositiveFeedback = positivePercentage();
          return (
            <ul>
                <li>Good: <span>{good}</span></li>
                <li>Neutral: <span>{neutral}</span></li>
                <li>Bad: <span>{bad}</span></li>
                <li>Total: <span>{countTotal}</span></li>
                <li>Positive feedback: {countPositiveFeedback ? <span>{countPositiveFeedback}</span> : 0}%</li>
            </ul>)
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
}

export default Statistics