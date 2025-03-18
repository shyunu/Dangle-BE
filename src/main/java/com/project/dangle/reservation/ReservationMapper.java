package com.project.dangle.reservation;

import com.project.dangle.command.ReservationVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ReservationMapper {

    List<ReservationVO> getReservationList(String userId); // 예약내역조회

}
