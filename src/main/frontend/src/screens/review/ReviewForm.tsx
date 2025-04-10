import React, { useState } from "react";
import "../../styles/review/ReviewForm.css";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { renderStars } from "../../utils/renderStars";
import Button from "../../components/Button";

const ReviewForm: React.FC = () => {
  const navigation = useNavigate();
  const [reviewContent, setReviewContent] = useState<string>("");

  // 리뷰내용 작성
  const handleReviewWrite = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewContent(e.target.value);
  };

  // 리뷰 등록
  const handleReviewUpload = () => {
    alert("리뷰가 성공적으로 작성되었습니다.");
    navigation("/reservationList");
  };
  return (
    <div className="review-form-container">
      <div className="review-form-title-wrap">
        <IoIosArrowBack onClick={() => navigation(-1)} />
        <p>리뷰 작성</p>
      </div>
      <div className="review-form-wrap">
        <p>멍멍 펫미용 1호점</p>
        <div className="review-form-count">
          <p>별점(4/5)</p>
          <div>{renderStars(4)}</div>
        </div>
        <div className="review-form-img">
          <p>리뷰 이미지 (1/5)</p>
          <div className="review-img-box">
            <div className="review-img-add">
              <MdOutlineAddAPhoto />
            </div>
            <div className="review-img-item">
              <img src="/image/review1.jpg" />
              <MdOutlineCancel />
            </div>
          </div>
        </div>
        <div className="review-form-content">
          <p>리뷰 내용 ({reviewContent.length}자 / 최대 200자)</p>
          <textarea value={reviewContent} onChange={handleReviewWrite} maxLength={200} />
        </div>
        <div className="review-form-btn">
          <Button text="등록하기" className="pink-button-s" onClick={handleReviewUpload} />
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;