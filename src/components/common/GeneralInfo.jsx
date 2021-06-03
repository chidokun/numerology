import React from 'react';
import { Row, Col, Card, CardBody, CardTitle } from 'shards-react';
import NumberTitle from './NumberTitle';

function GeneralInfo() {
    return (
        <Card style={{ width: '100%' }}>
            <CardBody>
                <CardTitle className="text-center">
                    Nguyễn Lê Hoàng Tuấn
                </CardTitle>
                <p className="text-center">08/11/1996</p>
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
