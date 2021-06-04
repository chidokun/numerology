/* eslint-disable react/prop-types */
import React from 'react';
import { Row, Col, Card, CardBody, CardTitle } from 'shards-react';
import NumberTitle from './NumberTitle';

function GeneralInfo(props) {
    return (
        <Card style={{ width: '100%' }}>
            <CardBody>
                <CardTitle className="text-center">{props.name}</CardTitle>
                <p className="text-center">{props.birthday}</p>
                <Row>
                    <Col>
                        <NumberTitle number={8} description="Con số chủ đạo" />
                    </Col>
                    <Col>
                        <NumberTitle
                            number={8}
                            description="Con số tên riêng"
                        />
                    </Col>
                    <Col>
                        <NumberTitle
                            number={8}
                            description="Con số ngày sinh"
                        />
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
}

export default GeneralInfo;
