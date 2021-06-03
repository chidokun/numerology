import React from 'react';
import { Card, CardBody, CardTitle, Col, Row } from 'shards-react';
import BirthChart from './BirthChart';

function BirthChartCard() {
    return (
        <Card style={{ width: '100%' }}>
            <CardBody>
                <CardTitle>Birth Chart</CardTitle>
                <Row>
                    <Col className="justify-content-center">
                        <BirthChart />
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
}

export default BirthChartCard;
