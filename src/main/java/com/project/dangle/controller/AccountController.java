package com.project.dangle.controller;

import com.project.dangle.account.AccountService;
import com.project.dangle.command.AccountVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
public class AccountController {

    @Autowired
    private AccountService accountService;

    @PostMapping("/joinForm")
    public String joinForm(@RequestBody AccountVO vo) {
        System.out.println(vo);
        accountService.joinForm(vo);
        return "redirect:/joinComplete";
    }
}
