import "./About.scss";
import React from "react";
import Footer from "./../../components/Footer/Footer";

const About = () => {
  return (
    <div>
      <div className="container1">
        <div className="container-image"></div>

        <div className="container-content">
          <div className="content-left">
            <div className="title">
              <h1>
                HIỀN VÂN SPA XUẤT PHÁT TỪ NIỀM ĐAM MÊ & KẾT QUẢ CỦA SỰ NỖ LỰC
              </h1>
            </div>
            <div className="box">
              <div className="box-content-img">
                <div className="image">
                  <img
                    width={200}
                    height={100}
                    src="https://i.pinimg.com/originals/2c/84/5a/2c845a66b8ad2a8aafd288bdc16cd459.jpg"
                  ></img>
                </div>
                <div className="content">
                  <p>
                    Hiền cảm thấy vô cùng tự hào khi spa của mình đã nhận được
                    sự tin tưởng của hàng chục nghìn khách hàng khu vực TPHCM và
                    nhiều tỉnh thành lân cận. Thậm chí nhiều bạn không quản ngại
                    đường xá xa xôi, di chuyển từ tận miền Trung, miền Bắc đến
                    điều trị.
                  </p>
                </div>
              </div>
              <div className="box-content">
                <div className="content">
                  <p>
                    Hiền Vân Spa cũng may mắn nhận được sự ủng hộ và chung tay
                    của nhóm thiện nguyện Golden Heart đến từ các mạnh thường
                    quân tại nước ngoài như Mỹ, Anh, Australia, Israel,… Họ biết
                    đến Hiền Vân thông qua kênh Youtube. Golden Heart cảm thấy
                    đồng cảm với những khách hàng bị mụn nặng nhưng điều kiện
                    kinh tế khó khăn. Vì vậy họ quyết định đồng hành và tài trợ
                    miễn phí 100%. Tất cả các ca điều trị mụn miễn phí do Golden
                    Heart tài trợ đều được nhận thẻ bảo hành vĩnh viễn, chăm sóc
                    da định kỳ hàng tháng, cam kết mụn không tái phát. Tính đến
                    năm 2021, Hiền Vân Spa cùng quỹ Golden Heart đã hỗ trợ cho
                    hơn 100 ca điều trị mụn hoàn toàn miễn phí, giúp họ tự tin
                    hơn trong cuộc sống với một diện mạo mới.
                  </p>
                </div>
              </div>

              <div className="box-content">
                <div className="content">
                  <p>
                    Hiền hiểu rằng, chi phí là vấn đề khách hàng vô cùng quan
                    tâm, nhưng thay vì đi theo cách thức giảm giá sâu như các
                    thương hiệu khác, Hiền tập trung nâng cao chất lượng, giúp
                    khách hàng điều trị các vấn đề da an toàn, hiệu quả trong
                    thời gian ngắn nhất và duy trì kết quả bền vững nhất. Điều
                    này gián tiếp giúp khách hàng tiết kiệm được chi phí. Bạn có
                    thể chỉ bỏ ra 99K, 199K để điều trị mụn giá rẻ tại các cơ sở
                    khác nhưng mụn không giảm, thậm chí viêm nhiễm, lây lan bởi
                    lẽ “tiền nào của đó”. 1 liệu trình “hời hợt” không đủ để
                    giúp bạn giải quyết triệt để các vấn đề da.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="image-right">
            <div className="image-box">
              <img
                width={534}
                height={800}
                src="https://cdn.hienvanspa.com/uploads/2021/03/do-thu-hien-foulder-hienvanspa.png"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
