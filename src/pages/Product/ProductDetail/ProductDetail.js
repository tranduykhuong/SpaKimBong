import React, { useState, useEffect } from "react";
import "./productDetail.scss";
import "../../../SCSS/libs/grid.scss";
import Footer from "../../../components/Footer/Footer";
import { BsFacebook } from "react-icons/bs";
import ProductGallery from "./ProductGallery/ProductGallery";
import ProductDescription from "./ProductDescription/ProductDescription";
import ProductItem from "../ProductItem/ProductItem";

const ProductDetail = () => {
  const [numbers, setNumbers] = useState(1);

  useEffect(() => {
    document.querySelector(".numberProducts").value = numbers;
  }, [numbers]);

  function handleAddProduct() {
    setNumbers((prev) => prev + 1);
  }
  function handleSubProduct() {
    if (numbers > 1) setNumbers((prev) => prev - 1);
  }
  console.log(numbers);

  return (
    <div className="productDetail">
      <div className="itemContent">
        <div className="overview grid row">
          <div className="productGallery col l-6">
            <ProductGallery />
          </div>
          <div className="description col l-6">
            <h2 className="productName">
              KEM CHỐNG NẮNG TẾ BÀO GỐC BLEMISH COVER CREAM SPF 40PA+++
            </h2>
            <div className="productPrice">
              <span className="priceCurrent">900000đ</span>
              <span className="priceOld">1200000đ</span>
            </div>
            <p className="procductDescription">
              Hãy sử dụng kem chống nắng hàng ngày để tránh hư tổn bởi tia UV và
              tránh sạm da.
            </p>
            <p className="procductDescription">
              Sạch mụn không thâm không sẹo không tái phát với liệu trình trị
              mụn chuyên sâu, kết hợp cùng viên uống trắng da chống nắng nội
              sinh Triple White.
            </p>

            <div className="order">
              <div className="sub" onClick={() => handleSubProduct()}>
                -
              </div>
              <input
                onChange={() => setNumbers(numbers)}
                defaultValue="1"
                type="number"
                min="1"
                inputMode="numeric"
                className="numberProducts"
              />
              <div className="add" onClick={() => handleAddProduct()}>
                +
              </div>

              <div className="addToCart">Thêm vào giỏ hàng</div>
            </div>

            <div className="share">
              <span></span>
              <BsFacebook className="iconFacebook" />
            </div>
          </div>
        </div>
        <div className="detail">
          <span className="line"></span>
          <ProductDescription />
        </div>

        <div className="productSame">
          <span className="line"></span>
          <h2 className="title">Sản phẩm tương tự</h2>
          <div className="productList grid row">
            {[1, 2, 3, 4].map((item) => {
              return (
                <div className="col l-3">
                  <ProductItem
                    id="1"
                    pathImg="https://cdn.hienvanspa.com/uploads/2020/04/M%E1%BB%B8-PH%E1%BA%A8M-3-300x300.png"
                    productName="KEM CHỐNG NẮNG TẾ BÀO GỐC BLEMISH COVER CREAM SPF 40PA+++"
                    // description="Sạch mụn không thâm không sẹo không tái phát với liệu trình trị mụn..."
                    newPrice="950000"
                    oldPrice="1200000"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
