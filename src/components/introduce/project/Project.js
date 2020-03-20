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
                        Đây là môn học đầu tiên tôi tiếp cận với html, css, javascript và photoshop. Môn này trọng tâm là thiết kế
                        giao diện và convert file psd.
                    </div>
                    <Icon type="arrow-right" />Link project: <a href="http://nhom13.azurewebsites.net/" rel="noopener noreferrer" target="_blank">http://nhom13.azurewebsites.net/</a>
                </Timeline.Item>
            <Timeline.Item color="#1890ff">
                <div className="title">[HKII/2017-2018] Java web </div>
                <div className="description">
                    Đây là project bán hàng được làm trên nền tảng jsp-servlet, với đầy đủ các chức năng cần có của một website
                    bán hàng cả front-end lẫn back-end. Nhóm tôi gồm 4 thành viên và tôi là leader đã hoàn thành xuất sắc và báo cáo
                    đạt điểm 9.
                    </div>
                <Icon type="arrow-right" /> Link project: <a href="http://2018group22.azurewebsites.net" rel="noopener noreferrer" target="_blank">http://2018group22.azurewebsites.net </a>
            </Timeline.Item>
            <Timeline.Item color="#1890ff">
                <div className="title">[HKI/2018-2019] Reactjs </div>
                <div className="description">
                    Project thương mại điện tử cho thuê xe, sử dụng công nghệ back-end .NET Core và front-end Reactjs, tôi nhận trách nhiệm xử lý bên Front-end. Đây là lần đầu tiên
                    tôi tiếp xúc với React, áp dụng các framework UI của React để xây dựng giao diện, phối hợp với bên back-end thông qua
                    Restful API.
                    </div>
                <Icon type="arrow-right"/> Link github: <a href="https://github.com/lephong2017/ThuongMaiDienTu-Frontend" rel="noopener noreferrer" target="_blank">https://github.com/lephong2017/ThuongMaiDienTu-Frontend</a>
            </Timeline.Item>
            <Timeline.Item color="#1890ff">
                <div className="title">[HKII/2018-2019] Spring MVC </div>
                <div className="description">
                    Project bán pizza sử dụng framework của java là Spring MVC kết hợp hibernate được thực hiện cho môn học Chuyên đề Web. Sử dụng
                    ajax để giao tiếp giữa client và server, tăng tốc độ xử lí cho website. Cũng như project java web ở trên, nó cũng đầy đủ 2 phần
                    front-end và back-end.
                    </div>
                <Icon type="arrow-right" />Link github: <a href="https://github.com/ducanhit1997/Pizzasales" rel="noopener noreferrer" target="_blank">https://github.com/ducanhit1997/Pizzasales</a>
            </Timeline.Item>
            <Timeline.Item color="#1890ff">
                <div className="title"> [HKII/2018-2019] .Net + Reactjs</div>
                <div className="description">
                       Project này được thực hiện để đáp ứng cho môn học Lập trình .NET sử dụng 2 công nghệ đó là .NET Framework và Reactjs, giao tiếp với
                       nhau thông qua Restful API. Được đảm nhận xử lí bên Front-end, project này giúp tôi hiểu sâu hơn về Reactjs từ project đã làm trước đó, sử dụng thư viện
                       redux để quản lý code và tăng hiệu quả làm việc.
                    </div>
                <Icon type="arrow-right" />Link github: <a href="https://github.com/ducanhit1997/frontend-net" rel="noopener noreferrer" target="_blank">https://github.com/ducanhit1997/frontend-net</a>
            </Timeline.Item>
            </Timeline >
        );
    }
}

export default Project;