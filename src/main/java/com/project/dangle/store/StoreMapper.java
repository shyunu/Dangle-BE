package com.project.dangle.store;

import com.project.dangle.command.DesignerVO;
import com.project.dangle.command.GroomingVO;
import com.project.dangle.command.ReviewVO;
import com.project.dangle.command.StoreVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface StoreMapper {

    List<StoreVO> getStoreList(); // 매장조회
    List<DesignerVO> getDesignerListByStoreNo(Integer storeNo); // 디자이너조회
    List<GroomingVO> getGroomingListByStoreNo(Integer storeNo); // 미용메뉴조회
    List<ReviewVO> getReviewListByStoreNo(Integer storeNo); // 리뷰조회

}
