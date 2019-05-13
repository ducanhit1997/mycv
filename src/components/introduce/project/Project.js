import React, { Component } from 'react';
import { Timeline, Icon } from 'antd';
import './../style.css';

class Project extends Component {
    render() {
        return (
            <div className="main-timeline">
                <div className="timeline">
                <a href="#" className="timeline-content">
                    <span className="year">2018</span>
                    <h3 className="title">Web Designer</h3>
                    <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo quis.
                    </p>
                </a>
                </div>
                <div className="timeline">
                <a href="#" className="timeline-content">
                    <span className="year">2017</span>
                    <h3 className="title">Web Developer</h3>
                    <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo quis.
                    </p>
                </a>
                </div>
                <div className="timeline">
                <a href="#" className="timeline-content">
                    <span className="year">2017</span>
                    <h3 className="title">Web Developer</h3>
                    <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo quis.
                    </p>
                </a>
                </div>
                <div className="timeline">
                <a href="#" className="timeline-content">
                    <span className="year">2017</span>
                    <h3 className="title">Web Developer</h3>
                    <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo quis.
                    </p>
                </a>
                </div>
          </div>
        );
    }
}

export default Project;