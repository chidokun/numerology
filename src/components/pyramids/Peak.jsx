/* eslint-disable react/prop-types */
import React from 'react';
import './pyramids.css';

export default function Peak(props) {
    const { number, age, year } = props;
    return (
        <div className="pyramid-peak">
            <div className="peak-number">{number}</div>
            <div className="peak-age">{age}t</div>
            <div className="peak-year">{year}</div>
        </div>
    );
}
