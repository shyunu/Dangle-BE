package com.project.dangle.store;

import com.project.dangle.command.DesignerVO;
import com.project.dangle.command.StoreVO;

import java.util.List;

public interface StoreService {

    List<StoreVO> getStoreList(); // 매장조회
    List<DesignerVO> getDesignerListByStoreNo(Integer storeNo); // 디자이너조회

}
