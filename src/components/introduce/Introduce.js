import React, { Component } from 'react';
import { Radio } from 'antd';
import './style.css';
import AboutMe from './me/Me';
// import Skill from './skill/Skill';
import Project from './project/Project';
class introduce extends Component {
    state={
        about : true,
        project: false,
        skill: false,
        cv: false,
    }
    selectOption = (e) => { 
    if (e.target.value === 'about') {
        this.setState({about: !this.state.about , project: false, cv: false , skill: false});
    }
    if(e.target.value==='skill'){
        this.setState({about: false, project: false, cv: false , skill: !this.state.skill});
    }
    if(e.target.value==='project'){
        this.setState({about: false, project: !this.state.project, cv: false , skill: false});
    }
    if(e.target.value==='cv'){
        this.setState({about: false, project: false, cv: !this.state.cv , skill: false});
    }
    //Giờ sau 
    //nut nao hiên tính năng nào giờ nút giới thiệu bản thân render ra cái component Me
}
render() {
    const {about, skill, project, } = this.state;
    return (
        <div>
            <div className="menu-introduce">
                <Radio.Group defaultValue="about" buttonStyle="solid" onChange={this.selectOption}>
                    <Radio.Button value="about">Giới thiệu bản thân</Radio.Button>
                    <Radio.Button value="project">Dự án thực hiện</Radio.Button>
                    <Radio.Button value="cv">Download CV</Radio.Button>
                </Radio.Group>
            </div>
           <div>
               {
                   (about)?
                   <AboutMe/>:<div></div>
               }
               {
                   (skill)?
                   <AboutMe/>:<div></div>
               }
                 {
                   (project)?
                   <Project/>:<div></div>
               }
           </div>
        </div>
    );
}
}
export default introduce;