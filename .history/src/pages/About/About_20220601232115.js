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
            {/* <div className="title">
              <h1>HIỀN VÂN SPA XUẤT PHÁT TỪ NIỀM ĐAM MÊ & KẾT QUẢ CỦA SỰ NỖ LỰC</h1>
            </div> */}
          </div>
          <div className="image-right"></div>
        </div>
      </div>      

      <Footer />
    </div>
  );
};

export default About;
