/* eslint-disable react/prop-types */
import React from 'react';
import { Container, Row } from 'shards-react';
import BirthChartCard from './birthChart/BirthChartCard';
import GeneralInfo from './common/GeneralInfo';
import Footer from './Footer';
import Header from './Header';
import InputName from './common/InputName';
import { withRouter } from 'react-router';
import { getNumerology } from '../helpers/numerology';
import PyramidsCard from './common/PyramidsCard';

class App extends React.Component {
    getSearch = () => {
        const search = new URLSearchParams(this.props.location.search);
        let name = search.get('name');
        let birthday = search.get('birthday');
        let numerology = undefined;
        if (name && birthday) {
            numerology = getNumerology(name, birthday);
        }
        return { name, birthday, numerology };
    };

    render() {
        const { name, birthday, numerology } = this.getSearch();
        console.log(numerology);
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
                    <GeneralInfo numerology={numerology} />
                    {/* <RulingNumberCard /> */}
                    <BirthChartCard numerology={numerology} />
                    <PyramidsCard
                        birthday={numerology.birthday}
                        pyramids={numerology.pyramids}
                    />
                    {/* <PersonalYearCard /> */}
                </Row>
                <Row>
                    <Footer />
                </Row>
            </Container>
        );
    }
}

export default withRouter(App);
