package com.project.dangle.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")  // 루트 경로로 요청이 오면 실행
public class HelloController {

    @GetMapping
    public String home() {
        return "Hello, Dangle!";
    }
}