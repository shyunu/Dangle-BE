import React from "react";
import "../../styles/reservation/ReservationList.css";
import { FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { getRemainingDays } from "../../utils/remainingDate";

export interface Reservation {
    no: number;
    name: string;
    date: Date;
    menu: string;
    designerName: string;
    designerRole: string;
    status: "완료" | "대기" | "취소";
}

const reservationList: Reservation[] = [
    {
        no: 1,
        name: "몽이네",
        date: new Date(2025, 1, 27), // 달은 +1 -> 2월
        menu: "기본 가위컷 (3mm)",
        designerName: "김수현",
        designerRole: "원장",
        status: "대기",
    },
    {
        no: 2,
        name: "반듯하개",
        date: new Date(2024, 11, 18),
        menu: "기본 목욕",
        designerName: "강해린",
        designerRole: "디자이너",
        status: "완료",
    },
    {
        no: 3,
        name: "도다미네",
        date: new Date(2024, 7, 24),
        menu: "피부관리스파",
        designerName: "박소영",
        designerRole: "디자이너",
        status: "취소",
    },
];

const ReservationList: React.FC = () => {
    const navigation = useNavigate();

    const handleReservationClick = (reservation: Reservation) => {
        navigation("/reservationDetail", { state: { reservation } });
    };

    return (
        <div className="reservation-list-container">
            <p className="reservation-list-title">나의 예약 내역</p>
            <div className="store-info-border"></div>
            <div className="count-filter-wrap">
                <p>총 {reservationList.length}건</p>
                <select>
                    <option>기본순</option>
                    <option>최신순</option>
                    <option>오래된순</option>
                </select>
            </div>

            <div className="reservation-list-wrap">
                {reservationList.map((reservation) => (
                    <div key={reservation.no} className="reservation-box">
                        <div className="reservation-list-name-status">
                            <p>{reservation.name}</p>
                            {reservation.status === "완료" ? (
                                <FaRegCircleCheck />
                            ) : reservation.status === "대기" ? (
                                <p>D-{getRemainingDays(reservation.date)}</p>
                            ) : (
                                <FaRegCircleXmark />
                            )}
                        </div>
                        <div className="reservation-info-wrap">
                            <p>예약일시</p>
                            <p>{reservation.date.toLocaleDateString()}</p>
                        </div>
                        <div className="reservation-info-wrap">
                            <p>예약메뉴</p>
                            <p>{reservation.menu}</p>
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
