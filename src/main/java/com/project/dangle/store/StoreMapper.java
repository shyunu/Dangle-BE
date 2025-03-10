package com.project.dangle.store;

import com.project.dangle.command.DesignerVO;
import com.project.dangle.command.StoreVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface StoreMapper {

    List<StoreVO> getStoreList(); // 매장조회
    List<DesignerVO> getDesignerListByStoreNo(Integer storeNo); // 디자이너조회
}
