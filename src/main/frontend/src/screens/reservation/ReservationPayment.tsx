import React, { useState } from "react";
import "../../styles/reservation/ReservationPayment.css";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const ReservationPayment: React.FC = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const reservationData = location.state; // 넘겨온 예약 정보(날짜,시간,디자이너,메뉴)
  // const userNo = sessionStorage.getItem("userId");
  const [selectedPayMethod, setSelectedPayMethod] = useState<string>(""); // 결제수단

  return (
    <div className="reservation-payment-container">
      <div className="store-title-wrap">
        <IoIosArrowBack onClick={() => navigation(-1)} />
        <p>미용실이름</p>
        <FaRegHeart />
      </div>
      <div className="reservation-payment-wrap">
        <p className="rv-page-title">예약정보</p>
        <div>
          <p>예약날짜 / 시간</p>
          <input
            type="text"
            value={`${reservationData.reservationDate} / ${reservationData.reservationTime}`}
            disabled
          />
        </div>
        <div>
          <p>예약디자이너 / 메뉴</p>
          <input
            type="text"
            value={`${reservationData.designer} / ${reservationData.groomingCategory} (${reservationData.groomingMenu})`}
            disabled
          />
        </div>

        <div className="rv-border-line"></div>

        <div>
          <p>예약자명</p>
          <input type="text" placeholder="김수현" disabled />
        </div>
        <div>
          <p>예약자 연락처</p>
          <input type="text" placeholder="010-2345-2345" disabled />
        </div>
        <div>
          <p>추가요청사항</p>
          <input type="text" placeholder="추가요청사항을 입력해주세요. (선택사항)" />
        </div>

        <div className="rv-border-line"></div>

        <div className="rv-pay-wrap">
          <p className="rv-page-title">예약정보</p>
          <div className="rv-pay-info">
            <p>예약금 안내</p>
            <p>• 모든 시술에 대해 예약금 2만원이 선결제됩니다.</p>
            <p>• 예약 완료 후, 매장에서 최종 확정을 진행해 드립니다.</p>
            <p>• 방문 시, 예약금을 제외한 차액만 결제하시면 됩니다.</p>
          </div>
          <div>
            <p>결제방식</p>
            <div className="rv-pay-method">
               <Button
                 text="신용/체크카드"
                 className={`white-button-s pay-btn ${selectedPayMethod === "신용/체크카드" ? "selected" : ""}`}
                 onClick={() => setSelectedPayMethod("신용/체크카드")}
               />
               <Button
                 text="카카오페이"
                 className={`white-button-s pay-btn ${selectedPayMethod === "카카오페이" ? "selected" : ""}`}
                 onClick={() => setSelectedPayMethod("카카오페이")}
               />
               <Button
                 text="네이버페이"
                 className={`white-button-s pay-btn ${selectedPayMethod === "네이버페이" ? "selected" : ""}`}
                 onClick={() => setSelectedPayMethod("네이버페이")}
               />
            </div>
            <div className="rv-pay-method2">
              <Button text="무통장입금" className="white-button-s pay-btn" />
              <Button text="토스페이" className="white-button-s pay-btn" />
              <Button text="휴대폰 결제" className="white-button-s pay-btn" />
            </div>
          </div>
          <div className="rv-pay-price">
            <p>결제금액</p>
            <p>20,000원</p>
          </div>
        </div>

        <div className="rv-form-button-wrap">
          <Button text="예약하기" onClick={() => navigation("/home")} />
        </div>
      </div>
    </div>
  );
};

export default ReservationPayment;
