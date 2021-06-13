import React from 'react';
import { Card, CardBody, CardTitle } from 'shards-react';
import Pyramids from '../pyramids/Pyramids';

function PyramidsCard(props) {
    return (
        <Card style={{ width: '100%' }}>
            <CardBody>
                <CardTitle>Pyramids</CardTitle>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Pyramids {...props} />
                </div>
            </CardBody>
        </Card>
    );
}

export default PyramidsCard;
