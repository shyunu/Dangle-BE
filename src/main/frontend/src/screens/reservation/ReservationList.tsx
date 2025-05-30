import React, { useEffect, useState } from "react";
import "../../styles/reservation/ReservationList.css";
import "../../styles/common/Common.css";
import { FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";
import { FilterReservationSelect } from "../../components/CustomDropdown";
import { Reservation } from "../../types/reservation";
import axios from "axios";
import { PiSpinnerGap } from "react-icons/pi";

const ReservationList: React.FC = () => {
  const navigation = useNavigate();
  const [userNo, setUserNo] = useState<number | null>(0);
  const [selectedSort, setSelectedSort] = useState<string>("기본정렬순"); // 예약내역 정렬기준

  useEffect(() => {
    const loggedUserNo = sessionStorage.getItem("userNo");
    setUserNo(loggedUserNo !== null ? Number(loggedUserNo) : null);
    console.log(userNo);
  }, []);

  // 예약내역 list
  const [reservationList, setReservationList] = useState<Reservation[]>([]);
  useEffect(() => {
    if (userNo) {
      axios
        .get<Reservation[]>("/reservation/list", { params: { userNo } })
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
    }
  }, [userNo]);

  // 상세보기 버튼
  const handleReservationClick = (reservation: Reservation) => {
    navigation("/reservationDetail", { state: { reservation } });
  };

  const sortedReservations = [...reservationList]
    .filter((reservationList) => {
      switch (selectedSort) {
        case "예약대기":
          return reservationList.reservationStatusName === "waiting_for_reservation";
        case "시술대기":
          return reservationList.reservationStatusName === "waiting_for_grooming";
        case "예약취소":
          return reservationList.reservationStatusName === "canceled";
        case "시술완료":
          return reservationList.reservationStatusName === "completed";
        default:
          return true;
      }
    })
    .sort((a, b) => {
      switch (selectedSort) {
        case "최신예약순":
          return new Date(b.reservationDate).getTime() - new Date(a.reservationDate).getTime();
        case "오래된예약순":
          return new Date(a.reservationDate).getTime() - new Date(b.reservationDate).getTime();
        default:
          return 0;
      }
    });

  const handleReviewWrite = () => {
    navigation("/reviewForm");
  };

  return (
    <div className="page-content">
      <div className="page-title">
        <p>나의 예약 내역</p>
      </div>

      <div className="reservation-list-wrap">
        <div className="count-filter-wrap">
          <p>총 {reservationList.length}건</p>
          <FilterReservationSelect value={selectedSort} onChange={setSelectedSort} />
        </div>
        {sortedReservations.map((reservation) => (
          <div key={reservation.reservationNo} className="reservation-box">
            <div className="reservation-list-name-status">
              <p>{reservation.storeName}</p>
              {reservation.reservationStatusName === "waiting_for_reservation" ? (
                <PiSpinnerGap />
              ) : reservation.reservationStatusName === "waiting_for_grooming" ? (
                <p>D-{reservation.reservationDate}</p>
              ) : reservation.reservationStatusName === "canceled" ? (
                <FaRegCircleXmark />
              ) : reservation.reservationStatusName === "completed" ? (
                <div className="rv-write-wrap">
                  <p>리뷰 작성</p>
                  <HiOutlinePencilAlt onClick={handleReviewWrite} />
                  <FaRegCircleCheck />
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="reservation-info-wrap">
              <p>예약일시</p>
              <p>{formatDate(reservation.reservationDate)}</p>
            </div>
            <div className="reservation-info-wrap">
              <p>예약메뉴</p>
              <p>
                {reservation.categoryName} ({reservation.groomingName})
              </p>
            </div>
            <div className="reservation-info-wrap">
              <p>시술담당</p>
              <p>
                {reservation.designerName} {reservation.designerRole}
              </p>
              <button onClick={() => handleReservationClick(reservation)}>상세 보기</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReservationList;
