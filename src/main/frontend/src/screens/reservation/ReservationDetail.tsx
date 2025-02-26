import React from "react";
import "../../styles/reservation/ReservationDetail.css";
import { IoIosArrowBack } from "react-icons/io";
import { Reservation } from "./ReservationList";
import { getRemainingDays } from "../../utils/remainingDate";
import { useLocation, useNavigate } from "react-router-dom";
import { FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6";
import { BiHome } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";

interface ReservationDetail extends Reservation {
    memberName: string; // 예약자
    memberPhone: string; // 예약자 연락처
    petName: string; // 반려동물 이름
    request: string; // 요청사항
    menuPrice: number; // 메뉴가격
    totalPrice: number; // 총 결제금액
    payMethod: string; // 결제방식
    cancelDate: Date | null; // 취소일시
    cancelCharge: number | null; // 취소수수료
    totalCancelPrice: number | null; // 총 취소금액
}

const ReservationDetail: React.FC = () => {
    const location = useLocation();
    const navigation = useNavigate();
    const reservation = location.state?.reservation as Reservation;

    const reservationDetail: ReservationDetail[] = [
        {
            ...reservation,
            memberName: "김수현",
            memberPhone: "010-1111-2222",
            petName: "별이",
            request: "노령견이라서 조심히 미용 부탁드려요!",
            menuPrice: 50000,
            totalPrice: 50000,
            payMethod: "카드결제",
            cancelDate: null,
            cancelCharge: null,
            totalCancelPrice: null,
        },
        {
            ...reservation,
            memberName: "김지현",
            memberPhone: "010-2534-7635",
            petName: "몽이",
            request: "몽이의 첫 미용 잘부탁드려요~",
            menuPrice: 75000,
            totalPrice: 75000,
            payMethod: "카카오페이",
            cancelDate: null,
            cancelCharge: null,
            totalCancelPrice: null,
        },
        {
            ...reservation,
            memberName: "박선영",
            memberPhone: "010-3232-3298",
            petName: "초코",
            request: "처음 예약하는데 잘부탁드립니다!",
            menuPrice: 50000,
            totalPrice: 50000,
            payMethod: "카드결제",
            cancelDate: new Date(2024, 8, 22),
            cancelCharge: 0,
            totalCancelPrice: 50000,
        },
    ];

    return (
        <div className="reservation-detail-container">
            <div className="reservation-title">
                <IoIosArrowBack onClick={() => navigation(-1)} />
                <p>예약 상세</p>
            </div>
            <div className="detail-box">
                <div className="reservation-name-status">
                    <div className="rv-store-about">
                        <p>{reservation.name}</p>
                        <BiHome />
                        <FiPhone />
                    </div>

                    <div className="rv-detail-status">
                        {reservation.status === "완료" ? (
                            <FaRegCircleCheck />
                        ) : reservation.status === "대기" ? (
                            <p>D-{getRemainingDays(reservation.date)}</p>
                        ) : (
                            <FaRegCircleXmark />
                        )}
                    </div>
                </div>

                {/* 예약정보 */}
                <div className="detail-info-wrap">
                    <p>예약정보</p>
                    <div className="detail-border"></div>
                    <div className="rv-info-box">
                        <p>예약일시</p>
                        <p>{reservation.date.toLocaleDateString()}</p>
                    </div>
                    <div className="rv-info-box">
                        <p>예약번호</p>
                        <p>{reservation.no}</p>
                    </div>
                    <div className="rv-info-box">
                        <p>예약메뉴</p>
                        <p>{reservation.menu}</p>
                    </div>
                    <div className="rv-info-box">
                        <p>시술담당</p>
                        <p>
                            {reservation.designerName} {reservation.designerRole}
                        </p>
                    </div>
                    <div className="rv-info-box">
                        <p>예약자</p>
                        <p>{reservationDetail[reservation.no - 1].memberName}</p>
                    </div>
                    <div className="rv-info-box">
                        <p>연락처</p>
                        <p>{reservationDetail[reservation.no - 1].memberPhone}</p>
                    </div>
                    <div className="rv-info-box">
                        <p>반려동물</p>
                        <p>{reservationDetail[reservation.no - 1].petName}</p>
                    </div>
                    <div className="rv-info-box">
                        <p>요청사항</p>
                        <p>{reservationDetail[reservation.no - 1].request}</p>
                    </div>
                </div>

                {/* 결제정보 */}
                <div className="detail-pay-wrap">
                    <p>결제정보</p>
                    <div className="detail-border"></div>
                    <div className="rv-info-box">
                        <p>메뉴가격</p>
                        <p>{reservationDetail[reservation.no - 1].menuPrice.toLocaleString()}원</p>
                    </div>
                    <div className="rv-info-box">
                        <p>총 결제 금액</p>
                        <p>{reservationDetail[reservation.no - 1].totalPrice.toLocaleString()}원</p>
                    </div>
                    <div className="rv-info-box">
                        <p>결제방식</p>
                        <p>{reservationDetail[reservation.no - 1].payMethod}</p>
                    </div>
                </div>

                {/* 취소/환불 정보 */}
                {reservation.status === "취소" ? (
                    <div className="detail-cancel-wrap">
                        <p>취소/환불 정보</p>
                        <div className="detail-border"></div>
                        <div className="rv-info-box">
                            <p>취소일시</p>
                            <p>
                                {reservationDetail[reservation.no - 1].cancelDate
                                    ?.toLocaleDateString("ko-KR", {
                                        year: "numeric",
                                        month: "2-digit",
                                        day: "2-digit",
                                    })
                                    .replace(/\.$/, "")}
                                (
                                {reservationDetail[reservation.no - 1].cancelDate?.toLocaleDateString("ko-KR", {
                                    weekday: "short",
                                })}
                                ) {reservationDetail[reservation.no - 1].cancelDate?.toLocaleTimeString()}
                            </p>
                        </div>{" "}
                        <div className="rv-info-box">
                            <p>취소수수료</p>
                            <p>{reservationDetail[reservation.no - 1].cancelCharge}원</p>
                        </div>
                        <div className="rv-info-box">
                            <p>총 취소금액</p>
                            <p>{reservationDetail[reservation.no - 1].menuPrice.toLocaleString()}원</p>
                        </div>
                        <div className="rv-cancel-info">
                            <p>• 신용카드 결제 시, 예약 취소 시 자동으로 카드 승인취소 처리됩니다.</p>
                            <p>• 카드사와 VAN사의 확인 절차로 인해 승인취소까지 3~5일(영업일 기준) 소요될 수 있습니다.</p>
                            <p>• 카드사별로 처리 기간이 다를 수 있으므로, 정확한 확인은 카드사로 문의 부탁드립니다.</p>
                            <p>• 체크카드 결제 시, 환불 금액은 회원님의 통장으로 입금됩니다.</p>
                            <p>• 환불 완료까지 최대 5일(영업일 기준) 소요될 수 있습니다.</p>
                            <p>• 카드사별로 환불 기간이 다를 수 있으니, 자세한 사항은 카드사로 문의 바랍니다.</p>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default ReservationDetail;
