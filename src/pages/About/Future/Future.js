import React from "react";
import "./future.scss";

const Future = () => {
  return (
    <div className="container-bg-future-orientation">
      <div className="container-future-orientation">
        <div className="future-orientation-left">
          <img
            src="https://vietwave.com.vn/yonaspa/upload/files/chung/banner_mobi_1.jpg"
            alt=""
          />
        </div>
        <div className="future-orientation-right">
          <div className="content">
            <h2>ĐỊNH HƯỚNG TƯƠNG LAI</h2>
            <p>
              Trước mắt, trong năm 2022, Kim Bông sẽ tiếp tục đặt tiêu chí khách
              hàng làm gốc. Spa sẽ mở thêm các dịch vụ chăm sóc da mặt chuyên
              sâu theo chuẩn Y khoa.
            </p>
            <p>
              Bên cạnh đó, Kim Bông sẽ tiếp tục phát triển mô hình Kim Bông
              Academy, hỗ trợ dạy nghề cho các bạn có niềm đam mê với lĩnh vực
              làm đẹp.
            </p>
          </div>
          <div className="box-3-image">
            <div className="box-image">
              <img
                width={146}
                height={147}
                src="https://cdn.hienvanspa.com/uploads/2021/03/dinh-huong-tuong-lai.jpg"
              ></img>
            </div>
            <div className="box-image">
              <img
                width={146}
                height={147}
                src="https://cdn.hienvanspa.com/uploads/2021/03/dinh-huong.jpg"
              ></img>
            </div>
            <div className="box-image">
              <img
                width={146}
                height={147}
                src="https://cdn.hienvanspa.com/uploads/2021/03/dinh-huong-tuong-lai.jpg"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Future;
