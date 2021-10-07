import AppNavbar from '../AppNavbar';
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {fetchDocument} from '../Utils/APIUtils'
import Footer from './Footer';
import './Application.css';


    

class AdoptionApplication extends Component {

    constructor(props) {
        super(props);
        this.handleClicked = this.handleClicked.bind(this);
    }

    handleClicked(event) {
        event.preventDefault();
        fetchDocument('adoption_application_form.docx')
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
                <h2>给这些“英雄”找个家，退役导盲犬待领养!</h2>
                <hr/>
                <p class='application'>
                    除了导盲幼犬的寄养家庭外，不适合导盲训练或是退休的狗狗也需要您的爱心，
                    让他们成为您专属的温暖心灵的好伴侣。在导盲犬的培训中，有些狗狗因为健
                    康或是行为的因素不适合成为导盲犬，但他们依然可以成为非常好的宠物犬。
                </p>
                <p class='application'>
                    导盲犬随著年龄的增长会体力衰退，10岁左右就会进入退休期，这时需要
                    非常有爱心的收养家庭，照顾这些将健康青春的岁月奉献给人类的狗狗们。
                    收养家庭也可能必须负担较多的饮食支出或医疗费用。导盲犬作为一只工
                    作犬，在服役多年之后，和人一样会进入老龄化状态，这样的退役导盲犬更加
                    需要主人有足够多的时间、精力来照料它。
                </p>
                <p class='application'>
                    导盲犬在服役期间恪守自身使命，为视障使用者的安全出行、帮助融入社
                    会做出了不可磨灭的贡献!希望退役的每只导盲犬都能寻找到爱心家庭让它们安享晚年。
                </p>
                <h2>领养家庭需符合如下条件</h2>
                <hr/>
                <ol class='application'>
                    <li>本市(上海市)有自有住宅，能提供退役导盲犬足够的生活活动空 间2、爱心家庭应有稳定的收入，能够承担退役导盲犬的日常饲养、清洁及医疗服务等费用;</li>
                    <li>有养犬的经验且家庭成员无犬的过敏史;</li>
                    <li>有足够时间陪伴退役导盲犬。</li>
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

export default  AdoptionApplication;