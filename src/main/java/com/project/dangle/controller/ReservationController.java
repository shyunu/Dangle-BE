package com.project.dangle.controller;

import com.project.dangle.command.ReservationVO;
import com.project.dangle.reservation.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/reservation")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    // 예약내역조회
    @GetMapping("/list")
    public List<ReservationVO> getReservationList(@RequestParam("userId") String userId) {
        List<ReservationVO> list = reservationService.getReservationList(userId);
        return list;
    }

}
