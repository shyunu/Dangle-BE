package com.project.dangle.account;

import com.project.dangle.command.AccountVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountServiceImpl implements AccountService {

    @Autowired
    private AccountMapper accountMapper;

    // 로그인
    @Override
    public boolean login(AccountVO vo) {
        int count = accountMapper.checkLogin(vo.getUserId(), vo.getUserPw());
        return count > 0;
    }

    // 회원가입
    @Override
    public void joinForm(AccountVO vo) {
        accountMapper.joinForm(vo);
    }

    // 아이디 찾기(1) - 이메일로 찾기
    @Override
    public String findIdByEmail(AccountVO vo) {
        return accountMapper.findIdByEmail(vo.getUserEmail());
    }

    // 아이디 찾기(2) - 이름/전화번호로 찾기
    @Override
    public String findIdByNameAndPhone(AccountVO vo) {
        return accountMapper.findIdByNameAndPhone(vo.getUserName(), vo.getUserPhone());
    }

    // 계정조회 (비밀번호 찾기 - 아이디/전화번호로 찾기)
    @Override
    public boolean findAccountForPw(AccountVO vo) {
        int count = accountMapper.findAccountForPw(vo.getUserId(), vo.getUserPhone());
        return count > 0;
    }

    // 비밀번호 재설정
    @Override
    public boolean resetPw(AccountVO vo) {
        boolean isUserExist = accountMapper.findAccountForPw(vo.getUserId(), vo.getUserPhone()) > 0;
        if (isUserExist) {
            accountMapper.updatePassword(vo);
            return true;
        }
        return false;
    }
}
