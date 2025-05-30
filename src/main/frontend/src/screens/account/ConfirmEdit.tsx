import React from "react";
import "../../styles/account/ConfirmEdit.css";
import "../../styles/common/Common.css";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const ConfirmEdit: React.FC = () => {
  const navigation = useNavigate();

  return (
    <div className="page-content">
      <div className="page-title-bar">
        <IoIosArrowBack onClick={() => navigation(-1)} />
        <p>회원정보 수정</p>
      </div>
      <div className="page-body">
        <div className="confirm-edit-text">
          <p>
            소중한 회원님의 정보를 안전하게 보호하기 위해
            <br />
            비밀번호를 다시 한 번 입력해주세요.
          </p>
          <p>회원님의 비밀번호가 타인에게 노출되지 않도록 조심해주세요</p>
        </div>
        <div className="confirm-edit-input-btn">
          <input type="password" placeholder="비밀번호를 입력해주세요." />
          <Button text="확인" className="confirm-btn" onClick={() => navigation("/editProfile")} />
        </div>
      </div>
    </div>
  );
};

export default ConfirmEdit;
