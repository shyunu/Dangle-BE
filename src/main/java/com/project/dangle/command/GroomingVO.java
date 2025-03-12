package com.project.dangle.command;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class GroomingVO {

    private Integer groomingNo; // 미용메뉴번호
    private String groomingName; // 미용메뉴이름
    private Integer groomingPrice; // 미용메뉴가격
    private Integer categoryNo; // 미용카테고리번호
    private String categoryName; // 미용카테고리이름
    private Integer storeNo; // 매장번호

}
