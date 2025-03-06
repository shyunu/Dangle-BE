import React from "react";
import "../styles/components/CardSlider.css";
import Carousel from "react-bootstrap/Carousel";
import { LuMapPin, LuClock4 } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { formatWithCommas } from "../utils/formatWithCommas";
import { IoIosArrowForward } from "react-icons/io";

interface StoreImage {
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

interface SliderProps {
    storeData?: StoreImage[];
}

const Slider: React.FC<SliderProps> = ({ storeData }) => {
    const imageList = storeData || [];

    // 두 개의 이미지를 하나의 그룹으로 묶기
    const groupedImages = [];
    for (let i = 0; i < imageList.length; i += 2) {
        groupedImages.push(imageList.slice(i, i + 2)); // 두 개씩 묶어서 그룹화
    }

    return (
        <div className="card-slider">
            <Carousel interval={null}>
                {/* interval을 null로 설정하여 자동 슬라이드를 방지 */}
                {groupedImages.map((group, index) => (
                    <Carousel.Item key={index}>
                        <div className="card-slider-item">
                            {group.map((store) => (
                                <div className="card" key={store.no}>
                                    <p className="card-title">{store.name}</p>
                                    <div className="card-star-review">
                                        <FaStar />
                                        <p>{store.ratingAvg}</p>
                                        <p>리뷰 {formatWithCommas(store.reviewCount)}개</p>
                                        <IoIosArrowForward />
                                    </div>
                                    <img className="card-img w-100" src={store.imageUrl} alt={`Store Image ${store.no}`} />
                                    <div className="card-store-map">
                                        <LuMapPin />
                                        <p className="card-store-location">{store.location}</p>
                                    </div>
                                    <div className="card-store-time">
                                        <LuClock4 />
                                        <p className="card-store-time-text">
                                            영업시간 : {store.openTime}~{store.closeTime} (매주 {store.dayOff}요일 휴무)
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Slider;
