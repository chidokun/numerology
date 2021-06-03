import React from 'react';
import { Card, CardBody, CardTitle, Row } from 'shards-react';
import GiantNumber from './GiantNumber';

function RulingNumberCard() {
    return (
        <Card style={{ width: '100%' }}>
            <CardBody>
                <CardTitle>Ruling Number</CardTitle>
                <Row style={{ paddingTop: 24 }}>
                    <div style={{ margin: '0 24px 0' }}>
                        <GiantNumber number={8} />
                    </div>
                    <div>
                        <p>
                            ancb jwbvedhje fehbvfhj ferjbf frjhfj fervfv fjhvfhj
                            fjvdfjd
                        </p>
                        <p>
                            ancb jwbvedhje fehbvfhj ferjbf frjhfj fervfv fjhvfhj
                            fjvdfjd
                        </p>
                        <p>
                            ancb jwbvedhje fehbvfhj ferjbf frjhfj fervfv fjhvfhj
                            fjvdfjd
                        </p>
                        <p>
                            ancb jwbvedhje fehbvfhj ferjbf frjhfj fervfv fjhvfhj
                            fjvdfjd
                        </p>
                    </div>
                </Row>
            </CardBody>
        </Card>
    );
}

export default RulingNumberCard;
