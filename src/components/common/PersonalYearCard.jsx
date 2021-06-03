import React from 'react';
import { Card, CardBody, CardTitle, Nav, NavItem, NavLink } from 'shards-react';

function PersonalYearCard() {
    return (
        <Card style={{ width: '100%' }}>
            <CardBody>
                <CardTitle>Personal Year</CardTitle>
                <Nav pills>
                    <NavItem>
                        <NavLink active href="#">
                            Personal Year
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Personal Month</NavLink>
                    </NavItem>
                </Nav>
                <p>Ahihi</p>
            </CardBody>
        </Card>
    );
}

export default PersonalYearCard;
