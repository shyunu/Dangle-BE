package com.project.dangle.store;

import com.project.dangle.command.StoreVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface StoreMapper {

    List<StoreVO> getStoreList(); // 매장조회
}
