import React from "react";
import "./calendar.scss";
import Footer from "./../../components/Footer/Footer";

const Calendar = () => {
  return (
    <div>
      <div className="container-calendar">
        <div className="container-bg-calendar">
          <div className="calendar">
            <div className="calendar-content">
              <h3>THỜI GIAN HOẠT ĐỘNG</h3>
              <p>
                Hiên Vân Spa bắt đầu làm việc từ 09:00 và nhận khách đợt cuối
                lúc 19:30 mỗi ngày (Kể cả thứ 7 và Chủ Nhật).
              </p>
              <strong id="special">Đặc Biệt:</strong>
              <p>
                Vẫn hoạt động bình thường vào giờ nghỉ trưa, khách hàng có thể
                thoải mái đặt lịch mà không ngại ảnh hưởng đến công việc, học
                tập ...
              </p>
              <p>Bạn muốn thư giãn ? Hãy đến với chúng tôi.</p>
            </div>

            <div className="calendar-boxs-day">
              <div className="calendar-boxs">
                <div className="calendar-box box1">
                  <p>
                    <strong>MONDAY</strong>
                  </p>
                  <p className="times">
                    <strong>09 : 00 - 20 : 00</strong>
                  </p>
                </div>
                <div className="calendar-box box2">
                  <p>
                    <strong>TUSEDAY</strong>
                  </p>
                  <p className="times">
                    <strong>09 : 00 - 20 : 00</strong>
                  </p>
                </div>
                <div className="calendar-box box3">
                  <p>
                    <strong>WEDNESDAY</strong>
                  </p>
                  <p className="times">
                    <strong>09 : 00 - 19 : 30</strong>
                  </p>
                </div>
                <div className="calendar-box box4">
                  <p>
                    <strong>THURSDAY</strong>
                  </p>
                  <p className="times">
                    <strong>09 : 00 - 20 : 00</strong>
                  </p>
                </div>
                <div className="calendar-box box5">
                  <p>
                    <strong>FRIDAY</strong>
                  </p>
                  <p className="times">
                    <strong>09 : 00 - 19 : 30</strong>
                  </p>
                </div>
                <div className="calendar-box box6">
                  <p>
                    <strong>SATURDAY</strong>
                  </p>
                  <p className="times">
                    <strong>09 : 00 - 19 : 00</strong>
                  </p>
                </div>
                <div className="calendar-box box7">
                  <p>
                    <strong>SUNDAY</strong>
                  </p>
                  <p className="times">
                    <strong>09 : 00 - 19 : 00</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="book-calendar">
            <div className="book-calendar-content">
              <p></p>
            </div>

            <div className="book-calendar-form">
              <input
                type="text"
                name="ngay"
                value={40}
                placeholder="Ngày"
              ></input>

              <select name="chonchinhanh" aria-invalid="false">
                <option value="Chọn chi nhánh"> Chọn chi nhánh</option>
                <option value="Spa Kim Bồng"> Spa Kim Bồng</option>
              </select>

              <input
                type="text"
                name="name-customer"
                value={40}
                placeholder="Tên khách hàng"
              ></input>

              <input
                type="text"
                name="telephone"
                value={40}
                placeholder="Số điện thoại"
              ></input>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Calendar;
