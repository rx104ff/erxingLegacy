import React, { Component } from 'react';
import AppNavbar from '../AppNavbar';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { Button, Container, Form, Input, Label, Row, Col} from 'reactstrap';
import { login } from '../Utils/APIUtils';
import {ACCESS_TOKEN} from '../index.js';
import './AboutGuideDog.css';
import Footer from './Footer';
import AboutGuideDogImage from '../Resource/Image/about_guide_dog.png';

class AboutGuideDog extends Component {
    render() {
        return (
            <div class='background'>
                <AppNavbar/>
                <div class='main'>
                    <h2 id='header'>什么是导盲犬</h2>
                    <div>
                    <hr/>
                        <Row>
                            <Col>
                                <p class='about-guide-dog'>
                                导盲犬是辅助视力障碍或视力听力合并障碍人士安全出行的工作犬。导盲犬具有自然平和的心态，会适时站立、拒食、帮助盲人乘车、传递物品，对路人的干扰不予理睬，同时也不会对他们进行攻击。是平均一条导盲犬的服役年限为7-9年，然而作为一条导盲犬，它能像宠物犬一样自由奔放的时间仅仅只有2-4年.
                                </p>
                                <p class='about-guide-dog'>
                                导盲犬的性格，需要配合使用者的性格。比如:使用者好静，不喜打扰，我们要配安静的导盲犬，可以默默的陪伴。使用者好动的话，就要配比较活泼的犬，可以与使用者多一点互动。导盲犬与使用者的走路的步伐，高矮都要在考虑范围之内。在训导员的帮助下，与使用者一起进行磨合，训练。训练到人狗可以很好配合以后，才能让使用者带回家去开始工作。
                                </p>
                            </Col>
                            <Col>
                                <img src={AboutGuideDogImage} class='image-about-guide-dog'/>
                            </Col>
                        </Row>
                    </div>
                    <br/>
                    <br/>  
                    <h2 id='header'>导盲犬的训练</h2>
                    <div>
                    <hr/>
                        <ul class='about-guide-dog'>
                            <li>幼犬二月龄左右就会到寄养家庭开始社会化训练，完成基本的服从性训练(训导员会定期回访评估)</li>
                            <li>犬十二月龄左右完成社会化训练返回基地进行预备犬评估，合格犬开始正式导盲犬训练</li>
                            <li>犬在基地完成四到六月的专业技能训练</li>
                            <li>预备导盲犬与使用者在基地开始为期十四天左右共同训练</li>
                            <li>完成十四天左右的基地共同训练后使用者就可以带导盲犬回家开始为期至少十四天的家庭训练</li>
                            <li>评估合格后导盲犬就正式开始服役了之后训导员将进行定期的跟踪随访</li>
                        </ul>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default AboutGuideDog;