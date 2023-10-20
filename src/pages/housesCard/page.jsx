import useHomeCard from "./hook";
import { StyledDiv } from "./styled";
import { Row, Col } from "antd";
import { FaLocationArrow } from "react-icons/fa";

const HomeCard = ({ houses }) => {
  // const config = {
  //   title: "Xoá món ăn",
  //   content: "Bạn có muốn xoá món ăn",
  //   okText: "Đồng ý",
  //   cancelText: "Huỷ",
  // };
  // const [modal, contextHolder] = Modal.useModal();

  return (
    <div className="mt-8 max-w-6xl">
      <Row gutter={30}>
        {houses.map((house) => (
          <Col
            className="mb-[24px]"
            xs={24}
            sm={12}
            lg={8}
            xl={6}
            xxl={4}
            key={houses.id}
          >
            <StyledDiv className="main cursor-pointer">
              <ul className="cards" key={house.id}>
                <li className="cards_item">
                  <div className="card" tabIndex={0}>
                    <div className="card_image">
                      <img
                        src={house.image}
                        alt="A side view of a plate of figs and berries. "
                      />
                    </div>
                    <div className="card_content">
                      <h2 className="card_title">
                        {house.regularPrice} $/month{" "}
                      </h2>

                      <div className="card_text">
                        <div>
                          <FaLocationArrow />
                          <span className="relative top-[-18px] right-[-29px]">
                            {house.address}
                          </span>
                        </div>
                        <span className="note">{house.name}</span>
                      </div>
                      <div className="flex justify-between font-bold">
                        <span>{house.bedrooms} Beds</span>
                        <span>{house.bathrooms} Baths</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </StyledDiv>
          </Col>
        ))}
      </Row>
    </div>
  );
};

const HomeCardLayout = (props) => {
  return <HomeCard {...useHomeCard(props)} />;
};

export default HomeCardLayout;
