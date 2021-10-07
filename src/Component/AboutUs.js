import React, { Component } from 'react';
import AppNavbar from '../AppNavbar';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { Button, Container, Form, Input, Label, Row, Col} from 'reactstrap';
import './AboutUs.css';
import Footer from './Footer';
import BaiduMap from '../Resource/Image/baidu-map.png';

class AboutUs extends Component {
    render(){
        return (
            <div class='background'>
                <AppNavbar/>
                <div class='main'>
                    <h2 id='header'>关于而行</h2>
                    <div>
                    <hr/>
                        <p class='about-us'>
                        而行工作犬训练有限公司成立于2018年4月。注册资本100万，是一家专业开展残疾人辅助犬训练的公司。公司宗旨为引进国际先进的残疾人辅助犬（包括导盲犬、肢残辅助犬、自闭症儿童辅助犬等）训练技术及管理方法，加速发展国内残疾人辅助犬事业，逐渐赶超国际水平，为此公司特聘请加拿大残疾人辅助犬训练专家担任技术顾问。目前公司已经承接上海导盲犬项目，今后将会逐步拓展各类残疾人辅助犬训练工作，并加强与相关行业的国际交流与合作。公司现有员工包括加拿大辅助犬训练专家、超过十年导盲犬训练及复训经验的训导员、具有动物医学专业背景并已取得中国执业兽医师证书的训导员以及其他管理后勤保障人员。
                        </p>
                        <p class='about-us'>
                        公司目前主要服务于视障群体，提供导盲犬的培训、管理和后期复训服务。导盲犬的培训和复训标准按国际导盲犬联盟和中国导盲犬标准制订。公司上海分公司按标准建设无障碍设施，为残疾朋友提供无障碍环境。犬舍按国际标准设计并建造，并配备沐浴室，隔离观察室等。公司于2020年6月正式加取得了国际导盲犬联盟的会员资格，我们的训练标准和业务水平在国内和国际上都获得了肯定和认可，且与亚洲导盲犬育种联盟进行接洽以保障有高素质的犬源。现已制定导盲犬训导员培训计划，希望能为我国培养更多合格的导盲犬训导员。
                        </p>
                    </div>
                    <br/>
                    <br/>  
                    <h2 id='header'>我们的目标</h2>
                    <div>
                    <hr/>
                        <p class='about-us'>
                        “而行工作犬”相信每个人都应该得到独立、平等的出行机会。
                        我们从不等待别人寻求帮助，当发现人们有需要，“而行工作犬”将无偿的伸出援手，用已知最高效的培训方法为使用者“量身定制”服务。
                        而行的工作犬知道它们的任务和使命。它们将用一生为残障人士服务，提高他（她）们的生活质量，摆脱命运的枷锁！
                        </p>
                    </div>
                    <br/>
                    <br/>  
                    <h2 id='header'>联系方式</h2>
                    <div>
                    <hr/>
                        
                    <div>
                    <Row>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <Row>
                                <a herf='/aboutUs'></a>
                            </Row>
                            <Row>
                                <p >地址：上海市杨浦区靖宇中路96号</p>
                            </Row>
                            <Row>
                                <p>联系电话：021-65025199｜传真：4008213180</p>
                            </Row>
                            <Row>
                                <p>工作日： 周一至周五 9:00~18:00</p>
                            </Row>
                            <Row>
                                <p>联系邮箱：wangchunsun@hotmail.com</p>
                            </Row>
                        </Col>
                        <Col sm={{ size: 'auto', offset: 2 }}>
                            <img src={BaiduMap} class='image-map'/>
                        </Col>
                    </Row>
                    </div>
                        
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default AboutUs;