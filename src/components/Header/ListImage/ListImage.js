import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./listImage.scss";
import LocomotiveScroll from "locomotive-scroll";

const ListImage = () => {
  let root, images;
  useEffect(() => {
    root = document.querySelector(".scroll-animations-example");
    images = root.querySelectorAll(".image");

    init();

    const timer = setTimeout(() => showImages(), 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  function init() {
    const scroll = new LocomotiveScroll({
      el: root,
      direction: "horizontal",
      smooth: true,
      lerp: 0.05,
      tablet: {
        smooth: true,
      },

      smartphone: {
        smooth: true,
      },
    });

    // [].forEach.call(images, (image) => {
    //   image.addEventListener("click", () => {
    //     image.classList.add("-clicked");
    //     hideImages();
    //   });
    // });
  }

  function showImages() {
    [].forEach.call(images, (image) => {
      image.classList.remove("-clicked");
      image.classList.add("-active");
    });
  }

  // function hideImages() {
  //   [].forEach.call(images, (image) => {
  //     image.classList.remove("-active");
  //   });

  //   setTimeout(() => showImages(), 2000);
  // }

  return (
    <div className="scroll-animations-example" data-scroll-container>
      <div className="scrollsection" data-scroll-section>
        <div className="item -normal" data-scroll data-scroll-speed="2">
          <img
            className="image"
            src="https://picsum.photos/id/1005/300/400"
            alt=""
          />
        </div>
        <div className="item -big" data-scroll data-scroll-speed="1">
          <img
            className="image"
            src="https://picsum.photos/id/1019/600/800"
            alt=""
          />
        </div>
        <div
          className="item -small -horizontal"
          data-scroll
          data-scroll-speed="4"
        >
          <img
            className="image"
            src="https://picsum.photos/id/1027/400/300"
            alt=""
          />
        </div>
        <div className="item -normal" data-scroll data-scroll-speed="3">
          <img
            className="image"
            src="https://picsum.photos/id/1028/300/400"
            alt=""
          />
        </div>
        <div
          className="item -normal -horizontal"
          data-scroll
          data-scroll-speed="2"
        >
          <img
            className="image"
            src="https://picsum.photos/id/1041/400/300"
            alt=""
          />
        </div>
        <div
          className="item -big -horizontal"
          data-scroll
          data-scroll-speed="4"
        >
          <img
            className="image"
            src="https://picsum.photos/id/1042/800/600"
            alt=""
          />
        </div>
        <div className="item -small" data-scroll data-scroll-speed="2">
          <img
            className="image"
            src="https://picsum.photos/id/1049/300/400"
            alt=""
          />
        </div>
        <div
          className="item -normal -horizontal"
          data-scroll
          data-scroll-speed="1"
        >
          <img
            className="image"
            src="https://picsum.photos/id/1056/300/400"
            alt=""
          />
        </div>
        <div
          className="item -small -horizontal"
          data-scroll
          data-scroll-speed="3"
        >
          <img
            className="image"
            src="https://picsum.photos/id/1062/400/300"
            alt=""
          />
        </div>
        <div className="item -big" data-scroll data-scroll-speed="1">
          <img
            className="image"
            src="https://picsum.photos/id/1068/600/800"
            alt=""
          />
        </div>

        <div
          className="item -normal -horizontal"
          data-scroll
          data-scroll-speed="2"
        >
          <img
            className="image"
            src="https://picsum.photos/id/1069/400/300"
            alt=""
          />
        </div>
        <div
          className="item -normal -horizontal"
          data-scroll
          data-scroll-speed="1"
        >
          <img
            className="image"
            src="https://picsum.photos/id/1072/300/400"
            alt=""
          />
        </div>
        <div
          className="item -small -horizontal"
          data-scroll
          data-scroll-speed="4"
        >
          <img
            className="image"
            src="https://picsum.photos/id/1075/400/300"
            alt=""
          />
        </div>
        <div className="item -big" data-scroll data-scroll-speed="3">
          <img
            className="image"
            src="https://picsum.photos/id/1081/600/800"
            alt=""
          />
        </div>
        <div
          className="item -normal -horizontal"
          data-scroll
          data-scroll-speed="2"
        >
          <img
            className="image"
            src="https://picsum.photos/id/111/400/300"
            alt=""
          />
        </div>
        <div
          className="item -small -horizontal"
          data-scroll
          data-scroll-speed="4"
        >
          <img
            className="image"
            src="https://picsum.photos/id/129/400/300"
            alt=""
          />
        </div>
        <div className="item -big" data-scroll data-scroll-speed="2">
          <img
            className="image"
            src="https://picsum.photos/id/137/600/800"
            alt=""
          />
        </div>
        <div
          className="item -normal -horizontal"
          data-scroll
          data-scroll-speed="1"
        >
          <img
            className="image"
            src="https://picsum.photos/id/141/300/400"
            alt=""
          />
        </div>
        <div
          className="item -small -horizontal"
          data-scroll
          data-scroll-speed="3"
        >
          <img
            className="image"
            src="https://picsum.photos/id/145/400/300"
            alt=""
          />
        </div>
        <div className="item -normal" data-scroll data-scroll-speed="1">
          <img
            className="image"
            src="https://picsum.photos/id/147/300/400"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

ListImage.propTypes = {};

export default ListImage;
