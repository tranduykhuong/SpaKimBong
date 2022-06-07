import React, { useState } from "react";
import "./contactToolbox.scss";
import { MdMessage } from "react-icons/md";
import { GoCalendar } from "react-icons/go";
import { BsArrowsAngleExpand } from "react-icons/bs";
import ModalSupport from "../Modal/ModalSupport/modalsupport";
import ModalBook from "../Modal/ModalBook/modalbook";

const ContactToolbox = () => {
  const [hidden, setHidden] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);

  function handleOpenSupport(setOpen) {
    setSupportOpen(setOpen);
  }
  function handleOpenBook(setOpen) {
    setBookOpen(setOpen);
  }

  return (
    <>
      <div className="contactFixed">
        <div
          className="toolboxScroll"
          onClick={() => setHidden((prev) => !prev)}
        >
          <BsArrowsAngleExpand className="iconArrow" />
        </div>
        <div className={"toolboxList " + (hidden ? "hidden" : "open")}>
          <div
            className="advise toolboxItem"
            onClick={() => setSupportOpen(true)}
          >
            <MdMessage className="iconMessage" />
            <p>Tư vấn</p>
          </div>
          <div className="book toolboxItem" onClick={() => setBookOpen(true)}>
            <GoCalendar className="iconCalendar" />
            <p>Đặt lịch</p>
          </div>
        </div>
      </div>
      {supportOpen && <ModalSupport setOpen={handleOpenSupport} />}
      {bookOpen && <ModalBook setOpen={handleOpenBook} />}
    </>
  );
};

export default ContactToolbox;
