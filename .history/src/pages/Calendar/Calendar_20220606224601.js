import React from "react";
import "./calendar.scss";

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
              <p>Đặc Biệt:</p>
              <p>
                Vẫn hoạt động bình thường vào giờ nghỉ trưa, khách hàng có thể
                thoải mái đặt lịch mà không ngại ảnh hưởng đến công việc, học
                tập ...
              </p>
              <p>Bạn muốn thư giãn ? Hãy đến với chúng tôi.</p>
            </div>

            <div className="calendar-boxs"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
