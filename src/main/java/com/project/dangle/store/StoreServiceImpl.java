package com.project.dangle.store;

import com.project.dangle.command.StoreVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StoreServiceImpl implements StoreService {

    @Autowired
    private StoreMapper storeMapper;

    @Override
    public List<StoreVO> getStoreList() {
        List<StoreVO> list = storeMapper.getStoreList();
        return list;
    }
}
