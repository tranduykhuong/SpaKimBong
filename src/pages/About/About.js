import "./About.scss";
import React from "react";
import Footer from "./../../components/Footer/Footer";
import "../../SCSS/libs/grid.scss";
import Reason from "./Reason/Reason";
import Future from "./Future/Future";

const About = () => {
  return (
    <div>
      <div className="container1">
        <div className="container-image"></div>

        <div className="container-background-content">
          <div className="container-content">
            <div className="image-right">
              <div className="image-box">
                <img
                  width={534}
                  height={800}
                  src="https://wedding.lotteshopping.com/img/site/wedding/concierge_img_05.png"
                ></img>
              </div>
            </div>
            <div className="content-left">
              <div className="title">
                <h1>
                  SPA KIM BÔNG XUẤT PHÁT TỪ NIỀM ĐAM MÊ & KẾT QUẢ CỦA SỰ NỖ LỰC
                </h1>
              </div>
              <div className="box">
                <div className="box-content-img">
                  <div className="image">
                    <img
                      width={200}
                      height={100}
                      src="../../img/bannerAbout.png"
                    ></img>
                  </div>
                  <div className="content">
                    <p>
                      Kim Bông cảm thấy vô cùng tự hào khi spa của mình đã nhận
                      được sự tin tưởng của rất nhiều khách hàng khu vực và
                      nhiều tỉnh thành lân cận. Thậm chí nhiều bạn không quản
                      ngại đường xá xa xôi, di chuyển đến tận Bến Tre để điều
                      trị.
                    </p>
                  </div>
                </div>

                <div className="box-content">
                  <div className="content">
                    <p>
                      Kim Bông hiểu rằng, chi phí là vấn đề khách hàng vô cùng
                      quan tâm, nhưng thay vì đi theo cách thức giảm giá sâu như
                      các thương hiệu khác, Kim Bông tập trung nâng cao chất
                      lượng, giúp khách hàng điều trị các vấn đề da an toàn,
                      hiệu quả trong thời gian ngắn nhất và duy trì kết quả bền
                      vững nhất. Điều này gián tiếp giúp khách hàng tiết kiệm
                      được chi phí. Bạn có thể chỉ bỏ ra 99K, 199K để điều trị
                      mụn giá rẻ tại các cơ sở khác nhưng mụn không giảm, thậm
                      chí viêm nhiễm, lây lan bởi lẽ “tiền nào của đó”. 1 liệu
                      trình “hời hợt” không đủ để giúp bạn giải quyết triệt để
                      các vấn đề da.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-background-founder">
          <div className="box-founder">
            <div className="info-founder">
              <div className="text-info">
                <h2>
                  <strong>nhà sáng lập</strong>
                </h2>
                <h3>
                  <span>Chuyên gia Võ Kim Hoa</span>
                </h3>
                <p>
                  Được mệnh danh là Bàn tay vàng trị mụn với kinh nghiệm hơn 20
                  năm trong nghề. Tính đến thời điểm hiện tại, Chuyên gia Võ Kim
                  Hoa đã tiếp nhận và điều trị thành công cho hàng trăm khách
                  hàng, giúp họ sở hữu ngoại hình đẹp để tự tin trong cuộc sống.
                  Bên cạnh đó, Chuyên gia Võ Kim Hoa cũng đào tạo cho hàng chục
                  học viên tại Spa Kim Bông, mang lại cho họ cơ hội việc làm
                  tốt.
                </p>
              </div>
            </div>
            <div className="founder-left">
              <img
                src="https://indecalnhanh.net/wp-content/uploads/2022/01/11.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <Reason />
        <Future />
      </div>

      <Footer />
    </div>
  );
};

export default About;
