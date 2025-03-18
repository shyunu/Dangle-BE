export interface Reservation {
    reservationNo: number; // 예약번호
    storeName: string; // 매장이름
    reservationStatusName: string; // 예약상태명
    reservationDate: string; // 예약일자
    reservationTime: string; // 예약시간
    categoryName: string; // 미용카테고리이름
    groomingName: string; // 미용메뉴이름
    designerRole: string; // 디자이너직책
    designerName: string; // 디자이너이름
    userName?: string; // 회원이름 (예약자)
    userPhone?: string; // 회원연락처
    petName?: string; // 반려동물이름
    reservationRequest?: string; // 예약요청사항
    groomingPrice?: number; // 미용메뉴가격
    paymentAmount?: number; // 총결제금액
    paymentMethod?: string;  // 결제방식
}