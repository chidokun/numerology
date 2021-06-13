/* eslint-disable react/prop-types */
import React from 'react';
import { Card, CardBody, CardTitle, Row } from 'shards-react';
import NumberChart from '../common/number-chart/NumberChart';

function BirthChartCard(props) {
    const { numerology } = props;

    return (
        <Card style={{ width: '100%' }}>
            <CardBody>
                <CardTitle>Birth Chart</CardTitle>
                <Row className="justify-content-center">
                    <NumberChart numberString={numerology.birthday.numStr} />
                </Row>
            </CardBody>
        </Card>
    );
}

export default BirthChartCard;
