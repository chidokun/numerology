/* eslint-disable react/prop-types */
import React from 'react';
import { Container, Row } from 'shards-react';
import BirthChartCard from './birthChart/BirthChartCard';
import GeneralInfo from './common/GeneralInfo';
import PersonalYearCard from './common/PersonalYearCard';
import PyramidsCard from './common/PyramidsCard';
import RulingNumberCard from './common/RulingNumberCard';
import Footer from './Footer';
import Header from './Header';
import InputName from './common/InputName';
import { withRouter } from 'react-router';

class App extends React.Component {
    getSearch = () => {
        const search = new URLSearchParams(this.props.location.search);
        let name = search.get('name');
        let birthday = search.get('birthday');
        return { name, birthday };
    };

    render() {
        const { name, birthday } = this.getSearch();

        if (!name || !birthday) {
            return (
                <Container>
                    <Row>
                        <Header />
                    </Row>
                    <Row noGutters={false}>
                        <InputName />
                    </Row>
                    <Row>
                        <Footer />
                    </Row>
                </Container>
            );
        }
        return (
            <Container>
                <Row>
                    <Header />
                </Row>
                <Row noGutters={false}>
                    <GeneralInfo />
                    <RulingNumberCard />
                    <BirthChartCard />
                    <PyramidsCard />
                    <PersonalYearCard />
                </Row>
                <Row>
                    <Footer />
                </Row>
            </Container>
        );
    }
}

export default withRouter(App);
