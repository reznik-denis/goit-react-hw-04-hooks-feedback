import React from 'react';
import PropTypes from 'prop-types';

function FeedbackOptions ({options, onLeaveFeedback}) {
    return <div className="centerButtons">{options.map((option) => (
    <button key = {option} type="button" className="button" onClick={() => onLeaveFeedback(option)}> { option } </button>
    ))}</div>
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
}


export default FeedbackOptions