import React, { useEffect, useState } from "react";
import "./reviewGallery.scss";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const ReviewGallery = () => {
  const [idxSlider, setIdxSlider] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setIdxSlider((prev) => (prev + 1) % 2);
    }, 8000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={"galleryInterface "}>
      <div
        className="reviewList"
        style={{ transform: "translateX(-" + idxSlider * 100 + "%)" }}
      >
        <div className="reviewItem">
          <p className="content">
            <RiDoubleQuotesL className="iconQuotes open" />
            Đội ngũ bác sĩ cũng như tư vấn ở Spa Kim Bông vô cùng chuyên nghiệp.
            Sau một thời gian sử dụng dịch vụ của thẩm mỹ Kim Bông, mình vô cùng
            yên tâm gửi gắm làn da cho thẩm mỹ Kim Bông.
            <RiDoubleQuotesR className="iconQuotes close" />
          </p>
          <img
            className="avatar"
            src="https://scr.vn/wp-content/uploads/2020/08/%E1%BA%A2nh-g%C3%A1i-d%E1%BB%85-th%C6%B0%C6%A1ng-l%C3%A0m-h%C3%ACnh-%C4%91%E1%BA%A1i-di%E1%BB%87n-xinh-x%E1%BA%AFn.jpg"
            alt=""
          />
          <h3 className="userName">Chị Nguyễn Anh Phương</h3>
        </div>

        <div className="reviewItem">
          <p className="content">
            <RiDoubleQuotesL className="iconQuotes open" />
            Bước sang tuổi 40 da mặt mình dần có nhiều nếp nhăn và bị chùng
            xuống ngày càng rõ rệt. Phẫu thuật Nâng chân mày không chỉ khiến
            cung lông mày cao hơn, cải thiện tầm nhìn mà còn giúp khuôn mặt trở
            nên cân đối.
            <RiDoubleQuotesR className="iconQuotes close" />
          </p>
          <img
            className="avatar"
            src="	https://thammyhongngoc.com/wp-content/uploads/2018/10/Nguyen-Phuong-Anh-120x120.png"
            alt=""
          />
          <h3 className="userName">Chị Trần Anh Thơ</h3>
        </div>
      </div>
    </div>
  );
};

export default ReviewGallery;
