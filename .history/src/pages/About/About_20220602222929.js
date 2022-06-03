import "./About.scss";
import React from "react";
import Footer from "./../../components/Footer/Footer";

const About = () => {
  return (
    <div>
      <div className="container1">
        <div className="container-image"></div>

        <div className="container-content">
          <div className="content-left">
            <div className="title">
              <h1>HIỀN VÂN SPA XUẤT PHÁT TỪ NIỀM ĐAM MÊ & KẾT QUẢ CỦA SỰ NỖ LỰC</h1>
            </div>
            <div className="box">
              <div className="box-content-img">
                <div className="image">
                  <img width={200} height={100} src="https://i.pinimg.com/originals/2c/84/5a/2c845a66b8ad2a8aafd288bdc16cd459.jpg"></img>
                </div>
                <div className="content">
                  <p>Hiền cảm thấy vô cùng tự hào khi spa của mình đã nhận được sự tin tưởng của hàng chục nghìn khách hàng khu vực TPHCM và nhiều tỉnh thành lân cận. Thậm chí nhiều bạn không quản ngại đường xá xa xôi, di chuyển từ tận miền Trung, miền Bắc đến điều trị.</p>
                </div>
              </div>
              <div className=""></div>
            </div>
          </div>
          <div className="image-right"></div>
        </div>
      </div>      

      <Footer />
    </div>
  );
};

export default About;
