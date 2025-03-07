package com.project.dangle.command;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class AccountVO {

    private String userId; // 회원아이디
    private String userPw; // 회원비밀번호
    private String userName; // 회원이름
    private String userBirth; // 회원생년월일
    private String userGender; // 회원성별
    private String userEmail; // 회원이메일
    private String userPhone; // 회원전화번호
    private String userAddress; // 회원주소
    private Date userJoinDate; // 회원가입일
    private Integer accountStatusNo; // 회원계정상태번호
    private String userProfileUrl; // 회원프로필사진경로

}
