import React, { useState } from "react";
import "../../styles/store/StoreInfo.css";
import Slider from "../../components/Slider";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegCheckCircle, FaRegCircle, FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";
import Button from "../../components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import {Store} from "../../types/store";

interface StoreImage {
    no: number;
    imageUrl: string;
}

const imageData: StoreImage[] = [
    { no: 1, imageUrl: "/image/store6-1.jpg" },
    { no: 2, imageUrl: "/image/store6-2.jpg" },
    { no: 3, imageUrl: "/image/store6-3.jpg" },
];

interface GroomingMenu {
    no: number;
    name: string;
    category: "기본케어" | "커트" | "스파/케어";
    price: number;
}

const groomingMenu: GroomingMenu[] = [
    { no: 1, name: "기본 목욕 - 소형견 (~5kg)", category: "기본케어", price: 30000 },
    { no: 2, name: "기본 목욕 - 중형견 (~10kg)", category: "기본케어", price: 30000 },
    { no: 3, name: "기본 목욕 - 대형견 (~10kg)", category: "기본케어", price: 30000 },
    { no: 4, name: "전체 미용", category: "커트", price: 50000 },
    { no: 5, name: "스페셜 스파", category: "스파/케어", price: 70000 },
    { no: 6, name: "부분 미용", category: "커트", price: 40000 },
];

interface Designer {
    no: number;
    role: string; //직책
    name: string; //이름
    info: string; //소개글
    experience: string; //경력
}

const designerList: Designer[] = [
    { no: 1, role: "원장", name: "김수현", info: "강아지마다 개성 있는 스타일을 찾아드려요!", experience: "경력 10년" },
    {
        no: 2,
        role: "디자이너",
        name: "강해린",
        info: "편안한 분위기에서 아이들이 스트레스 없이 예뻐질 수 있도록 도와드려요!",
        experience: "경력 5년",
    },
];

interface Review {
    no: number;
    id: string; // 회원아이디
    pet: string; // 반려동물 이름
    date: Date; // 리뷰등록일
    rating: number; // 별점
    designerRole: string; // 디자이너 직책
    designerName: string; // 디자이너 이름
    groomingName: string; // 미용시술명
    imageUrl: string; // 이미지 경로
    content: string; // 리뷰 내용
}

const reviewList: Review[] = [
    {
        no: 1,
        id: "shyunu",
        pet: "별이",
        date: new Date(2025, 1, 7), // 2025년 2월 7일 (월은 0부터 시작)
        rating: 4.5,
        designerRole: "원장",
        designerName: "김수현",
        groomingName: "기본 가위컷 3mm",
        imageUrl: "/image/review1.jpg",
        content: "별이가 너무 예뻐졌어요! 디자이너님 최고예요. 다음에도 또 방문할게요!",
    },
    {
        no: 2,
        id: "yuna92",
        pet: "초코",
        date: new Date(2025, 1, 5),
        rating: 3.5,
        designerRole: "디자이너",
        designerName: "강해린",
        groomingName: "피부 각질 스파관리",
        imageUrl: "/image/review2.jpg",
        content: "초코가 스트레스 없이 잘 미용받았어요! 친절한 서비스 감사합니다 😊",
    },
    {
        no: 3,
        id: "happyDog33",
        pet: "몽이",
        date: new Date(2025, 1, 3),
        rating: 4.5,
        designerRole: "원장",
        designerName: "김수현",
        groomingName: "포메 곰돌이컷",
        imageUrl: "/image/review3.jpg",
        content: "몽이가 너무 귀엽게 변했어요! 추천합니다!",
    },
];

const StoreInfo: React.FC = () => {
    const location = useLocation();
    const navigation = useNavigate();
    const store = location.state?.store as Store;
    const [selectedTab, setSelectedTab] = useState<string>("홈");
    const [selectedCategory, setSelectedCategory] = useState("전체");
    const [selectedDesigner, setSelectedDesigner] = useState<number | null>(null);

    const filteredMenu =
        selectedCategory === "전체" ? groomingMenu : groomingMenu.filter((item) => item.category === selectedCategory);

    const selectDesigner = (no: number) => {
        setSelectedDesigner(selectedDesigner === no ? null : no);
    };

    // 리뷰 별점
    const renderStars = (rating: number) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0; //반쪽별이 필요한지 유무판단

        // 기본 별
        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={i} />);
        }
        // 반쪽 별
        if (hasHalfStar) {
            stars.push(<FaStarHalf key={fullStars} />);
        }
        //빈자리 빈 별로 채우기
        const emptyStars = 5 - stars.length;
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<FaRegStar key={fullStars + i} style={{ color: "#ffb703" }} />);
        }

        return stars;
    };

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
                            <p>
                                안녕하세요! 댕글댕글입니다! 💛 <br />
                                우리 아이들의 예쁨을 한층 더 업그레이드해 줄 프리미엄 반려견 미용샵을 소개합니다! <br />
                                <br />
                                🔹 위치: 서울 강남구 댕댕로 101 (댕글댕글 반려동물타운 1층) <br />
                                🔹 운영 시간: 매일 09:00 ~ 16:00 (매주 월요일 휴무) <br />
                                🔹 연락처: 02-1234-5678 <br />
                                🔹 주차공간 매장 앞 2대 보유 <br />
                                <br />
                                💎 댕글댕글만의 특별함! <br />✅ 1:1 맞춤 미용 서비스 – 강아지의 얼굴형과 털 상태에 따라 최적의
                                스타일링! <br />✅ 천연 미용 제품 사용 – 피부에 자극 없는 저자극 프리미엄 제품 사용! <br />✅ 반려견
                                전용 스파 서비스 – 스트레스 해소를 위한 힐링 스파까지! <br />✅ 미용 후 사진 서비스 제공 – 예쁘게 변신한
                                모습, 고퀄리티 사진으로 남겨드려요! <br />
                                <br />
                                🐶💖 우리 아이를 위한 최고의 스타일링, 댕글댕글에서 경험하세요! <br />
                                댕글댕글 앱에서 지금 바로 예약하세요! 🚀
                            </p>
                        </div>
                    </>
                ) : selectedTab === "메뉴" ? (
                    <>
                        <div className="about-menu">
                            <p className="about-title">미용 메뉴 & 가격표</p>
                            {/* 메뉴 필터 버튼 */}
                            <div className="menu-tab-wrap">
                                {["전체", "기본케어", "커트", "스파/케어"].map((tab) => (
                                    <button
                                        key={tab}
                                        className={`menu-tab ${selectedCategory === tab ? "active" : ""}`}
                                        onClick={() => setSelectedCategory(tab)}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                            {/* 메뉴 리스트 */}
                            <div>
                                {filteredMenu.map((item) => (
                                    <div key={item.no} className="menu-price-wrap">
                                        <p>{item.name}</p>
                                        <p>{item.price.toLocaleString()}원</p>
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
                                {designerList.map((designer) => (
                                    <div key={designer.no} className="designer-box" onClick={() => selectDesigner(designer.no)}>
                                        <div className="designer-check-wrap">
                                            {selectedDesigner === designer.no ? <FaRegCheckCircle /> : <FaRegCircle />}
                                            <p>
                                                {designer.role} {designer.name}
                                            </p>
                                        </div>
                                        <p className="designer-info">
                                            {designer.info} ({designer.experience})
                                        </p>
                                        <div className="designer-border"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                ) : selectedTab === "리뷰" ? (
                    <>
                        <div className="about-review">
                            <p className="about-title">고객 후기</p>
                            <div className="review-container">
                                {reviewList.map((review) => (
                                    <div key={review.no} className="review-box-wrap">
                                        <div className="review-date-star">
                                            <p>
                                                {review.date
                                                    .toLocaleDateString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" })
                                                    .replace(/\.$/, "")}
                                            </p>
                                            <div className="review-rating">{renderStars(review.rating)}</div>
                                        </div>
                                        <p className="review-id">
                                            {review.id}님 ({review.pet} 보호자님)
                                        </p>
                                        <p className="review-designer-grooming">
                                            {review.designerRole} {review.designerName} | {review.groomingName}
                                        </p>
                                        <img src={review.imageUrl} />
                                        <p className="review-content">{review.content}</p>
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
