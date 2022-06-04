import React from "react";
import "./productItem.scss";

const ProductItem = (props) => {
  return (
    <div className="productItem">
      <div className="newTemp">New</div>

      <a href={"/products/" + props.id} target="_blank">
        <img src={props.pathImg} alt="" />
        <div className="productContent">
          <h2 className="productName">{props.productName}</h2>
          <p className="procductDescription">{props.description}</p>
          <div className="productPrice">
            <span className="priceCurrent">{props.newPrice}</span>
            <span className="priceOld">{props.oldPrice}</span>
          </div>
        </div>
      </a>
      <div className="buyBtn">Đặt mua ngay</div>
    </div>
  );
};

export default ProductItem;
