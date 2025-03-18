package com.project.dangle.command;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Time;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class ReservationVO {

    private Integer reservationNo; // 예약번호
    private String storeName; // 매장이름
    private String reservationStatusName; // 예약상태명
    private Date reservationDate; // 예약일자
    private String reservationTime; // 예약시간
    private String categoryName; // 미용카테고리이름
    private String groomingName; // 미용메뉴이름
    private String designerRole; // 디자이너직책
    private String designerName; // 디자이너이름
    private String userName; // 회원이름 (예약자)
    private String userPhone; // 회원연락처
    private String petName; // 반려동물이름
    private String reservationRequest; // 예약요청사항
    private Integer groomingPrice; // 미용메뉴가격
    private Integer paymentAmount; // 총결제금액
    private String paymentMethod; // 결제방식

}
