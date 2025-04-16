import React, { useState } from "react";
import "../../styles/reservation/ReservationForm.css";
import "../../styles/common/Common.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const ReservationForm: React.FC = () => {
  const navigation = useNavigate();
  const [selectedDate, setSelectedDate] = useState<string>(""); // 예약날짜 선택
  const [selectedDesigner, setSelectedDesigner] = useState<string>(""); // 예약디자이너 선택
  const [selectedTime, setSelectedTime] = useState<string>(""); // 예약시간 선택
  const [selectedCategory, setSelectedCategory] = useState<string>(""); // 메뉴카테고리 선택
  const [selectedMenu, setSelectedMenu] = useState<string>(""); // 메뉴명 선택

  // 임시데이터 (디자이너, 시간, 카테고리, 메뉴명)
  const designerList = ["원장 김수현 (경력 8년)", "디자이너 강해린 (경력 3년)", "디자이너 김민지 (경력 2년)"];
  const timeList = [
    "오전 09:00",
    "오전 10:00",
    "오전 11:00",
    "오후 12:00",
    "오후 1:00",
    "오후 2:00",
    "오후 3:00",
    "오후 4:00",
    "오후 5:00",
    "오후 6:00",
  ];
  const categoryList = ["목욕", "위생+목욕", "전체클리핑", "스포팅", "가위컷", "얼굴컷 추가"];
  const menuList = ["기본얼굴컷", "스타일컷", "특수컷"];

  // 예약 다음단계 버튼
  const handleNextStep = () => {
    if (!selectedDate) return alert("날짜를 선택해주세요.");
    if (!selectedDesigner) return alert("디자이너를 선택해주세요.");
    if (!selectedTime) return alert("시간을 선택해주세요.");
    if (!selectedCategory || !selectedMenu) return alert("메뉴를 선택해주세요.");

    const reservationData = {
      reservationDate: selectedDate,
      designer: selectedDesigner,
      reservationTime: selectedTime,
      groomingCategory: selectedCategory,
      groomingMenu: selectedMenu,
    };

    navigation("/reservationPayment", { state: reservationData });
  };

  return (
    <div className="page-content">
      <div className="page-title-bar">
        <IoIosArrowBack onClick={() => navigation(-1)} />
        <p>예약하기</p>
      </div>
      <div className="reservation-form-wrap">
        <p className="rv-page-title">댕글댕글 1호점</p>
        <div className="rv-date-wrap">
          <p>날짜 선택</p>
          <input
            type="date"
            placeholder="날짜를 선택해주세요."
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
        <div className="rv-designer-time-wrap">
          <div className="rv-designer-wrap">
            <p>디자이너 선택</p>
            <div className="rv-designer-box">
              {designerList.map((designer, idx) => (
                <div
                  key={idx}
                  className={`${selectedDesigner === designer ? "selected" : ""}`}
                  onClick={() => setSelectedDesigner(designer)}
                >
                  {/* {selectedDesigner === designer ? <RiCheckboxCircleLine /> : <RiCheckboxBlankCircleLine />} */}
                  {designer}
                </div>
              ))}
            </div>
          </div>
          <div className="rv-time-wrap">
            <p>시간 선택</p>
            <div className="rv-time-box">
              <input type="text" placeholder="시간을 선택해주세요." value={selectedTime} readOnly />
              <div>
                {timeList.map((time, idx) => (
                  <div
                    key={idx}
                    className={`rv-time-item ${selectedTime === time ? "selected" : ""}`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="rv-menu-wrap">
          <p>메뉴 선택</p>
          <div className="rv-category-menu-wrap">
            <div className="rv-menu-category">
              <p>카테고리</p>
              <div></div>
              <div className="rv-category-list">
                {categoryList.map((category, idx) => (
                  <div
                    key={idx}
                    className={`rv-category ${selectedCategory === category ? "selected" : ""}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </div>
                ))}
              </div>
            </div>
            <div className="rv-menu-item">
              {menuList.map((menu, idx) => (
                <div
                  key={idx}
                  className={`${selectedMenu === menu ? "selected" : ""}`}
                  onClick={() => setSelectedMenu(menu)}
                >
                  {menu}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="rv-form-button-wrap">
        <Button text="다음" onClick={handleNextStep} />
      </div>
    </div>
  );
};

export default ReservationForm;
