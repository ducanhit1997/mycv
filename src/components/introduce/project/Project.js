import React, { Component } from 'react';
import { Timeline, Icon } from 'antd';
import './../style.css';

class Project extends Component {
    render() {
        return (
            <Timeline>
                <Timeline.Item color="#1890ff">
                    <div className="title"> [HKI/2017-2018] Web Design</div>
                    <div className="col-sm-6 description">
                        This is the first subject I approach with <strong>HTML, CSS, JAVASCRIPT,</strong> and <strong>photoshop</strong> applications. This course focuses on interface design and the conversion of <strong>PSD</strong> files.
                    </div>
                    <Icon type="arrow-right" /> <strong>Link project:</strong> <a href="http://nhom13.azurewebsites.net/" rel="noopener noreferrer" target="_blank">http://nhom13.azurewebsites.net/</a>
                </Timeline.Item>
            <Timeline.Item color="#1890ff">
                <div className="title">[HKII/2017-2018] Java web </div>
                <div className="description">
                This is a sales project made on the <strong>JSP-Servlet platform</strong>, with all the necessary functions of a <strong>Frontend and Backend</strong> sales website. My team consists of 4 members and I am the leader who has <strong>successfully</strong> completed and reported a score of 9.
                </div>
                <Icon type="arrow-right" /> <strong>Link github:</strong> <a href="https://github.com/ducanhit1997/Jsp-Servlet" rel="noopener noreferrer" target="_blank">https://github.com/ducanhit1997/Jsp-Servlet </a>
            </Timeline.Item>
            <Timeline.Item color="#1890ff">
                <div className="title">[HKI/2018-2019] ReactJS </div>
                <div className="description">
                E-commerce car rental project, using <strong>Backend .NET Core</strong> technology and <strong>Frontend ReactJS</strong>, I take responsibility for handling the Frontend side. This is my first time interacting with React, applying <strong>React UI</strong> (<strong>Ant Design</strong>) frameworks to build interfaces, and collaborate with the Backend via the <strong>Restful API</strong>.
                </div>
                <Icon type="arrow-right"/> <strong>Link github:</strong> <a href="https://github.com/ducanhit1997/Frontend-ThueXe" rel="noopener noreferrer" target="_blank">https://github.com/ducanhit1997/Frontend-ThueXe</a>
            </Timeline.Item>
            <Timeline.Item color="#1890ff">
                <div className="title">[HKII/2018-2019] Spring MVC </div>
                <div className="description">
                The pizza sales project using <strong> JAVA Framework, Spring MVC,</strong> incorporating <strong>Hibernate</strong>, is implemented for the web course subject. Use <strong>Ajax</strong> to communicate between the client and the server, speeding up the processing of the website. Like the <strong>JAVA</strong> web project above, it also has 2 <strong>Frontend and Backend</strong> parts.    
                </div>
                <Icon type="arrow-right" /> <strong>Link github:</strong> <a href="https://github.com/ducanhit1997/Pizzasales" rel="noopener noreferrer" target="_blank">https://github.com/ducanhit1997/Pizzasales</a>
            </Timeline.Item>
            <Timeline.Item color="#1890ff">
                <div className="title"> [HKII/2018-2019] .Net + ReactJS</div>
                <div className="description">
                    This project was implemented to meet the requirements of <strong>.NET Programming</strong> using 2 technologies, namely <strong>.NET Framework</strong> and <strong>ReactJS</strong>, communicating with each other through the <strong>Restful API</strong>. Undertaking <strong>Frontend</strong> processing, this project helps me better understand <strong>ReactJS</strong> from the previous project, use the <strong>Redux</strong> library to manage state application and increase work efficiency.  
                </div>
                <Icon type="arrow-right" /> <strong>Link github:</strong> <a href="https://github.com/ducanhit1997/frontend-net" rel="noopener noreferrer" target="_blank">https://github.com/ducanhit1997/frontend-net</a>
            </Timeline.Item>
            </Timeline >
        );
    }
}

export default Project;