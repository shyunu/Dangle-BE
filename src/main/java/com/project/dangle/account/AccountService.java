package com.project.dangle.account;

import com.project.dangle.command.AccountVO;

public interface AccountService {

    void joinForm(AccountVO vo); // 회원가입
    boolean findAccountForPw(AccountVO vo); // 계정조회 (비밀번호 찾기 - 아이디/전화번호로 찾기)
    boolean resetPw(AccountVO vo); // 비밀번호 재설정

}
