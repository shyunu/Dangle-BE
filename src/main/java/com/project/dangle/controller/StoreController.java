package com.project.dangle.controller;

import com.project.dangle.command.StoreVO;
import com.project.dangle.store.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StoreController {

    @Autowired
    private StoreService storeService;

    // 매장조회
    @GetMapping("/getStoreList")
    public List<StoreVO> getStoreList() {
        List<StoreVO> list = storeService.getStoreList();
        System.out.println("매장 리스트: " + list); // null이 아니라 정상적인 데이터가 출력되면 됩니다.
        return list;
    }
}
