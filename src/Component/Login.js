import React, { Component } from 'react';
import AppNavbar from '../AppNavbar';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label} from 'reactstrap';
import AuthenticationService from '../Service/AuthenticationService';
import { login } from '../Utils/APIUtils';
import {ACCESS_TOKEN} from '../index.js';
import './Login.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onLoginSuccess = this.onLoginSuccess.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onLoginSuccess() {
        return <Redirect to='/groups' />
    }

    handleSubmit(event) {
        event.preventDefault();
        const loginRequest = {usernameOrEmail:this.state.username, password:this.state.password};
        login(loginRequest)
            .then(response => {
                localStorage.setItem(ACCESS_TOKEN, response.token);
                this.props.history.push('/');
            }).catch(error => {
                if(error.status === 401) {
                    console.log({
                        message: 'APP',
                        description: 'Wrong Username or Password.'
                    });
                } else {
                    console.log({
                        message: 'APP',
                        description: 'Server Error. Please Try Again'
                });
            }
        });
     }


    render() {
        const username = this.state.username;
        const password = this.state.password;

        return (
            <div className="main">
                <AppNavbar/>
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input type="text" name="username" id="username" value={username}
                                    onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" value={password}
                                    onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Button color="primary" type="submit">Login</Button>{' '}
                            <Button color="secondary" tag={Link} to="/">Cancel</Button>
                        </FormGroup>  
                    </Form>
                </Container>
            </div>
        )
    }
}

export default withRouter(Login);