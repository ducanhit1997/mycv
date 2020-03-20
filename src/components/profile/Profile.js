import React, { Component } from 'react';
import './style.css';
import { Icon, List } from 'antd';
import ProfileImage from './image/anh.jpg';
class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <div className="profile-image">
                    <img alt="" src={ProfileImage} />
                </div>
                <div className="profile-info">
                    <h2 className="name">Fresher Developer</h2>
                </div>
                <div className="profile-contact">
                    <h3>Thông tin cá nhân</h3>
                    <div className="list-contact">
                        <List size="small">
                            <List.Item><Icon type="user" /><span>Phan Đức Anh</span></List.Item>
                            <List.Item><Icon type="calendar" /><span>08/04/1997</span></List.Item>
                            <List.Item><Icon type="book" /><span>Đại học Nông Lâm TP.HCM</span></List.Item>
                        </List>
                    </div>
                </div>
                <div className="profile-contact">
                    <h3>Thông tin liên hệ</h3>
                    <div className="list-contact">
                        <List size="small">
                            <List.Item><Icon type="phone" /><span>0981.878.012</span></List.Item>
                            <List.Item><Icon type="mail" /><span>anhphan190913@gmail.com</span></List.Item>
                            <List.Item><Icon type="home" /><span>Linh Trung - Thủ Đức - TP.HCM</span></List.Item>
                        </List>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;