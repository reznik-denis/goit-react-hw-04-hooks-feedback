import React from 'react';
import PropTypes from 'prop-types';

function Notification ({message}) {
    return <div className="centerButtons">{message}</div>
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;