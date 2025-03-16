package com.project.dangle.account;

import com.project.dangle.command.AccountVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface AccountMapper {

    void joinForm(AccountVO vo); // 회원가입
    String findIdByEmail(@Param("userEmail") String userEmail); // 아이디 찾기(1) - 이메일로 찾기
    String findIdByNameAndPhone(@Param("userName") String userName, @Param("userPhone") String userPhone); // 아이디 찾기(2) - 이름/전화번호로 찾기
    int findAccountForPw(@Param("userId") String userId, @Param("userPhone") String userPhone); // 계정조회 (비밀번호 찾기 - 아이디/전화번호로 찾기)
    void updatePassword(AccountVO vo); // 비밀번호 변경

}
