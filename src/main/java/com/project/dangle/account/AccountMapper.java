package com.project.dangle.account;

import com.project.dangle.command.AccountVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AccountMapper {

    void joinForm(AccountVO vo); // 회원가입

}
