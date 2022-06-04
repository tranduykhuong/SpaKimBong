import React from "react";
import "./phoneTool.scss";
import { BsFillTelephoneFill } from "react-icons/bs";

const PhoneTool = () => {
  return (
    <div className="phoneTool">
      <div className="phone">
        <BsFillTelephoneFill className="iconPhone" />
      </div>
      <div className="circle"></div>
    </div>
  );
};

export default PhoneTool;
