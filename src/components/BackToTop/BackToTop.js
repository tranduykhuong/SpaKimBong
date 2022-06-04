import React, { useEffect, useState } from "react";
import "./backToTop.scss";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const BackToTop = () => {
  const [clicked, setClick] = useState(true);
  const [hiddenArrow, setHiddenArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 550) setHiddenArrow(false);
      else setHiddenArrow(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [clicked]);

  return (
    <div
      className={"backToTop " + (hiddenArrow ? "" : "show")}
      onClick={() => setClick((prev) => !prev)}
    >
      <FaRegArrowAltCircleUp className="icon" />
    </div>
  );
};

export default BackToTop;
