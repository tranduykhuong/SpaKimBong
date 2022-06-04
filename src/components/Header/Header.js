import React, { useEffect, useState } from "react";
import "./header.scss";
import { BsSearch, BsFacebook } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const path = useLocation().pathname;
  const [fixedNavbar, setFixedNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 1) {
        setFixedNavbar(true);
      }

      if (window.scrollY > 170) setFixedNavbar(true);
      else setFixedNavbar(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="header">
      <div className={"infor " + (fixedNavbar ? "mg-navbar" : "")}>
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
      <div className={"myNavbar " + (fixedNavbar ? "fixedNavbar" : "")}>
        <div className="navbarContent">
          <ul className="navbarList">
            <li className={path === "/" ? "active" : ""}>
              <Link to="/">TRANG CHỦ</Link>
            </li>
            <li className={path === "/about" ? "active" : ""}>
              <Link to="/about">GIỚI THIỆU</Link>
            </li>
            {/* <li className={path === "/skin" ? "active" : ""}>
              <Link to="/">CHĂM SÓC DA</Link>
            </li> */}
            <li className={path === "/acne" ? "active" : ""}>
              <Link to="/acne">TRỊ MỤN</Link>
            </li>
            <li className={path === "/products" ? "active" : ""}>
              <Link to="/products">SẢN PHẨM</Link>
            </li>
            <li className={path === "/open-time" ? "active" : ""}>
              <Link to="/">LỊCH MỞ CỬA</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
