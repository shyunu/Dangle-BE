import React from "react";
import "../../styles/account/DeleteAccount.css";
import { BsEmojiTear } from "react-icons/bs";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const DeleteAccountConfirm: React.FC = () => {
  const navigation = useNavigate();

  const handleCancel = () => {
    navigation("/home");
  };
  const handleDeleteAccount = () => {
    alert("회원탈퇴가 완료되었습니다.");
    navigation("/home");
  };

  return (
    <div className="delete-account-confirm-container">
      <div className="delete-account-title">
        <p>정말 탈퇴하시겠어요 ?</p>
        <BsEmojiTear />
      </div>
      <div className="delete-account-info-txt">
        <p>OO님의 정보는 모두 삭제되며, 복구가 불가능합니다.</p>
        <p>정말 계속 진행하시겠습니까?</p>
      </div>
      <div className="delete-account-btn-wrap">
        <Button text="취소" className="gray-button-s" onClick={handleCancel} />
        <Button text="탈퇴" className="green-button-s" onClick={handleDeleteAccount} />
      </div>
    </div>
  );
};

export default DeleteAccountConfirm;