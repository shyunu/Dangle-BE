import React from "react";
import "../../styles/store/SearchStore.css";
import Button from "../../components/Button";
import { LuMapPin, LuClock4 } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import {formatWithCommas} from "../../utils/formatWithCommas";
import {CitySelect, DistrictSelect, TimeSelect} from "../../utils/SelectBox";

export interface Store {
    no: number;
    name: string;
    rating: number;
    reviewCount: number;
    location: string;
    businessHours: string;
    imageUrl: string[];
}

const storeData: Store[] = [
    {
        no: 1,
        name: "푸들푸들",
        location: "동대문구청 2번출구 도보 3분 거리",
        rating: 4.5,
        reviewCount: 1898,
        businessHours: "09:00~18:00",
        imageUrl: ["/image/store1-1.jpg", "/image/store1-2.jpg"],
    },
    {
        no: 2,
        name: "애니살롱",
        rating: 4.3,
        reviewCount: 566,
        location: "신설동역 6번출구 도보 2분 거리",
        businessHours: "09:00~18:00",
        imageUrl: ["/image/store2-1.jpg", "/image/store2-2.jpg"],
    },
];

const SearchStore: React.FC = () => {
    const navigation = useNavigate();
    const handleStoreClick = (store: Store) => {
        navigation("/storeInfo", { state: { store } });
    };
    return (
        <div className="search-store-container">
            {/* 선택 및 검색란 */}
            <div className="search-detail-container">
                <p>매장 검색</p>
                <div className="search-store-option-wrap">
                    <CitySelect />
                    <DistrictSelect />
                    <TimeSelect />
                </div>
                <div className="search-store-input-wrap">
                    <input placeholder="매장명을 입력해주세요." />
                    <Button text="검색" className="white-button-s search-store-btn" />
                </div>
            </div>

            {/* 경계선 */}
            <div className="search-store-border"></div>

            {/* 필터 */}
            <div className="search-store-filter">
                <select>
                    <option>기본정렬순</option>
                </select>
            </div>

            {/* 상점박스 */}
            <div className="store-box-container">
                {storeData.map((store) => (
                    <div key={store.no} className="store-box-wrap" onClick={() => handleStoreClick(store)}>
                        <p className="store-name">{store.name}</p>
                        <div className="store-review-icon">
                            <img src="./image/star.jpg" />
                            <p>{store.rating}</p>
                            <p>리뷰 {formatWithCommas(store.reviewCount)}개</p>
                        </div>
                        <div className="store-images">
                            {store.imageUrl.map((url, index) => (
                                <img key={index} src={url} alt={`${store.name} 이미지`} />
                            ))}
                        </div>
                        <div className="store-info-icon">
                            <LuMapPin />
                            <p>{store.location}</p>
                        </div>
                        <div className="store-info-icon">
                            <LuClock4 />
                            <p>영업시간:{store.businessHours}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchStore;
