import React, { useState } from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import "../../styles/account/ResetPw.css";

const ResetPw: React.FC = () => {
    const navigation = useNavigate();
    const [password, setPassword] = useState<string | null>(null);
    const [confirmPassword, setConfirmPassword] = useState<string | null>(null);

    const handleResetPw = () => {
        if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다");
            setConfirmPassword("");
            return;
        }

        if (password === null || confirmPassword === null) {
            alert("비밀번호를 입력해주세요.");
            return;
        }
        alert("비밀번호를 재설정하였습니다.");
        navigation("/login")
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };

    return (
        <div className="searchContainer">
            <div>DangleDangle</div>
            <div>비밀번호 찾기</div>

            {/* 아이디 비밀번호 타켓 변경탭 */}
            <div className="targetContainer">
                <button onClick={() => navigation("/searchAccount")}>아이디 찾기</button>
                <button className="active">비밀번호 찾기</button>
            </div>

            <div className="reset-pw-container">
                <div className="pw-first-reset">
                    <p>새로운 비밀번호를 입력해주세요.</p>
                    <input type="password" value={password || ""} onChange={handlePasswordChange} />
                    <p className="reset-info">✱ 영문, 숫자, 특수문자 조합 8~20자리로 입력해주세요.</p>
                </div>
                <div className="pw-second-reset">
                    <input type="password" value={confirmPassword || ""} onChange={handleConfirmPasswordChange} />
                    <p className="reset-info">✱ 비밀번호를 다시 입력해주세요.</p>
                </div>
            </div>

            <div className="buttonContainer-pw">
                <Button text="비밀번호 재설정" className="green-button-s" onClick={handleResetPw} />
            </div>
        </div>
    );
};

export default ResetPw;
