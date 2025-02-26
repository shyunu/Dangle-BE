import React from "react";
import "../../styles/store/SearchStore.css";
import Button from "../../components/Button";
import { LuMapPin, LuClock4 } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

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
                    <select>
                        <option>시/도 선택</option>
                        <option value="서울특별시">서울특별시</option>
                        <option value="부산광역시">부산광역시</option>
                        <option value="대구광역시">대구광역시</option>
                        <option value="인천광역시">인천광역시</option>
                        <option value="광주광역시">광주광역시</option>
                        <option value="대전광역시">대전광역시</option>
                        <option value="울산광역시">울산광역시</option>
                        <option value="세종특별자치시">세종특별자치시</option>
                        <option value="경기도">경기도</option>
                        <option value="강원특별자치도">강원특별자치도</option>
                        <option value="충청북도">충청북도</option>
                        <option value="충청남도">충청남도</option>
                        <option value="전라북도">전라북도</option>
                        <option value="전라남도">전라남도</option>
                        <option value="경상북도">경상북도</option>
                        <option value="경상남도">경상남도</option>
                        <option value="제주특별자치도">제주특별자치도</option>
                    </select>
                    <select>
                        <option>구/군 선택</option>
                        <option value="강남구">강남구</option>
                        <option value="강동구">강동구</option>
                        <option value="강북구">강북구</option>
                        <option value="강서구">강서구</option>
                        <option value="관악구">관악구</option>
                        <option value="광진구">광진구</option>
                        <option value="구로구">구로구</option>
                        <option value="금천구">금천구</option>
                        <option value="노원구">노원구</option>
                        <option value="도봉구">도봉구</option>
                        <option value="동대문구">동대문구</option>
                        <option value="동작구">동작구</option>
                        <option value="마포구">마포구</option>
                        <option value="서대문구">서대문구</option>
                        <option value="서초구">서초구</option>
                        <option value="성동구">성동구</option>
                        <option value="성북구">성북구</option>
                        <option value="송파구">송파구</option>
                        <option value="양천구">양천구</option>
                        <option value="영등포구">영등포구</option>
                        <option value="용산구">용산구</option>
                        <option value="은평구">은평구</option>
                        <option value="종로구">종로구</option>
                        <option value="중구">중구</option>
                        <option value="중랑구">중랑구</option>
                    </select>
                    <select>
                        <option>예약 시간 선택</option>
                        <option>오전 09:00</option>
                        <option>오전 10:00</option>
                        <option>오전 11:00</option>
                        <option>오후 12:00</option>
                        <option>오후 01:00</option>
                        <option>오후 02:00</option>
                        <option>오후 03:00</option>
                        <option>오후 04:00</option>
                        <option>오후 05:00</option>
                    </select>
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
                            <p>리뷰 {store.reviewCount}개</p>
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
