import React from "react";
import "./modalsupport.scss";

const ModalSupport = ({ setOpen }) => {
  return (
    <>
      <div
        className="background-blur"
        onClick={() => {
          setOpen(false);
        }}
      ></div>
      <div className="modalBook">
        <div className="container">
          <div
            className="close"
            onClick={() => {
              setOpen(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              viewBox="0 0 320 512"
            >
              <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
            </svg>
          </div>

          {/* <div className="logo">
            <img width={80} src="../img/logoSpa.png"></img>
          </div> */}

          <div className="title">
            Để lại số điện thoại<br></br> để được Kim Bông gọi lại ngay!
          </div>

          <div className="option">
            <div className="option-item">
              <div className="item">
                <input type="text" placeholder="Họ và tên" />
              </div>
            </div>
            <div className="option-item">
              <div className="item">
                <input type="text" placeholder="Số điện thoại" />
              </div>
            </div>
          </div>

          <div className="note">
            <textarea cols="50" rows="4" placeholder="Thêm ghi chú"></textarea>
          </div>

          <div className="send1">
            <input type="submit" value="YÊU CẦU GỌI LẠI" />
          </div>

          <div className="hotline">
            Hoặc gọi ngay với chúng tôi<br></br> hotline: 1900 6947
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSupport;
