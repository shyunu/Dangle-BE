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

    private String userId;
    private String userPw;
    private String userName;
    private Date userBirth;
    private String userGender;
    private String userEmail;
    private String userPhone;
    private String userAddress;

}
