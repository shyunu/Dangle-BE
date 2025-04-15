import React, { useState } from "react";
import "../../styles/review/ReviewForm.css";
import "../../styles/common/Common.css";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import StarSelector from "../../components/StarSelector";

const ReviewForm: React.FC = () => {
  const navigation = useNavigate();
  const [reviewContent, setReviewContent] = useState<string>(""); // 리뷰 내용
  const [reviewRating, setReviewRating] = useState<number>(0); // 별점 점수
  const [reviewImages, setReviewImages] = useState<string[]>([]); // 리뷰 이미지 배열

  // 리뷰내용 작성
  const handleReviewWrite = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewContent(e.target.value);
  };

  // 리뷰 등록
  const handleReviewUpload = () => {
    alert("리뷰가 성공적으로 작성되었습니다.");
    navigation("/reservationList");
  };

  // 리뷰 이미지 등록
  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file && reviewImages.length < 5) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setReviewImages([...reviewImages, reader.result as string]);
      };
      reader.readAsDataURL(file);
    }
  };

  // 리뷰 이미지 삭제
  const handleRemoveImage = (idx: number) => {
    setReviewImages(reviewImages.filter((_, i) => i !== idx));
  };

  return (
    <div className="page-content">
      <div className="page-title-bar">
        <IoIosArrowBack onClick={() => navigation(-1)} />
        <p>리뷰 작성</p>
      </div>
      <div className="review-form-wrap">
        <p>멍멍 펫미용 1호점</p>
        <div className="review-form-count">
          <p>별점 ({reviewRating}/5)</p>
          <StarSelector rating={reviewRating} onChange={setReviewRating} />
        </div>
        <div className="review-form-img">
          <p>리뷰 이미지 ({reviewImages.length}/5)</p>

          <div className="review-img-box">
            {/* 이미지 추가 버튼 */}
            {reviewImages.length < 5 && (
              <div className="review-img-add">
                <label htmlFor="image-upload">
                  <MdOutlineAddAPhoto />
                </label>
                <input
                  type="file"
                  accept="image/*"
                  id="image-upload"
                  onChange={handleAddImage}
                  style={{ display: "none" }}
                />
              </div>
            )}
            {/* 업로드된 이미지 미리보기 */}
            {reviewImages.map((img, idx) => (
              <div className="review-img-item" key={idx}>
                <img src={img} alt={`uploaded-${idx}`} />
                <MdOutlineCancel onClick={() => handleRemoveImage(idx)} />
              </div>
            ))}
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
