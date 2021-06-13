/* eslint-disable react/prop-types */
import React from 'react';
import { Row, Col, Card, CardBody, CardTitle } from 'shards-react';
import NumberTitle from './NumberTitle';

function GeneralInfo(props) {
    const { name, birthday, rulingNumber } = props.numerology;
    return (
        <Card style={{ width: '100%' }}>
            <CardBody>
                <CardTitle className="text-center">{name.original}</CardTitle>
                <p className="text-center">{birthday.original}</p>
                <Row>
                    <Col>
                        <NumberTitle
                            number={rulingNumber}
                            description="Con số chủ đạo"
                        />
                    </Col>
                    <Col>
                        <NumberTitle
                            number={name.completeNameNumber}
                            description="Con số tên riêng"
                        />
                    </Col>
                    <Col>
                        <NumberTitle
                            number={birthday.dayNumber}
                            description="Con số ngày sinh"
                        />
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
}

export default GeneralInfo;
