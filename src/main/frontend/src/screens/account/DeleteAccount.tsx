import React, { useState } from "react";
import "../../styles/account/DeleteAccount.css";
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import Button from "../../components/Button";
import DeleteAccountConfirm from "./DeleteAccountConfirm";

const DeleteAccount: React.FC = () => {
  const [showConfirm, setShowConfirm] = useState<boolean>(false); // 탈퇴재확인 팝업창
  const handleContinueClick = () => {
    setShowConfirm(true);
  };

  return (
    <div className="delete-account-container">
      <div className="delete-account-title-wrap">
        <p>회원 탈퇴</p>
      </div>
      <div className="delete-account-wrap">
        <div className="delete-account-txt-intro">
          <p>OO님,</p>
          <p>그동안 댕글댕글과 함께해주셔서 고마웠어요!</p>
        </div>
        <div className="delete-account-txt-why">
          <p>탈퇴하시는 이유를 알려주세요.</p>
          <p>(복수 선택 가능)</p>
        </div>
        <div className="delete-account-check-box">
          <div>
            <MdOutlineCheckBox />
            <p>사용 빈도가 낮아요</p>
          </div>
          <div>
            <MdOutlineCheckBoxOutlineBlank />
            <p>원하는 기능이 없어요</p>
          </div>
          <div>
            <MdOutlineCheckBoxOutlineBlank />
            <p>사용이 불편해요</p>
          </div>
          <div>
            <MdOutlineCheckBoxOutlineBlank />
            <p>개인정보가 걱정돼요</p>
          </div>
          <div>
            <MdOutlineCheckBoxOutlineBlank />
            <p>다른 서비스를 이용할게요</p>
          </div>
          <div>
            <MdOutlineCheckBoxOutlineBlank />
            <div className="delete-input-wrap">
              <p>기타 (직접 입력)</p>
              <input />
            </div>
          </div>
        </div>
        <Button text="계속 진행하기" onClick={handleContinueClick} />
        {showConfirm && <DeleteAccountConfirm />}
      </div>
    </div>
  );
};

export default DeleteAccount;