package com.project.dangle.account;

import com.project.dangle.command.AccountVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountServiceImpl implements AccountService {

    @Autowired
    private AccountMapper accountMapper;

    @Override
    public void joinForm(AccountVO vo) {
        accountMapper.joinForm(vo);
    }
}
