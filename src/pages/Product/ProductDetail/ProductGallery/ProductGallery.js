import React, { useState } from "react";
import "./productGallery.scss";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const pathImg = [
  "https://cdn.hienvanspa.com/uploads/2021/05/vien-uong-chong-nang-triple-white.jpg",
  "https://cdn.hienvanspa.com/uploads/2021/05/punica-granatum-co-trong-triple-white.jpg",
  "https://cdn.hienvanspa.com/uploads/2021/05/thanh-phan-placenta.jpg",
  "https://cdn.hienvanspa.com/uploads/2021/04/spa-tri-mun-tphcm.jpg",
];

const ProductGallery = () => {
  const [idxImg, setIdxImg] = useState(1);

  return (
    <div className="productGallery">
      <div className="galleryInterface">
        <div className="productImage">
          {pathImg.map((path) => {
            return (
              <div
                className="productImageItem"
                style={{
                  transform: "translateX(-" + idxImg * 100 + "%)",
                }}
              >
                <img src={path} alt="" />
              </div>
            );
          })}
        </div>
        <IoIosArrowDropleft
          className="arrowLeft"
          onClick={() => {
            if (idxImg > 0) setIdxImg((prev) => prev - 1);
          }}
        />
        <IoIosArrowDropright
          className="arrowRight"
          onClick={() => {
            if (idxImg < pathImg.length - 1) setIdxImg((prev) => prev + 1);
          }}
        />
      </div>
      <div className="productThumbnails">
        {pathImg.map((path, idx) => {
          return (
            <div
              className={"imageItem " + (idx === idxImg ? "selected" : "")}
              onClick={() => setIdxImg(idx)}
            >
              <img src={path} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductGallery;
