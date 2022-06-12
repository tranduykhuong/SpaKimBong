import React from "react";
import "./calendar.scss";
import Footer from "./../../components/Footer/Footer";

const Calendar = () => {
  return (
    <div>
      <div className="containercalendar">
        <div className="containercalendar__bg">
          <div className="calendar">
            <div className="calendar__content">
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

            <div className="calendar__boxs-day">
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
              <p>Bạn đang gặp các vấn đề về da mặt, mụn, tóc,... Hãy đến ngay với chúng tôi bằng cách <strong>đặt lịch online</strong>, bạn sẽ tiết kiệm được rất nhiều thời gian hoặc bạn có thể gọi điện cho Spa Kim Bông qua số điện thoại: 1900 0000</p>
            </div>

            <div className="book-calendar-form">
              <div className="book-title">
                <p>
                  <strong>ĐẶT LỊCH ONLINE</strong>
                </p>
              </div>
              <div className="day-book">
                <input type="text" name="ngay" placeholder="Ngày"></input>
              </div>

              <div className="branch">
                <select name="chonchinhanh" aria-invalid="false">
                  <option value="Chọn chi nhánh"> Chọn chi nhánh</option>
                  <option value="Spa Kim Bồng"> Spa Kim Bồng</option>
                </select>
              </div>

              <div className="name-tel">
                <div className="name-cus">
                  <input
                    type="text"
                    name="name-customer"
                    placeholder="Tên khách hàng"
                  ></input>
                </div>
                <div className="tel-cus">
                  <input
                    type="text"
                    name="telephone"
                    placeholder="Số điện thoại"
                  ></input>
                </div>
              </div>
              <div className="send-book">
                <input type="submit" value="ĐẶT"></input>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Calendar;
