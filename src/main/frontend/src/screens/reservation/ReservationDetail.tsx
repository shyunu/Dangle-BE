import React, { useEffect, useState } from "react";
import "../../styles/reservation/ReservationDetail.css";
import "../../styles/common/Common.css";
import { IoIosArrowBack } from "react-icons/io";
import { Reservation } from "../../types/reservation";
import { useLocation, useNavigate } from "react-router-dom";
import { FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6";
import { BiHome } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import axios from "axios";
import { formatDate } from "../../utils/formatDate";
import { formatWithCommas } from "../../utils/formatWithCommas";
import { PiSpinnerGap } from "react-icons/pi";

const ReservationDetail: React.FC = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const reservation = location.state?.reservation as Reservation;
  const userId = sessionStorage.getItem("userId");

  // 예약내역 list
  const [reservationList, setReservationList] = useState<Reservation[]>([]);
  useEffect(() => {
    axios
      .get<Reservation[]>("/reservation/list", { params: { userId } })
      .then((response) => {
        if (Array.isArray(response.data)) {
          setReservationList(response.data);
        } else {
          console.error("예상치 못한 응답 구조입니다(예약내역)");
        }
      })
      .catch((error) => {
        console.error("예약내역 조회 에러: ", error);
      });
  }, []);

  return (
    <div className="page-content">
      <div className="page-title-bar">
        <IoIosArrowBack onClick={() => navigation(-1)} />
        <p>예약 상세</p>
      </div>
      <div className="detail-box">
        <div className="reservation-name-status">
          <div className="rv-store-about">
            <p>{reservation.storeName}</p>
            <BiHome />
            <FiPhone />
          </div>

          <div className="rv-detail-status">
            {reservation.reservationStatusName === "waiting_for_reservation" ? (
              <PiSpinnerGap />
            ) : reservation.reservationStatusName === "waiting_for_grooming" ? (
              <p>D-{reservation.reservationDate}</p>
            ) : reservation.reservationStatusName === "canceled" ? (
              <FaRegCircleXmark />
            ) : reservation.reservationStatusName === "completed" ? (
              <FaRegCircleCheck />
            ) : (
              <></>
            )}
          </div>
        </div>

        {/* 예약정보 */}
        <div className="detail-info-wrap">
          <p>예약정보</p>
          <div className="detail-border"></div>
          <div className="rv-info-box">
            <p>예약일정</p>
            <p>
              {formatDate(reservation.reservationDate)} / {reservation.reservationTime}
            </p>
          </div>
          <div className="rv-info-box">
            <p>예약번호</p>
            <p>{reservation.reservationNo}</p>
          </div>
          <div className="rv-info-box">
            <p>예약메뉴</p>
            <p>
              {reservation.categoryName} ({reservation.groomingName})
            </p>
          </div>
          <div className="rv-info-box">
            <p>시술담당</p>
            <p>
              {reservation.designerName} {reservation.designerRole}
            </p>
          </div>
          <div className="rv-info-box">
            <p>예약자</p>
            <p>{reservation.userName}</p>
          </div>
          <div className="rv-info-box">
            <p>연락처</p>
            <p>{reservation.userPhone}</p>
          </div>
          <div className="rv-info-box">
            <p>반려동물</p>
            <p>{reservation.petName}</p>
          </div>
          <div className="rv-info-box">
            <p>요청사항</p>
            <p>{reservation.reservationRequest}</p>
          </div>
        </div>

        {/* 결제정보 */}
        <div className="detail-pay-wrap">
          <p>결제정보</p>
          <div className="detail-border"></div>
          <div className="rv-info-box">
            <p>메뉴가격</p>
            <p>{formatWithCommas(reservation.groomingPrice)}원</p>
          </div>
          <div className="rv-info-box">
            <p>총 결제 금액</p>
            <p>{formatWithCommas(reservation.groomingPrice)}원</p>
            {/*<p>{formatWithCommas(reservation.paymentAmount)}원</p>*/}
          </div>
          <div className="rv-info-box">
            <p>결제방식</p>
            <p>{reservation.paymentMethod}</p>
          </div>
        </div>

        {/* 취소/환불 정보 */}
        {/*{reservation.reservationStatusName === "취소" ? (*/}
        {/*    <div className="detail-cancel-wrap">*/}
        {/*        <p>취소/환불 정보</p>*/}
        {/*        <div className="detail-border"></div>*/}
        {/*        <div className="rv-info-box">*/}
        {/*            <p>취소일시</p>*/}
        {/*            <p>*/}
        {/*                {reservationList[reservation.reservationNo - 1].cancelDate*/}
        {/*                    ?.toLocaleDateString("ko-KR", {*/}
        {/*                        year: "numeric",*/}
        {/*                        month: "2-digit",*/}
        {/*                        day: "2-digit",*/}
        {/*                    })*/}
        {/*                    .replace(/\.$/, "")}*/}
        {/*                (*/}
        {/*                {reservationList[reservation.reservationNo - 1].cancelDate?.toLocaleDateString("ko-KR", {*/}
        {/*                    weekday: "short",*/}
        {/*                })}*/}
        {/*                ) {reservationList[reservation.reservationNo - 1].cancelDate?.toLocaleTimeString()}*/}
        {/*            </p>*/}
        {/*        </div>{" "}*/}
        {/*        <div className="rv-info-box">*/}
        {/*            <p>취소수수료</p>*/}
        {/*            <p>{reservationList[reservation.reservationNo - 1].cancelCharge}원</p>*/}
        {/*        </div>*/}
        {/*        <div className="rv-info-box">*/}
        {/*            <p>총 취소금액</p>*/}
        {/*            <p>{reservationList[reservation.reservationNo - 1].menuPrice.toLocaleString()}원</p>*/}
        {/*        </div>*/}
        {/*        <div className="rv-cancel-info">*/}
        {/*            <p>• 신용카드 결제 시, 예약 취소 시 자동으로 카드 승인취소 처리됩니다.</p>*/}
        {/*            <p>• 카드사와 VAN사의 확인 절차로 인해 승인취소까지 3~5일(영업일 기준) 소요될 수 있습니다.</p>*/}
        {/*            <p>• 카드사별로 처리 기간이 다를 수 있으므로, 정확한 확인은 카드사로 문의 부탁드립니다.</p>*/}
        {/*            <p>• 체크카드 결제 시, 환불 금액은 회원님의 통장으로 입금됩니다.</p>*/}
        {/*            <p>• 환불 완료까지 최대 5일(영업일 기준) 소요될 수 있습니다.</p>*/}
        {/*            <p>• 카드사별로 환불 기간이 다를 수 있으니, 자세한 사항은 카드사로 문의 바랍니다.</p>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*) : null}*/}
      </div>
    </div>
  );
};

export default ReservationDetail;
