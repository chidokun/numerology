/* eslint-disable react/prop-types */
import React from 'react';

function NumberTitle(props) {
    return (
        <div className="general-number">
            <div className="number">{props.number}</div>
            <div className="description">{props.description}</div>
        </div>
    );
}

export default NumberTitle;
