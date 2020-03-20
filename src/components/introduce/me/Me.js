import React, { Component } from 'react';
import { Icon, Steps,  } from 'antd';
import './style.css';
const Step = Steps.Step;
// const customDot = (dot, { status, index }) => (
//     <Popover content={<span>step {index} status: {status}</span>}>
//         {dot}
//     </Popover>
// );

class Me extends Component {
    render() {
        return (
            <div className="about-me">
                <div>
                    <h3 className="profile-title"><Icon type="user" /><span>Profile yourself</span></h3>
                    <p className="soluoc">My name is <strong>Phan Duc Anh</strong>, I'm <strong>22 years old</strong>. I graduated from Ho Chi Minh City University of Agriculture and Forestry, majoring in information technology. Currently, I'm working at <strong>Evizi Company</strong>.</p>
                </div>
                <div className="advantage">
                    <h3 className="advantage-title"><Icon type="like" /><span>Strengths</span></h3>
                    <div>
                        <li><Icon type="check" /><span>Sociable, happy, responsible, passionate about the job.</span></li>
                        <li><Icon type="check" /><span>I used to be the leader of the project at school so my teamwork and search skills are good.</span></li>
                        <li><Icon type="check" /><span>Patience, high pressure at work.</span></li>
                        <li><Icon type="check" /><span>Ready to learn new technology to meet the company's project requirements.</span></li>
                    </div>
                </div>
                <div>
                    <div className="defect">
                        <h3 className="advantage-title"><Icon type="dislike" /><span>Weaknesses</span></h3>
                        <div>
                            <li><Icon type="check" /><span>Only work experience in the last 8 months.</span></li>
                            <li><Icon type="check" /><span>English communication is not fluent.</span></li>
                        </div>
                    </div>
                    <div className="defect">
                        <h3 className="advantage-title"><Icon type="heart" /><span>Hobby</span></h3>
                        <div>
                            <li><Icon type="check" /><span>Read books, learn new technology.</span></li>
                            <li><Icon type="check" /><span>Loves football, likes to relax with roommates on weekends.</span></li>
                        </div>
                    </div>
                </div>
                <div className="time-line">
                    <h3 className="advantage-title"><Icon type="book" /><span>Academic level</span></h3>
                    <div>
                        <Steps size="small" current={1} direction="vertical">
                            <Step title="Nguyen Thai Binh High School" description="2012-2015" />
                            <Step status="finish" title="Ho Chi Minh City University of Agriculture and Forestry" icon={<Icon type="solution"/>} description="2015-2019" />
                            <Step status="finish" title="Working at outsourcing software company Fujinet" icon={<Icon type="home" />} description="07/2019" />
                            <Step status="finish" title="Graduated from Ho Chi Minh City University of Agriculture and Forestry" icon={<Icon type="home" />} description="02/2020" />
                            <Step status="process" title="Working at software company Evizi" icon={<Icon type="loading" />} description="03/2020" />
                        </Steps>
                    </div>
                </div>
            </div>

        );
    }
}
export default Me;