import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col, Label} from 'reactstrap';
import Slide from './Component/Slide'
import Footer from './Component/Footer'

class Home extends Component {
    render() {
        return (
        <div class='background'>
            <AppNavbar/>
            <div class='main'>
                    <Slide/>
            </div>
            <Footer/>
        </div>
        );
    }
}
export default Home;