import React, { useState, useEffect } from "react";
import "./banner.scss";

let timer;

const Banner = () => {
  const [idxSlider, setIdxSlider] = useState(0);

  useEffect(() => {
    timer = setInterval(() => {
      setIdxSlider((prev) => (prev + 1) % 3);
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleClickDot = (idx) => {
    setIdxSlider(idx);
    clearInterval(timer);
    timer = setInterval(() => {
      setIdxSlider((prevState) => (prevState + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  };

  return (
    <div className="sliderInterface">
      <div
        className="sliderList"
        style={{ transform: "translateX(-" + idxSlider * 100 + "%)" }}
      >
        <div className="sliderItem">
          <img src="../../img/slider2.jpg" alt="" />
        </div>
        <div className="sliderItem">
          <img src="../../img/slider3.jpg" alt="" />
        </div>
        <div className="sliderItem">
          <img src="../../img/slider1.jpg" alt="" />
        </div>
      </div>

      <div className="dots">
        <div
          className={"dot" + (idxSlider === 0 ? " active" : "")}
          onClick={() => handleClickDot(0)}
        ></div>
        <div
          className={"dot" + (idxSlider === 1 ? " active" : "")}
          onClick={() => handleClickDot(1)}
        ></div>
        <div
          className={"dot" + (idxSlider === 2 ? " active" : "")}
          onClick={() => handleClickDot(2)}
        ></div>
      </div>
    </div>
  );
};

export default Banner;
