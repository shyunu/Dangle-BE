export interface Store {
    storeNo: number; // 매장번호
    storeName: string; // 매장이름
    reviewScoreAvg: number; // 리뷰평점
    reviewCount: number; // 리뷰개수
    storeAddress: string; // 매장주소
    storeAddressDetail: string; // 매장주소상세
    storeOpenTime: string; // 매장오픈시간
    storeCloseTime: string; // 매장마감시간
    storeAboutComment: string; // 매장소개글
    storeDayoff: string; // 매장휴무일
    imageUrl?: string; // 매장이미지
}