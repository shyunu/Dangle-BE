import React from "react";
import "../styles/components/CardSlider.css";
import Carousel from "react-bootstrap/Carousel";
import { LuMapPin, LuClock4 } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { formatWithCommas } from "../utils/formatWithCommas";
import { IoIosArrowForward } from "react-icons/io";
import {Store} from "../types/store";
import {formatHourMinute} from "../utils/formatHourMinute";
import {formatReviewScore} from "../utils/formatReviewScore";

interface SliderProps {
    storeData: Store[];
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
                                <div className="card" key={store.storeNo}>
                                    <p className="card-title">{store.storeName}</p>
                                    <div className="card-star-review">
                                        <FaStar />
                                        <p>{formatReviewScore(store.reviewScoreAvg)}</p>
                                        <p>리뷰 {formatWithCommas(store.reviewCount)}개</p>
                                        <IoIosArrowForward />
                                    </div>
                                    <img className="card-img w-100" src={store.imageUrl} alt={`Store Image ${store.storeNo}`} />
                                    <div className="card-store-map">
                                        <LuMapPin />
                                        <p className="card-store-location">{store.storeAddress} {store.storeAddressDetail}</p>
                                    </div>
                                    <div className="card-store-time">
                                        <LuClock4 />
                                        <p className="card-store-time-text">
                                            영업시간 : {formatHourMinute(store.storeOpenTime)}~{formatHourMinute(store.storeCloseTime)} ({store.storeDayoff} 휴무)
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
