import React, { useEffect, useState } from "react";
import "../../styles/home/Home.css";
import Slider from "../../components/Slider";
import CardSlider from "../../components/CardSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { Store } from "../../types/store";

interface EventBanner {
  no: number;
  imageUrl: string;
}
const eventImage: EventBanner[] = [
  { no: 1, imageUrl: "/image/slide5.jpg" },
  { no: 2, imageUrl: "/image/slide2.jpg" },
  { no: 3, imageUrl: "/image/slide3.jpg" },
  { no: 4, imageUrl: "/image/slide4.jpg" },
  { no: 5, imageUrl: "/image/slide1.jpg" },
  { no: 6, imageUrl: "/image/slide6.jpg" },
];

const Home: React.FC = () => {
  const [storeData, setStoreData] = useState<Store[]>([]);

  useEffect(() => {
    axios
      .get<Store[]>("/store/getStoreList")
      .then((response) => {
        console.log("서버에서 받은 데이터:", response.data); // 서버에서 받은 데이터 확인
        if (Array.isArray(response.data)) {
          setStoreData(response.data);
        } else {
          console.error("예상하지 못한 응답 구조입니다.");
        }
      })
      .catch((error) => {
        console.error("매장데이터 에러: ", error);
      });
  }, []);

  return (
    <div className="main-home-container">
      {/* 이벤트 배너 */}
      <div className="home-slider-container">
        <Slider eventImage={eventImage} />
      </div>
      {/* 신규오픈매장 */}
      <div className="store-slider-container">
        <p>신규 오픈 매장</p>
        <CardSlider storeData={storeData} />
      </div>
      {/* 당일예약 가능한 매장 */}
      <div className="store-slider-container store-gap">
        <p>당일예약 가능한 매장</p>
        <CardSlider storeData={storeData} />
      </div>
      {/* 재예약 많은 매장 */}
      <div className="store-slider-container store-gap">
        <p>재예약 많은 매장</p>
        <CardSlider storeData={storeData} />
      </div>
    </div>
  );
};

export default Home;
