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
public class ReviewVO {

    private Integer reviewNo; // 리뷰번호
    private Date reviewDate; // 리뷰작성일
    private Integer reviewScore; // 리뷰점수
    private String userId; // 회원아이디
    private String petName; // 반려동물이름
    private String designerRole; // 디자이너직책
    private String designerName; // 디자이너이름
    private String categoryName; // 카테고리이름
    private String groomingName; // 미용메뉴명
    private String imageUrl; // 리뷰이미지경로
    private String reviewContent; // 리뷰내용

}
