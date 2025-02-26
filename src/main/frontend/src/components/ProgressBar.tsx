import React from "react";
import "../styles/components/ProgressBar.css";
import { FaCheck } from "react-icons/fa6";



interface ProgressBarProps {
    currentStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
    return (
        <div>
            <div className="join-progress-bar">
                <div className="progress-container">
                    <div className={`progress-step ${currentStep === 1 ? "active" : currentStep > 1 ? "progress-complete" : ""}`}>
                        <div className="circle">{currentStep > 1 ? <FaCheck /> : ""}</div>
                    </div>
                    <div className="progress-line"></div>
                    <div className={`progress-step ${currentStep === 2 ? "active" : currentStep > 2 ? "progress-complete" : ""}`}>
                        <div className="circle">{currentStep > 2 ? <FaCheck /> : ""}</div>
                    </div>
                    <div className="progress-line"></div>
                    <div className={`progress-step ${currentStep === 3 ? "active" : currentStep > 3 ? "progress-complete" : ""}`}>
                        <div className="circle">{currentStep > 3 ? <FaCheck /> : ""}</div>
                    </div>
                </div>
            </div>
            <div className="progress-name-container">
                <p className={`${currentStep === 1 ? "progress-name-active" : ""}`}>약관 동의</p>
                <p className={`${currentStep === 2 ? "progress-name-active" : ""}`}>정보 작성</p>
                <p className={`${currentStep === 3 ? "progress-name-active" : ""}`}>가입 완료</p>
            </div>
        </div>
    );
};

export default ProgressBar;
