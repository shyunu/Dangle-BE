package com.project.dangle.command;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.w3c.dom.Text;

import java.sql.Time;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class StoreVO {

    private Integer storeNo; // 매장번호
    private String storeName; // 매장이름
    private String storePhone; // 매장전화번호
    private String storeAddress; // 매장주소
    private String storeAddressDetail; // 매장주소상세(도보 ~분)
    private String storeOpenTime; // 매장오픈시간
    private String storeCloseTime; // 매장마감시간
    private String storeAboutComment; // 매장소개글
    private String storeDayoff; // 매장정기휴무일

    private Integer reviewCount; // 리뷰개수
    private Double reviewScoreAvg; // 리뷰평점
}
