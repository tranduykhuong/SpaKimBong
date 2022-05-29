import React from "react";
import "./header.scss";
import { BsSearch, BsFacebook } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import Slider from "./Slider/Slider";
import ListImage from "./ListImage/ListImage";

function Header() {
  return (
    <div className="header">
      <div className="infor">
        <div className="logo">
          <img src="../../img/logoSpa.png" alt="" />
          <div className="nameSpa">
            <h4>Thẩm mỹ - Uốn tóc</h4>
            <h2>Kim Bông</h2>
          </div>
        </div>

        <div className="search">
          <input type="text" placeholder="Tìm kiếm sản phẩm/ bài viết ..." />
          <a className="icon">
            <BsSearch className="iconSearch" />
          </a>
        </div>

        <div className="contact">
          <a href="/" className="icon">
            <BsFacebook className="iconFacebook" />
          </a>
          <a href="/" className="icon">
            <img src="../../img/Zalo.png" alt="" className="iconZalo" />
          </a>

          <div className="phone">
            <BiPhoneCall className="iconPhone" />
            <h3>03 0304 0506</h3>
          </div>
        </div>
      </div>
      <div className="myNavbar">
        <div className="navbarContent">
          <ul className="navbarList">
            <li className="active">TRANG CHỦ</li>
            <li>GIỚI THIỆU</li>
            <li>CHĂM SÓC DA</li>
            <li>TRỊ MỤN</li>
            <li>LỊCH MỞ CỬA</li>
          </ul>
        </div>
      </div>
      {/* <Slider /> */}
      {/* <ListImage /> */}
    </div>
  );
}

export default Header;
