import React from 'react';
import PropTypes from 'prop-types';

function Section({ title, children }) {
    return <section>
        <h2 className="feedback">{title}</h2>
        {children}
        </section>
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;