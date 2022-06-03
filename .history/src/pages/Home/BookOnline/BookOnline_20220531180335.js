import React, { useState } from "react";
import "./bookOnl.scss";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import ModalBook from "./Modal/ModalBook/ModalBook";

const BookOnline = () => {
  const [open, setOpen] = useState(false);
  const hanldeOpen = (isOpen) => {
    setOpen(isOpen);
  };
  return (
    <div className="bookOnline">
      <div className="book">
        <div className="bookContent">
          <h2>ĐẶT LỊCH NGAY</h2>
          <h4>Nhanh tay đăng ký để được phục vụ chu đáo nhất.</h4>
          <div
            className="Btn"
            onClick={() => {
              setOpen(true);
            }}
          >
            <FaRegCalendarAlt className="Icon" />
            <h3>ĐẶT LỊCH HẸN</h3>
          </div>

          <h2>BẠN CẦN TƯ VẤN?</h2>
          <div className="Btn">
            <MdOutlineMessage className="Icon" />
            <h3>YÊU CẦU TƯ VẤN</h3>
          </div>
        </div>
      </div>

      <img
        src="https://cdn.diemnhangroup.com/seoulspa/Nj6ZIyTn-dat-lich.png"
        alt=""
      />
      {open && <ModalBook setOpen={hanldeOpen} />}
    </div>
  );
};

export default BookOnline;
