import React, { useEffect } from "react";
import "./footer.scss";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <div className="info">
          <img src="../../img/logoSpa.png" alt="" />
          <div className="nameSpa">
            <h4>Thẩm mỹ - Uốn tóc</h4>
            <h2>Kim Bông</h2>
          </div>
        </div>

        <h5>
          Spa Kim Bông luôn nỗ lực không ngừng để đem đến cho khách hàng những
          dịch vụ hoàn hảo nhất.
        </h5>
      </div>

      <div className="address">
        <h3>Hotline</h3>
        <div className="hotline">03 0304 0506</div>
        <h3>Địa chỉ</h3>
        <h4>Vĩnh Hòa, Chợ Lách, Bến Tre</h4>
        <h3>THỜI GIAN MỞ CỬA</h3>
        <h4>7:00 - 21:00 hàng ngày</h4>
      </div>
      <div className="contact">
        <h3>Kết nối với Kim Bông</h3>
        <a href="/" className="icon">
          <BsFacebook className="iconFacebook" />
        </a>
        <a href="/" className="icon">
          <img src="../../img/Zalo.png" alt="" className="iconZalo" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
