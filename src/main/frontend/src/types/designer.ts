export interface Designer {
    designerNo: number; // 디자이너번호
    storeNo: number; // 매장번호
    designerName: string; // 디자이너 이름
    designerRole: string; // 디자이너 직책
    designerExperience: string; // 디자이너 경력
    designerInfo: string; // 디자이너 소개글
    designerPhone?: string; // 디자이너 연락처
    designerStatusNo: number; // 디자이너 계정상태
}