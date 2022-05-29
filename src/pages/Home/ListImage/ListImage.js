import React, { useState } from "react";
import "./listImage.scss";

const ListImage = () => {
  const [angle, setAngle] = useState(0);

  return (
    <div>
      <div id="carousel">
        <h2 className="title">
          Spa Kim Bông luôn mong muốn mang dịch vụ tốt nhất đến với khách hàng
        </h2>
        <figure id="spinner" style={{ transform: "rotateY(" + angle + "deg)" }}>
          <img
            src="https://thammyhongngoc.com/wp-content/uploads/2018/12/ruamatlamsachda-1.jpg"
            alt=""
          />
          <img
            src="https://thammyhongngoc.com/wp-content/uploads/2018/12/4.png"
            alt=""
          />
          <img
            src="https://thammyhongngoc.com/wp-content/uploads/2018/12/2-1.jpg"
            alt=""
          />
          <img
            src="https://thammyhongngoc.com/wp-content/uploads/2015/11/Cham-soc-da-mat.jpg"
            alt=""
          />
          <img
            src="https://thammyhongngoc.com/wp-content/uploads/2015/11/tu-van-dieu-tri-da-tai-Hong-Ngoc.jpg"
            alt=""
          />
          <img
            src="https://thammyhongngoc.com/wp-content/uploads/2018/10/IMG_0036-1.jpg"
            alt=""
          />
          <img
            src="https://thammyhongngoc.com/wp-content/uploads/2018/10/IMG_0016.jpg"
            alt=""
          />
          <img
            src="https://thammyhongngoc.com/wp-content/uploads/2018/10/IMG_0029.jpg"
            alt=""
          />

          {/* <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div> */}
        </figure>
      </div>

      <span
        style={{ float: "left" }}
        className="ss-icon"
        onClick={() => setAngle((prev) => prev - 45)}
      >
        &lt;
      </span>
      <span
        style={{ float: "right" }}
        className="ss-icon"
        onClick={() => setAngle((prev) => prev + 45)}
      >
        &gt;
      </span>
    </div>
  );
};

export default ListImage;
