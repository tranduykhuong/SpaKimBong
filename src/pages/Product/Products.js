import React from "react";
import Footer from "../../components/Footer/Footer";
import "./products.scss";
import "../../SCSS/libs/grid.scss";
import ProductItem from "./ProductItem/ProductItem";

const Products = () => {
  return (
    <div className="products">
      <h1 className="title">Sản phẩm chất lượng cao từ Spa Kim Bông</h1>

      <div className="productContent">
        <div className="productFilter">
          <h3 className="titleFilter">Product categories</h3>
          <span className="line"></span>
          <input
            type="text"
            placeholder="Nhập tên sản phẩm tìm kiếm..."
            className="search"
          />
          <div className="filter">
            <h3>Lọc theo giá</h3>
            <span className="line"></span>
            <input type="range" className="filterPrice" />
            <div className="filterRange">
              <div className="filterBtn">Lọc</div>
              <p>Giá: 0đ - 500000đ</p>
            </div>
          </div>
        </div>
        <div className="productList grid">
          <div className="row">
            {[1, 2, 3, 4].map((item) => {
              return (
                <div className="col l-4">
                  <ProductItem
                    id="1"
                    pathImg="https://cdn.hienvanspa.com/uploads/2020/04/M%E1%BB%B8-PH%E1%BA%A8M-3-300x300.png"
                    productName="KEM CHỐNG NẮNG TẾ BÀO GỐC BLEMISH COVER CREAM SPF 40PA+++"
                    description="Sạch mụn không thâm không sẹo không tái phát với liệu trình trị mụn..."
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

export default Products;
