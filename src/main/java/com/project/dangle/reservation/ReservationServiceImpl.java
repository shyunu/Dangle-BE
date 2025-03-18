package com.project.dangle.reservation;

import com.project.dangle.command.ReservationVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationServiceImpl implements ReservationService {

    @Autowired
    private ReservationMapper reservationMapper;

    // 예약내역조회
    @Override
    public List<ReservationVO> getReservationList(String userId) {
        List<ReservationVO> list = reservationMapper.getReservationList(userId);
        return list;
    }
}
