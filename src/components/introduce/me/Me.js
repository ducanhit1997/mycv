import React, { Component } from 'react';
import { Icon, Steps, Popover } from 'antd';
import Button from '@material-ui/core/Button';
import './../style.css';
const Step = Steps.Step;
const customDot = (dot, { status, index }) => (
    <Popover content={<span>step {index} status: {status}</span>}>
        {dot}
    </Popover>
);

class Me extends Component {
    render() {
        return (
            <div className="about-me">
                <div>
                    <h3 className="profile-title"><Icon type="user" /><span>Sơ lược bản thân</span></h3>
                    <p className="soluoc">Tôi tên là Phan Đức Anh, 22 tuổi, hiện đang là sinh viên năm 4 trường Đại học Nông Lâm TP.HCM, ngành công nghệ thông tin. Mục tiêu của tôi là trở thành
                lập trình viên Front-end, mảng Reactjs. Đây là CV tự tôi thiết kế và viết, sử dụng một số framework UI của React.</p>
                </div>
                <div className="advantage">
                    <h3 className="advantage-title"><Icon type="like" /><span>Ưu điểm</span></h3>
                    <div>
                        <li><Icon type="check" /><span>Hòa đồng, vui vẻ, có trách nhiệm, đam mê trong công việc.</span></li>
                        <li><Icon type="check" /><span>Từng làm leader của project tại trường nên kỹ năng làm việc nhóm và kỹ năng search tốt.</span></li>
                        <li><Icon type="check" /><span>Tính kiên nhẫn, chịu áp lực cao trong công việc.</span></li>
                        <li><Icon type="check" /><span>Sẵn sàng tìm hiểu công nghệ mới để đáp ứng yêu cầu dự án của công ty.</span></li>
                    </div>
                </div>
                <div>
                    <div className="defect">
                        <h3 className="advantage-title"><Icon type="dislike" /><span>Hạn chế</span></h3>
                        <div>
                            <li><Icon type="check" /><span>Chưa có kinh nghiệm làm việc thực tế.</span></li>
                            <li><Icon type="check" /><span>Giao tiếp tiếng anh chưa được tốt.</span></li>
                        </div>
                    </div>
                    <div className="defect">
                        <h3 className="advantage-title"><Icon type="heart" /><span>Sở thích</span></h3>
                        <div>
                            <li><Icon type="check" /><span>Đọc sách, tìm hiểu công nghệ mới.</span></li>
                            <li><Icon type="check" /><span>Thích thể thao, đặc biệt là bóng đá.</span></li>
                        </div>
                    </div>
                </div>
                <div className="time-line">
                    <h3 className="advantage-title"><Icon type="heart" /><span>Học vấn</span></h3>
                    <div>
                        <Steps size="small" current={1}>
                            <Step title="THPT Nguyễn Thái Bình" description="2012-2015" />
                            <Step title="Đại học Nông Lâm TP.HCM" icon={<Icon type="solution"/>} description="2015-2019" />
                            <Step title="Tốt nghiệp Đại học Nông Lâm TP.HCM" icon={<Icon type="loading" />} description="09/2019" />
                        </Steps>
                    </div>
                </div>
            </div>

        );
    }
}
export default Me;