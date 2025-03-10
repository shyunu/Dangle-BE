package com.project.dangle.command;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class DesignerVO {

    private Integer designerNo; // 디자이너번호
    private Integer storeNo; // 매장번호
    private String designerName; // 디자이너 이름
    private String designerRole; // 디자이너 직책
    private String designerExperience; // 디자이너 경력
    private String designerInfo; // 디자이너 소개글
    private String designerPhone; // 디자이너 연락처
    private String designerStatusNo; // 디자이너 계정상태

}
