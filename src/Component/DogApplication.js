import AppNavbar from '../AppNavbar';
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {fetchDocument} from '../Utils/APIUtils'
import Footer from './Footer';
import './Application.css';

class DogApplication extends Component {

    constructor(props) {
        super(props);
        this.handleClicked = this.handleClicked.bind(this);
    }

    handleClicked(event) {
        event.preventDefault();
        fetchDocument("guide_dog_application_form.docx")
            .catch(error => {
                if(error.status === 401) {
                    console.log({
                        message: 'APP',
                        description: 'Please login.'
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
        return (
            <div class="background">
                <AppNavbar/>
                <div class="main">
                <h2>申请条件</h2>
                <hr/>
                <p class='application'>
                    导盲犬的申请条件具有上海市户籍并持有《中华人民共和国残疾人证》(视力)。
                    年满18周岁，身、心状况良好且具备一定学习能力。有能力并愿意承担使用导盲犬期
                    间所需费用(食物、医疗等)。能为导盲犬提供适宜的居住环境。申请者需有爱心，
                    有独立照顾导盲犬能力。
                </p>
                <h2>申请流程</h2>
                <hr/>
                <ol class='application'>
                    <li>填写表格并发送至wangchunsun@hotmail.com，或者致电021-65025199进行电话申请</li>
                    <li>受理-初审</li>
                    <li>安排上门评估</li>
                    <li>训导组评估审核</li>
                    <li>通知使用者参加共同训练</li>
                    <li>基地共同训练(十四天左右)</li>
                    <li>完成基地训练回家磨合适应(十四天左右)， 训导员不定期上门随访。</li>
                    <li>评估</li>
                    <li>正式服役(训导员定期随访)</li>
                </ol>
                <div class='button-application'>
                <Button onClick={this.handleClicked} color="secondary" size="lg" block>申请表格</Button>
                </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default  DogApplication;