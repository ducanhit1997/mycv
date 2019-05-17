import React, { Component } from 'react';
import { Icon } from 'antd';
import './../style.css';

class Project extends Component {
    render() {
        return (
            <div className="main-timeline">
                <div className="timeline">
                <div href="#" className="timeline-content">
                    <span className="year">Web Designer</span>
                    <h3 className="title"></h3>
                    <p className="description">
                        Đây là môn học đầu tiên tôi tiếp cận với html, css, javascript và photoshop. Môn này trọng tâm là thiết kế
                        giao diện và convert file psd theo chuẩn UI/UX. Mặc dù là lần đầu tiếp xúc với web nhưng cùng các thành viên trong nhóm
                        đã xuất sắc đạt điểm 10.
                    </p>
                    <Icon type="arrow-right"/><a href="http://nhom13.azurewebsites.net/"  target="_blank" style={{marginLeft:'5px'}}>Link project </a>
                </div>
                </div>
                <div className="timeline">
                <div href="#" className="timeline-content">
                    <span className="year">Java Web</span>
                    <h3 className="title"></h3>
                    <p className="description">
                        Đây là project bán hàng được làm trên nền tảng ngôn ngữ java, với đầy đủ các chức năng cần có của một website
                        bán hàng cả front-end lẫn back-end. Nhóm tôi gồm 4 thành viên và tôi là leader đã hoàn thành xuất sắc và báo cáo
                        đạt điểm 9.
                    </p>
                    <Icon type="arrow-right"/><a href="http://2018group22.azurewebsites.net"  target="_blank" style={{marginLeft:'5px'}}>Link project </a>
                </div>
                </div>
                <div className="timeline">
                <div href="#" className="timeline-content">
                    <span className="year">Reactjs</span>
                    <h3 className="title"></h3>
                    <p className="description">
                     Project thương mại điện tử cho thuê xe, sử dụng công nghệ back-end .NET Core và front-end Reactjs. Lần đầu tiên
                     tôi tiếp xúc với React, áp dụng các framework UI của React để xây dựng giao diện, phối hợp với bên back-end thông qua
                     Restful API.
                    </p>
                    <Icon type="arrow-right"/><a href="http://2018group22.azurewebsites.net"  target="_blank" style={{marginLeft:'5px'}}>Link project </a>
                </div>
                </div>
                <div className="timeline">
                <div className="timeline-content">
                    <span className="year">Spring MVC</span>
                    <h3 className="title"></h3>
                    <p className="description">
                    Project bán pizza sử dụng framework của java là Spring MVC kết hợp hibernate được thực hiện cho môn học Chuyên đề Web. Sử dụng
                    ajax để giao tiếp giữa client và server, tăng tốc độ xử lí cho website. Cũng như project java web ở trên, nó cũng đầy đủ 2 phần
                    front-end và back-end.
                    </p>
                    <Icon type="arrow-right"/><a href="http://2018group22.azurewebsites.net"  target="_blank" style={{marginLeft:'5px'}}>Link project </a>
                </div>
                </div>
                <div className="timeline">
                <div href="#" className="timeline-content">
                    <span className="year">.NET + Reactjs </span>
                    <h3 className="title"></h3>
                    <p className="description">
                     Project này được thực hiện để đáp ứng cho môn học Lập trình .NET sử dụng 2 công nghệ đó là .NET Framework và Reactjs, giao tiếp với
                     nhau thông qua Restful API. Project này giúp tôi hiểu sâu hơn về Reactjs từ project đã làm trước đó, sử dụng thư viện như
                     redux để quản lý code và tăng hiệu quả làm việc.
                    </p>
                    <Icon type="arrow-right"/><a href="http://2018group22.azurewebsites.net"  target="_blank" style={{marginLeft:'5px'}}>Link project </a>
                </div>
                </div>
          </div>
        );
    }
}

export default Project;