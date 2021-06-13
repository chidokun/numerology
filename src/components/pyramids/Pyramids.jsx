/* eslint-disable react/prop-types */
import React from 'react';
import './pyramids.css';
import img from '../../resources/pyramid-modern.svg';
import Peak from './Peak';

function Pyramids(props) {
    const { pyramids, peakAges, peakYears } = props.pyramids;
    return (
        <div className="pyramid">
            <div className="background">
                <img src={img} />
            </div>
            <div className="content">
                <div className="t1">
                    <div className="peak p4">
                        <Peak
                            number={pyramids[3][0]}
                            age={peakAges[3]}
                            year={peakYears[3]}
                        />
                    </div>
                </div>
                <div className="t2">
                    <div className="peak p3">
                        <Peak
                            number={pyramids[2][0]}
                            age={peakAges[2]}
                            year={peakYears[2]}
                        />
                    </div>
                </div>
                <div className="t3">
                    <div className="peak p1">
                        <Peak
                            number={pyramids[1][0]}
                            age={peakAges[0]}
                            year={peakYears[0]}
                        />
                    </div>
                    <div className="peak p2">
                        <Peak
                            number={pyramids[1][1]}
                            age={peakAges[1]}
                            year={peakYears[1]}
                        />
                    </div>
                </div>
                <div className="t4">
                    <div className="foot f1">{pyramids[0][0]}</div>
                    <div className="foot f2">{pyramids[0][1]}</div>
                    <div className="foot f3">{pyramids[0][2]}</div>
                </div>
            </div>
        </div>
    );
}

export default Pyramids;
