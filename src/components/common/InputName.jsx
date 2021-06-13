import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Card,
    CardBody,
    Form,
    FormGroup,
    FormInput,
    DatePicker,
    Button,
} from 'shards-react';

class InputName extends React.Component {
    state = {
        name: undefined,
        nameValid: undefined,
        birthday: undefined,
        birthdayValid: undefined,
    };

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value,
            nameValid: !!e.target.value,
        });
    };

    handleBirthdayChange = (e) => {
        this.setState({
            birthday: e,
            birthdayValid: !!e,
        });
    };

    render() {
        const { name, nameValid, birthday, birthdayValid } = this.state;
        console.log(this.state);

        return (
            <Card style={{ width: '100%' }}>
                <CardBody>
                    <Form style={{ margin: '0 auto', maxWidth: 400 }}>
                        <FormGroup>
                            <label htmlFor="#name">Your name</label>
                            <FormInput
                                id="#name"
                                invalid={
                                    nameValid === undefined ? false : !nameValid
                                }
                                valid={
                                    nameValid === undefined ? false : nameValid
                                }
                                placeholder="Input your name"
                                onChange={this.handleNameChange}
                                value={name}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="#date">Date of birth</label>
                            <br />
                            <DatePicker
                                className={`date-picker ${
                                    birthdayValid === undefined
                                        ? ''
                                        : birthdayValid
                                        ? 'is-valid'
                                        : 'is-invalid'
                                }`}
                                id="#date"
                                style={{ width: '100%' }}
                                placeholderText="Input your birthday"
                                onChange={this.handleBirthdayChange}
                                selected={birthday}
                                dateFormat="dd/MM/yyyy"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Link
                                to={`?name=${name}&birthday=${moment(
                                    birthday
                                ).format('DD-MM-YYYY')}`}>
                                <Button style={{ width: '100%' }}>View</Button>
                            </Link>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        );
    }
}

export default InputName;
