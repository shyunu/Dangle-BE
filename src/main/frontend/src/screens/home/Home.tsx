import React from "react";
import "../../styles/home/Home.css";
import Slider from "../../components/Slider";
import CardSlider from "../../components/CardSlider";
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
    no: number; // 매장번호
    name: string; // 매장이름
    ratingAvg: number; // 리뷰평점
    reviewCount: number; // 리뷰개수
    location: string; // 매장위치
    openTime: `${number}:${number}`; // 매장오픈시간
    closeTime: `${number}:${number}`; // 매장마감시간
    dayOff: string; // 매장휴무일
    imageUrl: string; // 매장이미지
}

const storeData: Store[] = [
    {
        no: 1,
        name: "포동이네",
        ratingAvg: 4.5,
        reviewCount: 1898,
        location: "서울 강남구 역삼동",
        openTime: "10:00",
        closeTime: "19:00",
        dayOff: "화,수",
        imageUrl: "/image/store5-2.jpg",
    },
    {
        no: 2,
        name: "포근하개",
        ratingAvg: 4.3,
        reviewCount: 28,
        location: "서울 송파구 가락동",
        openTime: "09:30",
        closeTime: "18:30",
        dayOff: "월",
        imageUrl: "/image/store6-2.jpg",
    },
    {
        no: 3,
        name: "예뿌다개",
        ratingAvg: 4.8,
        reviewCount: 2491,
        location: "서울 마포구 상수동",
        openTime: "08:30",
        closeTime: "17:30",
        dayOff: "수",
        imageUrl: "/image/store7-2.jpg",
    },
    {
        no: 4,
        name: "몽이네",
        ratingAvg: 4.9,
        reviewCount: 8798,
        location: "서울 종로구 청운동",
        openTime: "11:00",
        closeTime: "20:00",
        dayOff: "목",
        imageUrl: "/image/store8-2.jpg",
    },
    {
        no: 5,
        name: "쥬쥬샬롱",
        ratingAvg: 4.3,
        reviewCount: 788,
        location: "서울 동대문구 회기동",
        openTime: "09:00",
        closeTime: "18:00",
        dayOff: "일",
        imageUrl: "/image/store9-2.jpg",
    },
    {
        no: 6,
        name: "푸들푸들",
        ratingAvg: 4.9,
        reviewCount: 2828,
        location: "서울 용산구 이촌동",
        openTime: "10:30",
        closeTime: "19:30",
        dayOff: "월",
        imageUrl: "/image/store10-2.jpg",
    },
    {
        no: 7,
        name: "소중하개",
        ratingAvg: 4.5,
        reviewCount: 1898,
        location: "서울 강북구 미아동",
        openTime: "09:00",
        closeTime: "18:00",
        dayOff: "화,목",
        imageUrl: "/image/store8-3.jpg",
    },
    {
        no: 8,
        name: "애니살롱",
        ratingAvg: 5.0,
        reviewCount: 18278,
        location: "서울 강서구 등촌동",
        openTime: "10:00",
        closeTime: "19:00",
        dayOff: "금,토",
        imageUrl: "/image/store9-3.jpg",
    },
];

const Home: React.FC = () => {
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
