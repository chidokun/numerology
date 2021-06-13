/* eslint-disable react/prop-types */
import React from 'react';
import './numberChart.css';
import arrow from '../../../resources/arrow.svg';
import arrowDash from '../../../resources/arrow-dash.svg';

function NumberChart(props) {
    let map = new Array(10).fill(0);
    [...props.numberString].forEach((e) => map[parseInt(e)]++);
    let strMap = [];
    map.forEach((v, index) => {
        let str = '';
        for (let i = 0; i < v; i++) {
            str += index;
        }
        if (str === '') {
            str = ' ';
        }
        strMap.push(str);
    });

    return (
        <div className="number-chart">
            <div className="number-chart-arrow" style={{ display: 'none' }}>
                <img src={arrow} />
                <img src={arrowDash} />
            </div>
            <div className="number-chart-row">
                <div className="number-chart-number">{strMap[3]}</div>
                <div className="number-chart-number">{strMap[6]}</div>
                <div className="number-chart-number">{strMap[9]}</div>
            </div>
            <div className="number-chart-row">
                <div className="number-chart-number">{strMap[2]}</div>
                <div className="number-chart-number">{strMap[5]}</div>
                <div className="number-chart-number">{strMap[8]}</div>
            </div>
            <div className="number-chart-row">
                <div className="number-chart-number">{strMap[1]}</div>
                <div className="number-chart-number">{strMap[4]}</div>
                <div className="number-chart-number">{strMap[7]}</div>
            </div>
        </div>
    );
}

export default NumberChart;
