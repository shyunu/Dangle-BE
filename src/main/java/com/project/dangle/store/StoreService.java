package com.project.dangle.store;

import com.project.dangle.command.StoreVO;

import java.util.List;

public interface StoreService {

    List<StoreVO> getStoreList(); // 매장조회
}
