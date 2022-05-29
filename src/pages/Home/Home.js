import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header/Header";
import Slider from "../../components/Header/Slider/Slider";
import { Col, Row } from "react-bootstrap";
import "./home.scss";
import Feedback from "./Feedback/Feedback";
import Footer from "../../components/Footer/Footer";
import BookOnline from "./BookOnline/BookOnline";
import ModalBook from "./Modal/ModalBook";

const Home = () => {
  return (
    <div className="home">
      <Slider />

      {/* Top Services */}
      <div className="topService">
        <h2>DỊCH VỤ NỔI BẬT</h2>
        <div className="serviceList">
          <div className="serviceItem">
            <img
              src="https://cdn.hienvanspa.com/uploads/2021/06/dich-vu-tri-mun.jpg"
              alt=""
            />
            <h4>Điều trị mụn</h4>
          </div>

          <div className="serviceItem">
            <img
              src="https://cdn.hienvanspa.com/uploads/2021/06/dich-vu-tri-tham-mun.jpg"
              alt=""
            />
            <h4>Điều trị thâm mụn</h4>
          </div>

          <div className="serviceItem">
            <img
              src="https://cdn.hienvanspa.com/uploads/2021/06/dich-vu-tri-seo-ro.jpg"
              alt=""
            />
            <h4>Điều trị sẹo rổ</h4>
          </div>

          <div className="serviceItem">
            <img
              src="https://cdn.hienvanspa.com/uploads/2021/06/dich-vu-tri-seo-ro.jpg"
              alt=""
            />
            <h4>Điều trị nám</h4>
          </div>

          <div className="serviceItem">
            <img
              src="https://cdn.hienvanspa.com/uploads/2021/06/dich-vu-tri-tan-nhang.jpg"
              alt=""
            />
            <h4>Điều trị tàn nhang</h4>
          </div>

          <div className="serviceItem">
            <img
              src="https://cdn.hienvanspa.com/uploads/2021/06/dich-vu-tre-hoa-da.jpg"
              alt=""
            />
            <h4>Trẻ hóa da</h4>
          </div>
        </div>
      </div>

      {/* Motto */}
      <div className="motto">
        <img
          className="mottoAvatar"
          // src="https://cdn.diemnhangroup.com/seoulspa/QwzICXn6-tri-mun.jpg"
          src="../../img/dieutrimun.png"
          alt=""
        />

        <div className="motto-content">
          <h3>ĐIỀU TRỊ MỤN</h3>
          <p>
            Dịch vụ Điều Trị Mụn tại Spa Kim Bông dứt điểm nỗi lo về mụn ở mặt,
            mụn lưng với các liệu trình đúng chuẩn Y khoa, chuyên sâu về da
            liễu. Tư vấn miễn phí ngay hôm nay...
          </p>
          <div className="motto-img">
            <img
              src="https://cdn.diemnhangroup.com/seoulspa/YMs0mqaj-dich-vu-web-07.png"
              alt=""
            />
            <img
              src="https://cdn.diemnhangroup.com/seoulspa/5PbJmKXL-dich-vu-web-09.jpg"
              alt=""
            />
            <img
              src="https://cdn.diemnhangroup.com/seoulspa/5jYCsuMJ-dich-vu-web-08.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Introduce Spa Kim Bong */}
      <div className="introduceSpa">
        <h3>
          <b></b>
          <span>Spa Kim Bông</span>
          <b></b>
        </h3>
        <p>
          Ở thời điểm hiện tại và trong tương lai gần, Spa Kim Bông đã và đang
          tự tin tạo nên sự hài lòng đối với khách hàng với tầm nhìn vượt trội,
          không ngừng đổi mới để mang đến cho thế hệ phụ nữ ngày càng trở nên
          xinh đẹp và tự tin.
        </p>

        <div className="introList">
          <div className="introItem">
            <img src="../../img/logoSpa.png" alt="" />
            <div className="introItemContent">
              <h3>Uy tín - Chất lượng</h3>
              <p>
                Spa Kim Bông được lựa chọn là một trong những điểm đến làm đẹp
                về Da - Tóc
              </p>
            </div>
          </div>
          <div className="introItem">
            <img src="../../img/logoSpa.png" alt="" />
            <div className="introItemContent">
              <h3>Máy móc hiện đại</h3>
              <p>
                Spa Kim Bông luôn chọn những công nghệ mới nhất áp dụng vào quy
                trình làm đẹp.
              </p>
            </div>
          </div>
          <div className="introItem">
            <img src="../../img/logoSpa.png" alt="" />
            <div className="introItemContent">
              <h3>Chăm sóc khách hàng</h3>
              <p>
                Spa Kim Bông với phương châm chăm lo cho khách hàng một cách
                nhiệt tình nhất.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Feedback />

      <BookOnline />

      <Footer />
    </div>
  );
};

Home.propTypes = {};

export default Home;
