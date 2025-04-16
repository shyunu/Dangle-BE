package com.project.dangle.controller;

import com.project.dangle.account.AccountService;
import com.project.dangle.command.AccountVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/account")
public class AccountController {

    @Autowired
    private AccountService accountService;

    // 로그인
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AccountVO vo) {
        boolean isLoginSuccess = accountService.login(vo);

        if (isLoginSuccess) {
            Integer userNo = accountService.getUserNoByUserId(vo.getUserId());
            return ResponseEntity.ok(userNo);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("아이디 또는 비밀번호가 일치하지 않습니다.");
        }
    }

    // 회원가입
    @PostMapping("/joinForm")
    public String joinForm(@RequestBody AccountVO vo) {
        System.out.println(vo);
        accountService.joinForm(vo);
        return "redirect:/joinComplete";
    }

    // 아이디 찾기(1) - 이메일로 찾기
    @PostMapping("/findIdByEmail")
    public String findIdByEmail(@RequestBody AccountVO vo) {
        String foundId = accountService.findIdByEmail(vo);
        return (foundId != null) ? foundId : "해당 이메일로 등록된 아이디가 없습니다.";
    }

    // 아이디 찾기(2) - 이름/전화번호로 찾기
    @PostMapping("/findIdByNameAndPhone")
    public String findIdByNameAndPhone(@RequestBody AccountVO vo) {
        String foundId = accountService.findIdByNameAndPhone(vo);
        return (foundId != null) ? foundId : "해당 이름/전화번호와 일치하는 계정이 없습니다.";
    }

    // 계정조회 (비밀번호 찾기 - 아이디/전화번호로 찾기)
    @PostMapping("/findAccountForPw")
    public String findAccountForPw(@RequestBody AccountVO vo) {
        boolean isExist = accountService.findAccountForPw(vo);
        if (isExist) {
            return "계정확인완료";
        } else {
            return "아이디 또는 전화번호가 일치하지 않습니다.";
        }
    }

    // 비밀번호 재설정
    @PostMapping("/resetPw")
    public String resetPw(@RequestBody AccountVO vo) {
        boolean isResetSuccess = accountService.resetPw(vo);
        if(isResetSuccess) {
            return "비밀번호 재설정이 완료되었습니다.";
        } else {
            return "아이디 또는 전화번호를 다시 입력해주세요";
        }
    }

    // 로그인한 계정정보 조회
    @GetMapping("/profile")
    public List<Integer> profile(@RequestParam Integer userNo) {
        List<Integer> list = accountService.getProfile(userNo);
        return list;
    }

    // 회원정보 수정 - 로그인된 계정 비번 조회

}
