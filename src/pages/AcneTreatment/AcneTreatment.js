import React, { useEffect, useState } from "react";
import "./acneTreatment.scss";
import "../../SCSS/libs/grid.scss";
import AcneContent from "./AcneContent/AcneContent";
import Footer from "../../components/Footer/Footer";
import ReviewGallery from "./ReviewGallery/ReviewGallery";

const AcneTreatment = () => {
  return (
    <>
      <div className={"acneTreatment"}>
        <div className="grid row">
          <div className="content l-9">
            <AcneContent />
          </div>
          <div className="taskbar l-3">
            <h3 className="titleTaskbar">Dịch vụ</h3>
            <ul className="serviceList">
              <li className="serviceItem">
                <a href="#">Điều trị mụn</a>
              </li>
              <li className="serviceItem">
                <a href="#">Điều trị mụn thịt</a>
              </li>
              <li className="serviceItem">
                <a href="#">Điều trị nám</a>
              </li>
              <li className="serviceItem">
                <a href="#">Điều trị tàn nhang</a>
              </li>
            </ul>
            <ReviewGallery />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AcneTreatment;
