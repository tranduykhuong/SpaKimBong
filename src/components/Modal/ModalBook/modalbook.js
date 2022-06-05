import React from "react";
import "./modalbook.scss";

const ModalBook = ({ setOpen }) => {
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
          <img className="logo" src="../img/logoSpa.png" alt="" />
          <div className="title">
            <h3>ĐẶT LỊCH HẸN</h3>
          </div>
          <div className="option">
            <div className="option-item">
              <div className="item">
                <input type="text" placeholder="Họ và tên" />
              </div>
              <div className="item-2">
                <div className="item">
                  <input type="date" value="time" />
                </div>
                <div className="item">
                  <select>
                    {[
                      "7:00",
                      "8:00",
                      "9:00",
                      "10:00",
                      "11:00",
                      "13:00",
                      "14:00",
                      "15:00",
                      "16:00",
                      "19:00",
                    ].map((item) => {
                      return (
                        <option value="" key="">
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div className="option-item">
              <div className="item">
                <input type="text" placeholder="Số điện thoại" />
              </div>
              <div className="item">
                <select>
                  <option value="" key="">
                    Chọn Dịch vụ
                  </option>
                  <option value="" key="">
                    Trị mụn
                  </option>
                  <option value="" key="">
                    Chăm sóc da
                  </option>
                  <option value="" key="">
                    Trị tàn nhang
                  </option>
                  <option value="" key="">
                    Trị nám
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="note">
            <textarea cols="50" rows="4" placeholder="Thêm ghi chú"></textarea>
          </div>
          <div className="send">
            <input type="submit" value="GỬI YÊU CẦU" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalBook;
