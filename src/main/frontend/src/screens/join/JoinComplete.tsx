import React, {useState} from "react";
import ProgressBar from "../../components/ProgressBar";
import Button from "../../components/Button";
import "../../styles/join/JoinComplete.css";
import { useNavigate } from "react-router-dom";

const JoinComplete: React.FC = () => {
    const navigation = useNavigate();

    return (
        <div className="join-container">
            {/* 가입창 상단 */}
            <div className="join-text-wrap">
                <p className="join-title">회원가입</p>
                <div className="join-border-line"></div>

                {/* Progress Bar */}
                <ProgressBar currentStep={3} />
            </div>

            <div className="join-complete-container">
                <p>DangleDangle</p>
                <div className="join-complete-box">
                    <p>회원가입 완료</p>
                    <div className="join-complete-box-text">
                        <p>김수현님 반갑습니다 😃</p>
                        <p>댕글댕글의 회원이 되신걸 환영합니다.</p>
                    </div>
                </div>
            </div>

            <div className="join-complete-button-wrap">
                <Button text="로그인" className="gray-button-m" onClick={() => navigation("/login")} />
                <Button text="홈으로 이동" className="pink-button-m" onClick={() => navigation("/home")} />
            </div>
        </div>
    );
};
export default JoinComplete;
