package com.project.dangle.account;

import com.project.dangle.command.AccountVO;

import java.util.List;

public interface AccountService {

    boolean login(AccountVO accountVO); // 로그인
    Integer getUserNoByUserId(String userId); // 회원아이디로 회원번호 조회
    void joinForm(AccountVO vo); // 회원가입
    String findIdByEmail(AccountVO vo); // 아이디 찾기(1) - 이메일로 찾기
    String findIdByNameAndPhone(AccountVO vo); // 아이디 찾기(2) - 이름/전화번호로 찾기
    boolean findAccountForPw(AccountVO vo); // 계정조회 (비밀번호 찾기 - 아이디/전화번호로 찾기)
    boolean resetPw(AccountVO vo); // 비밀번호 재설정
    List<Integer> getProfile(Integer userNo); // 로그인한 계정정보 조회

}
