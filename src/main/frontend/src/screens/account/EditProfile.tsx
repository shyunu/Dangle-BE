import React, { useState } from "react";
import "../../styles/account/EditProfile.css";
import "../../styles/common/Common.css";
import Button from "../../components/Button";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const EditProfile: React.FC = () => {
  const navigation = useNavigate();
  const [editPw, setEditPw] = useState<boolean>(false); // 비밀번호 변경 유무
  const [editPhone, setEditPhone] = useState<boolean>(false); // 연락처 변경 유무
  const [editEmail, setEditEmail] = useState<boolean>(false); // 이메일 변경 유무
  const [editAddress, setEditAddress] = useState<boolean>(false); // 주소 변경 유무

  // 비밀번호 변경 모드
  const handleEditPw = () => {
    setEditPw(!editPw);
  };

  // 연락처 변경 모드
  const handleEditPhone = () => {
    setEditPhone(!editPhone);
  };

  // 이메일 변경 모드
  const handleEditEmail = () => {
    setEditEmail(!editEmail);
  };

  // 주소 변경 모드
  const handleEditAddress = () => {
    setEditAddress(!editAddress);
  };

  return (
    <div className="page-content">
      <div className="page-title-bar">
        <IoIosArrowBack onClick={() => navigation(-1)} />
        <p>회원정보 수정</p>
      </div>
      <div className="page-body edit-profile-wrap">
        <p>아이디</p>
        <div className="edit-form-input-wrap">
          <input type="text" name="userId" />
        </div>
        <p>비밀번호</p>
        <div className="edit-form-input-wrap">
          <input type="password" name="userPw" />
          <Button
            text={editPw ? "중복확인" : "비밀번호 변경"}
            className="white-button-s edit-btn"
            onClick={handleEditPw}
          />
        </div>
        <p className={`edit-pw-confirm-txt ${editPw ? "active" : ""}`}>비밀번호 확인</p>
        <div className={`edit-form-input-wrap ${editPw ? "active" : "inactive"}`}>
          <input type="password" />
        </div>
        <p>이름</p>
        <div className="edit-form-input-wrap">
          <input type="text" name="userName" placeholder="수현" disabled />
        </div>
        <div className="edit-form-birth-gender-wrap">
          <div className="edit-form-birth">
            <p>생년월일</p>
            <div className="calendar-wrap">
              <input type="date" name="userBirth" />
            </div>
          </div>
          <div className="edit-form-gender">
            <p>성별</p>
            <div className="gender-wrap">
              <input type="radio" name="userGender" value="남" />
              <p>남</p>
              <input type="radio" name="userGender" value="여" checked />
              <p>여</p>
            </div>
          </div>
        </div>
        <p>연락처</p>
        <div className="edit-form-input-wrap">
          <input type="text" name="userPhone" placeholder="010-1234-1234" disabled />
          <Button
            text={editPhone ? "중복확인" : "연락처 변경"}
            className="white-button-s edit-btn"
            onClick={handleEditPhone}
          />
        </div>
        <p>이메일</p>
        <div className="edit-form-input-wrap email-wrap">
          <input type="text" name="emailLocal" placeholder="kkk123@gmail.com" disabled />
          <Button
            text={editEmail ? "중복확인" : "이메일 변경"}
            className="white-button-s edit-btn"
            onClick={handleEditEmail}
          />
        </div>
        <p>주소</p>
        <div className="edit-form-input-wrap address-search-wrap">
          <input type="text" name="addressMain" placeholder="서울시 강남구" disabled />
          <Button
            text={editAddress ? "중복확인" : "주소 변경"}
            className="white-button-s edit-btn"
            onClick={handleEditAddress}
          />
        </div>
        <div className="edit-form-input-wrap address-detail">
          <input type="text" name="addressDetail" placeholder="A동 B호" disabled />
        </div>
        <div className="edit-form-button-wrap">
          <Button text="이전" className="gray-button-m" />
          <Button text="완료" className="green-button-m" type="submit" />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
