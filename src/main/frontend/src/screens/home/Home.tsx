import React from "react";
import "../../styles/home/Home.css";
import Slider from "../../components/Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

interface Store {
    no: number;
    name: string;
    location: string;
    imageUrl: string;
}

const storeData: Store[] = [
    { no: 1, name: "멍멍 펫미용 1호점", location: "동대문구청 2번출구 도보 3분 거리", imageUrl: "/image/store5-2.jpg" },
    { no: 2, name: "멍멍 펫미용 2호점", location: "강남역 4번출구 도보 5분 거리", imageUrl: "/image/store6-2.jpg" },
    { no: 3, name: "멍멍 펫미용 3호점", location: "홍대입구역 1번출구 도보 7분 거리", imageUrl: "/image/store7-2.jpg" },
    { no: 4, name: "멍멍 펫미용 3호점", location: "홍대입구역 1번출구 도보 7분 거리", imageUrl: "/image/store8-2.jpg" },
    { no: 5, name: "멍멍 펫미용 3호점", location: "홍대입구역 1번출구 도보 7분 거리", imageUrl: "/image/store9-2.jpg" },
    { no: 6, name: "멍멍 펫미용 3호점", location: "홍대입구역 1번출구 도보 7분 거리", imageUrl: "/image/store10-2.jpg" },
    { no: 7, name: "멍멍 펫미용 3호점", location: "홍대입구역 1번출구 도보 7분 거리", imageUrl: "/image/store8-3.jpg" },
    { no: 8, name: "멍멍 펫미용 3호점", location: "홍대입구역 1번출구 도보 7분 거리", imageUrl: "/image/store9-3.jpg" },
];

const Home: React.FC = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    };

    const storeSliderSettings = {
        ...sliderSettings,
        arrows: true,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false,
    };

    return (
        <div className="main-home-container">
            {/* 이벤트 배너 */}
            <div className="home-slider-container">
                <Slider eventImage={eventImage} />
            </div>
            {/* 신규오픈매장 */}
            <div className="store-slider-container">
                <p>신규 오픈 매장</p>
                <Slider />
            </div>
            {/* 당일예약 가능한 매장 */}
            <div className="store-slider-container store-gap">
                <p>당일예약 가능한 매장</p>
                <Slider />
            </div>
            {/* 재예약 많은 매장 */}
            <div className="store-slider-container store-gap">
                <p>재예약 많은 매장</p>
                <Slider />
            </div>
        </div>
    );
};

export default Home;
