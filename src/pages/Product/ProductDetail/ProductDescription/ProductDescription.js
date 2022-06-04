import React from "react";
import "./productDescription.scss";

const ProductDescription = () => {
  return (
    <div className="ProductDescription">
      <h2 className="title">Viên uống trắng da chống nắng Triple White</h2>
      <div className="detailItem">
        <h3 className="titleDetail">MÔ TẢ SẢN PHẨM</h3>
        <p className="contentDetail">
          Viên uống trắng da chống nắng Triple White được sản xuất bởi Công ty
          AIE Pharmaceuticals, Inc USA của Hoa Kỳ, sử dụng công nghệ tiên tiến
          hàng đầu, cùng với sự tiến bộ vượt bậc trong công thức làm trắng da và
          chống nắng. Với 2 tinh chất Glutathione có hàm lượng cao, tinh chất
          Fernblock chiết xuất từ Dương xỉ vùng Trung Mỹ cùng với những hợp chất
          khác chiết xuất từ hạt lựu đỏ, nhau thai cừu giúp chống nắng toàn diện
          và dưỡng da trắng sáng từ bên trong.
        </p>
        <div className="img">
          <img
            src="https://cdn.hienvanspa.com/uploads/2021/05/vien-uong-chong-nang-triple-white.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="detailItem">
        <h3 className="titleDetail">
          CÔNG DỤNG KÉP TRẮNG DA VƯỢT TRỘI & CHỐNG NẮNG TOÀN THÂN
        </h3>
        <p className="contentDetail">
          Sản phẩm sở hữu công dụng chống nắng mạnh mẽ nhờ bảng thành phần có
          chứa Fernblock. Là chiết xuất từ lá dương xỉ Trung Mỹ đã được khoa học
          chứng minh có tác dụng bảo vệ da khỏi tác động của ánh nắng mặt trời
          và các loại bức xạ ánh sáng xanh từ các thiết bị điện tử. Fernblock
          còn có khả năng sửa chữa những tế bào da bị hư tổn do tia cực tím hoặc
          do lão hóa. Đồng thời, kiểm soát và ngăn ngừa sắc tố trên da giúp làm
          giảm tình trạng sạm nám. Các phân tử có trong chiết xuất lá dương xỉ
          chứa tính oxi hóa mạnh mẽ có khả năng trung hòa và loại bỏ các gốc tự
          do gây ung thư da trong cơ thể.
        </p>
        <div className="img">
          <img
            src="https://cdn.hienvanspa.com/uploads/2021/05/cong-dung-vien-uong-chong-nang-triple-white.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
