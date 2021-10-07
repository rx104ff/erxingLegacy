import React, { Component } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { Button, Container, Label, Col, Row} from 'reactstrap';
import DogguideInternation from '../Resource/Image/igdf_logo.png';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div class='footer'>
                <div>
                <Row>
                <Col sm={{ size: 'auto', offset: 1 }}>
                    <img src={DogguideInternation} class='igdf'/>
                </Col>
                <Col sm={{ size: 'auto', offset: 2 }}>
                    <div class='col-footer'>
                    <Row>
                        <a herf='/aboutUs'></a>
                    </Row>
                    <Row>
                        <p class='p-footer'>地址：上海市杨浦区靖宇中路96号</p>
                    </Row>
                    <Row>
                        <p class='p-footer'>联系电话：021-65025199｜传真：4008213180</p>
                    </Row>
                    <Row>
                        <p class='p-footer'>工作日： 周一至周五 9:00~18:00</p>
                    </Row>
                    <Row>
                        <p class='p-footer'>邮箱： dogguides@163.com</p>
                    </Row>
                    </div>
                </Col>
                </Row>
                <div class='copyright'>
                    而行导盲犬 ⓒ 2020 Erxing Dog Guide Ltd. All Rights Reserved.
                </div>
                </div>
            </div>
        )
    }
}

export default Footer;