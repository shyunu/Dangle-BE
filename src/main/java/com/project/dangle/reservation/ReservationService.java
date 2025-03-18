package com.project.dangle.reservation;

import com.project.dangle.command.ReservationVO;

import java.util.List;

public interface ReservationService {

    List<ReservationVO> getReservationList(String userId); // 예약내역조회

}
