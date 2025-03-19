import React, {useEffect, useState} from "react";
import "../../styles/store/SearchStore.css";
import Button from "../../components/Button";
import { LuMapPin, LuClock4 } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import {formatWithCommas} from "../../utils/formatWithCommas";
import {CitySelect, DistrictSelect, TimeSelect, FilterSelect} from "../../components/CustomDropdown";
import {Store} from "../../types/store";
import axios from "axios";
import {formatHourMinute} from "../../utils/formatHourMinute";
import {formatReviewScore} from "../../utils/formatReviewScore";


const SearchStore: React.FC = () => {
    const navigation = useNavigate();
    const handleStoreClick = (store: Store) => {
        navigation("/storeInfo", { state: { store } });
    };

    // 매장데이터
    const [storeData, setStoreData] = useState<Store[]>([]);
    useEffect(() => {
        axios
            .get<Store[]>("/store/getStoreList")
            .then((response) => {
                console.log("매장list 데이터:", response.data); // 서버에서 받은 데이터 확인
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

    // 필터링 조건기준
    const [searchTerm, setSearchTerm] = useState<string>(""); // 검색 매장명
    const [selectedCity, setSelectedCity] = useState<string>(""); // 시/도
    const [selectedDistrict, setSelectedDistrict] = useState<string>(""); // 구/군

    // 검색버튼
    const handleReset = () => {
        setSearchTerm("");
        setSelectedCity("");
        setSelectedDistrict("");
    }

    // 검색 필터링
    const filteredStores = storeData.filter((store) => {
        const matchSearchTerm = store.storeName.toLowerCase().includes(searchTerm.toLowerCase());
        const matchCity = selectedCity ? store.storeAddress.includes(selectedCity) : true;
        const matchDistrict = selectedDistrict ? store.storeAddress.includes(selectedDistrict) : true;
        return matchSearchTerm && matchCity && matchDistrict;
    });

    return (
        <div className="search-store-container">
            {/* 선택 및 검색란 */}
            <div className="search-detail-container">
                <p>매장 검색</p>
                <div className="search-store-option-wrap">
                    <CitySelect value={selectedCity} onChange={setSelectedCity} />
                    <DistrictSelect value={selectedDistrict} onChange={setSelectedDistrict} />
                    <TimeSelect />
                </div>
                <div className="search-store-input-wrap">
                    <input type="text" placeholder="매장명을 입력해주세요." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <Button text="전체조회" className="white-button-s search-store-btn" onClick={handleReset} />
                </div>
            </div>

            {/* 경계선 */}
            <div className="search-store-border"></div>

            {/* 필터 */}
            <div className="search-store-filter">
                <FilterSelect />
            </div>

            {/* 상점박스 */}
            <div className="store-box-container">
                {filteredStores.length > 0 ? (
                    filteredStores.map((store) => (
                        <div key={store.storeNo} className="store-box-wrap" onClick={() => handleStoreClick(store)}>
                            <p className="store-name">{store.storeName}</p>
                            <div className="store-review-icon">
                                <img src="./image/star.jpg" />
                                <p>{formatReviewScore(store.reviewScoreAvg)}</p>
                                <p>리뷰 {formatWithCommas(store.reviewCount)}개</p>
                            </div>
                            <div className="store-images">
                                {/*{store.imageUrl.map((url, index) => (*/}
                                {/*    <img key={index} src={url} alt={`${store.storeName} 이미지`} />*/}
                                {/*))}*/}
                            </div>
                            <div className="store-info-icon">
                                <LuMapPin />
                                <p>{store.storeAddress} {store.storeAddressDetail}</p>
                            </div>
                            <div className="store-info-icon">
                                <LuClock4 />
                                <p>영업시간 : {formatHourMinute(store.storeOpenTime)}~{formatHourMinute(store.storeCloseTime)} ({store.storeDayoff} 휴무)</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>해당하는 매장이 없습니다.</p>
                )}
            </div>
        </div>
    );
};

export default SearchStore;
