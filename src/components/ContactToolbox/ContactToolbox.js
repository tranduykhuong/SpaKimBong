import React, { useState } from "react";
import "./contactToolbox.scss";
import { MdMessage } from "react-icons/md";
import { GoCalendar } from "react-icons/go";
import { BsArrowsAngleExpand } from "react-icons/bs";

const ContactToolbox = () => {
  const [hidden, setHidden] = useState(false);

  return (
    <div className="contactFixed">
      <div className="toolboxScroll" onClick={() => setHidden((prev) => !prev)}>
        <BsArrowsAngleExpand className="iconArrow" />
      </div>
      <div className={"toolboxList " + (hidden ? "hidden" : "open")}>
        <div className="advise toolboxItem">
          <MdMessage className="iconMessage" />
          <p>Tư vấn</p>
        </div>
        <div className="book toolboxItem">
          <GoCalendar className="iconCalendar" />
          <p>Đặt lịch</p>
        </div>
      </div>
    </div>
  );
};

export default ContactToolbox;
