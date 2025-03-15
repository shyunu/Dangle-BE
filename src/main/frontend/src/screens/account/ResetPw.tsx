import React, { useState } from "react";
import Button from "../../components/Button";
import {useLocation, useNavigate} from "react-router-dom";
import "../../styles/account/ResetPw.css";
import axios from "axios";

const ResetPw: React.FC = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const { userId, userPhone } = location.state || {}; // SearchAccount에서 전달된 userId와 userPhone 받기
    const [newPassword, setNewPassword] = useState<string | null>(null);
    const [confirmPassword, setConfirmPassword] = useState<string | null>(null);

    const handleResetPw = async () => {
        if (!newPassword || !confirmPassword) {
            alert("비밀번호를 입력해주세요.");
            return;
        }

        if (newPassword !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            setConfirmPassword("");
            return;
        }

        try {
            const response = await axios.post("/account/resetPw", {
                userId,
                userPhone,
                userPw: newPassword,  // 비밀번호 추가
            });

            if (response.data === "비밀번호 재설정이 완료되었습니다.") {
                alert(response.data);  // 비밀번호 재설정 완료 메시지 표시
                navigation("/login");  // 로그인 페이지로 이동
            } else {
                alert(response.data);  // 오류 메시지 표시
            }
        } catch (error) {
            console.error("에러 발생:", error);
            alert("서버와의 연결에 문제가 발생했습니다.");
        }
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
                    <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    <p className="reset-info">✱ 영문, 숫자, 특수문자 조합 8~20자리로 입력해주세요.</p>
                </div>
                <div className="pw-second-reset">
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
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
