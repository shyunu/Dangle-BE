export interface Review {
    reviewNo: number; // 리뷰번호
    reviewDate: string; // 리뷰작성일
    reviewScore: number; // 리뷰점수
    userId: string; // 회원아이디
    petName: string; // 반려동물이름
    designerRole: string; // 디자이너직책
    designerName: string; // 디자이너이름
    categoryName: string; // 카테고리이름
    groomingName: string; // 미용메뉴명
    imageUrl?: string; // 리뷰이미지경로
    reviewContent: string; // 리뷰내용
}
