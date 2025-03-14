import React, {useEffect, useState} from "react";
import "../../styles/store/StoreInfo.css";
import Slider from "../../components/Slider";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import Button from "../../components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import {Store} from "../../types/store";
import {Designer} from "../../types/designer";
import {GroomingMenu} from "../../types/groomingMenu";
import {renderStars} from "../../utils/renderStars";
import {Review} from "../../types/review";
import axios from "axios";
import { useRef } from "react";
import {formatDate} from "../../utils/formatDate";

interface StoreImage {
    no: number;
    imageUrl: string;
}

const imageData: StoreImage[] = [
    { no: 1, imageUrl: "/image/store6-1.jpg" },
    { no: 2, imageUrl: "/image/store6-2.jpg" },
    { no: 3, imageUrl: "/image/store6-3.jpg" },
];

const StoreInfo: React.FC = () => {
    const location = useLocation();
    const navigation = useNavigate();
    const store = location.state?.store as Store;
    const storeNo = store?.storeNo;
    const [selectedTab, setSelectedTab] = useState<string>("홈");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedDesigner, setSelectedDesigner] = useState<number | null>(null);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);

        // 선택된 버튼으로 가로 스크롤 이동
        const selectedButton = document.getElementById(`category-${category}`);
        selectedButton?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    };

    const menuRef = useRef<HTMLDivElement | null>(null);

    const handleDragScroll = (event: React.MouseEvent) => {
        if (!menuRef.current) return;
        let startX = event.pageX;
        let scrollLeft = menuRef.current.scrollLeft;

        const onMouseMove = (moveEvent: MouseEvent) => {
            const walk = (moveEvent.pageX - startX) * 2; // 드래그 속도 조절
            menuRef.current!.scrollLeft = scrollLeft - walk;
        };

        const onMouseUp = () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
    };

    // 미용메뉴 list
    const [groomingData, setGroomingData] = useState<GroomingMenu[]>([]);
    useEffect(() => {
        axios
            .get<GroomingMenu[]>("/store/getGroomingListByStoreNo", { params: { storeNo }})
            .then((response) => {
                if (Array.isArray(response.data)) {
                    setGroomingData(response.data);
                } else {
                    console.error("예상하지 못한 응답 구조입니다.");
                }
            })
            .catch((error) => {
                console.error("디자이너 목록 조회 에러: ", error);
            });
    }, []);

    const categories = Array.from(new Set(groomingData.map((item) => item.categoryName)));

    const filteredGroomingData = selectedCategory
        ? groomingData.filter((item) => item.categoryName === selectedCategory)
        : groomingData;


    const selectDesigner = (no: number) => {
        setSelectedDesigner(selectedDesigner === no ? null : no);
    };

    // 디자이너 list
    const [designerData, setDesignerData] = useState<Designer[]>([]);
    useEffect(() => {
        axios
            .get<Designer[]>("/store/getDesignerListByStoreNo", { params: { storeNo }})
            .then((response) => {
                console.log("디자이너 데이터:", response.data);
                if (Array.isArray(response.data)) {
                    setDesignerData(response.data);
                } else {
                    console.error("예상하지 못한 응답 구조입니다.");
                }
            })
            .catch((error) => {
                console.error("디자이너 목록 조회 에러: ", error);
            });
    }, []);

    // 리뷰 list
    const [reviewData, setReviewData] = useState<Review[]>([]);
    useEffect(() => {
        axios
            .get<Review[]>("/store/getReviewListByStoreNo", { params: { storeNo } })
            .then((response) => {
                if (Array.isArray(response.data)) {
                    setReviewData(response.data);
                } else {
                    console.error("예상하지 못한 응답 구조입니다.");
                }
            })
            .catch((error) => {
                console.error("리뷰 목록 조회 에러: ", error);
            });
    }, []);

    return (
        <div className="store-info-container">
            <div className="store-title-wrap">
                <IoIosArrowBack onClick={() => navigation(-1)} />
                <p>{store.storeName}</p>
                <FaRegHeart />
            </div>

            {/* image */}
            <div className="store-image-wrap">
                <Slider imageData={imageData} />
            </div>

            {/* menu tab */}
            <div className="targetContainer">
                <button className={selectedTab === "홈" ? "active" : ""} onClick={() => setSelectedTab("홈")}>
                    홈
                </button>
                <button className={selectedTab === "메뉴" ? "active" : ""} onClick={() => setSelectedTab("메뉴")}>
                    메뉴
                </button>
                <button className={selectedTab === "디자이너" ? "active" : ""} onClick={() => setSelectedTab("디자이너")}>
                    디자이너
                </button>
                <button className={selectedTab === "리뷰" ? "active" : ""} onClick={() => setSelectedTab("리뷰")}>
                    리뷰
                </button>
            </div>

            {/* 타겟에 따른 화면 구성 */}
            <div className="store-about-wrap">
                {selectedTab === "홈" ? (
                    <>
                        <div className="about-home">
                            <p className="about-title">매장 소개</p>
                            <p>{store.storeAboutComment}</p>
                        </div>
                    </>
                ) : selectedTab === "메뉴" ? (
                    <>
                        <div className="about-menu">
                            <p className="about-title">미용 메뉴 & 가격표</p>
                            {/* 메뉴 필터 버튼 */}
                            <div className="menu-tab-wrap" ref={menuRef} onMouseDown={handleDragScroll}>
                                <div className="menu-tab-container">
                                    <button
                                        className={`menu-tab ${selectedCategory === null ? "active" : ""}`}
                                        onClick={() => setSelectedCategory(null)}
                                    >
                                        전체
                                    </button>
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            id={`category-${category}`} // 각 버튼에 ID 추가
                                            className={`menu-tab ${selectedCategory === category ? "active" : ""}`}
                                            onClick={() => handleCategoryClick(category)}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* 필터링된 메뉴 리스트 */}
                            <div>
                                {filteredGroomingData.map((grooming) => (
                                    <div key={grooming.groomingNo} className="menu-price-wrap">
                                        <p>{grooming.groomingName}</p>
                                        <p>{grooming.groomingPrice.toLocaleString()}원</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                ) : selectedTab === "디자이너" ? (
                    <>
                        <div className="about-designer">
                            <p className="about-title">디자이너 소개</p>
                            <div className="designer-border"></div>
                            <div className="designer-wrap">
                                {designerData && designerData.length > 0 ? (
                                    designerData.map((designer) => (
                                        <div key={designer.designerNo} className="designer-box" onClick={() => selectDesigner(designer.designerNo)}>
                                            <div className="designer-check-wrap">
                                                {selectedDesigner === designer.designerNo ? <FaRegCheckCircle /> : <FaRegCircle />}
                                                <p>
                                                    {designer.designerRole} {designer.designerName}
                                                </p>
                                                <p>(경력 {designer.designerExperience})</p>
                                            </div>
                                            <p className="designer-info">
                                                {designer.designerInfo}
                                            </p>
                                            <div className="designer-border"></div>
                                        </div>
                                    ))
                                ) : (
                                    <p>디자이너 정보가 없습니다.</p>
                                )}
                            </div>
                        </div>
                    </>
                ) : selectedTab === "리뷰" ? (
                    <>
                        <div className="about-review">
                            <p className="about-title">고객 후기</p>
                            <div className="review-container">
                                {reviewData.map((review) => (
                                    <div key={review.reviewNo} className="review-box-wrap">
                                        <div className="review-date-star">
                                            <p>
                                                {formatDate(review.reviewDate)}
                                            </p>
                                            <div className="review-rating">{renderStars(review.reviewScore)}</div>
                                        </div>
                                        <p className="review-id">
                                            {review.userId}님 ({review.petName} 보호자님)
                                        </p>
                                        <p className="review-designer-grooming">
                                            {review.designerRole} {review.designerName} | {review.categoryName} ({review.groomingName})
                                        </p>
                                        <img src={review.imageUrl} />
                                        <p className="review-content">{review.reviewContent}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="about-menu">
                            <p className="about-title">매장 소개</p>
                        </div>
                    </>
                )}
            </div>

            {/* reservation button */}
            <div className="reservation-btn">
                <Button text="예약하기" onClick={() => navigation("/reservationForm")} />
            </div>
        </div>
    );
};

export default StoreInfo;
