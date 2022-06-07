import React from "react";
import "./phoneTool.scss";
import { BsFillTelephoneFill } from "react-icons/bs";

const PhoneTool = () => {
  return (
    <a href="tel:1800 1010" className="phoneTool">
      <div className="phone">
        <BsFillTelephoneFill className="iconPhone" />
      </div>
      <div className="circle"></div>
    </a>
  );
};

export default PhoneTool;
