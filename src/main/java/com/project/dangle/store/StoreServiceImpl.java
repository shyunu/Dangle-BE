package com.project.dangle.store;

import com.project.dangle.command.DesignerVO;
import com.project.dangle.command.GroomingVO;
import com.project.dangle.command.StoreVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StoreServiceImpl implements StoreService {

    @Autowired
    private StoreMapper storeMapper;

    // 매장조회
    @Override
    public List<StoreVO> getStoreList() {
        List<StoreVO> list = storeMapper.getStoreList();
        return list;
    }

    // 디자이너조회
    @Override
    public List<DesignerVO> getDesignerListByStoreNo(Integer storeNo) {
        List<DesignerVO> list = storeMapper.getDesignerListByStoreNo(storeNo);
        return list;
    }

    // 미용메뉴조회
    @Override
    public List<GroomingVO> getGroomingListByStoreNo(Integer storeNo) {
        List<GroomingVO> list = storeMapper.getGroomingListByStoreNo(storeNo);
        return list;
    }
}
