import React from 'react';
import { Card, CardBody, CardTitle, Row } from 'shards-react';
import BirthChart from './BirthChart';

function BirthChartCard() {
    return (
        <Card style={{ width: '100%' }}>
            <CardBody>
                <CardTitle>Birth Chart</CardTitle>
                <Row className="justify-content-center">
                    <BirthChart />
                </Row>
            </CardBody>
        </Card>
    );
}

export default BirthChartCard;
