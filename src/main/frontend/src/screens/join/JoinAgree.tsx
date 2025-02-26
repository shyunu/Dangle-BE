import React, { useState } from "react";
import "../../styles/join/JoinAgree.css";
import { FaCheck } from "react-icons/fa6";
import { FaRegCheckCircle, FaCheckCircle } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";

// 이용약관 모음집
const requiredContents = [
    "댕글댕글 이용약관 동의",
    "개인정보 수집 및 이용 동의",
    "위치기반 서비스 이용약관 동의",
    "마케팅 정보 수신 동의",
    "제3자 정보 제공 동의",
];
const optionalContents = ["광고성 정보 수신 동의", "마케팅 광고 제공 동의"];

const JoinAgree: React.FC = () => {
    const navigation = useNavigate();
    const [agreements, setAgreements] = useState({
        all: false,
        required: Array(requiredContents.length).fill(false),
        optional: Array(optionalContents.length).fill(false),
    });

    // 전체동의
    const handleCheckAll = () => {
        const resetAll = !agreements.all;
        setAgreements({
            all: resetAll,
            required: Array(5).fill(resetAll),
            optional: Array(2).fill(resetAll),
        });
    };

    // 선택동의
    const handleCheck = (type: "required" | "optional", index: number) => {
        setAgreements((prev) => {
            const updatedAgree = { ...prev, type: [...prev[type]] };
            updatedAgree[type][index] = !updatedAgree[type][index];
            const isAllChecked = updatedAgree.required.every((v) => v) && updatedAgree.optional.every((v) => v);

            return { ...updatedAgree, all: isAllChecked };
        });
    };

    // 다음 버튼 클릭 시 필수 약관 체크 여부 확인
    const handleNextButton = () => {
        const uncheckedIndexes = agreements.required
            .map((checked, index) => (checked ? null : index)) // false인 인덱스만 남김
            .filter((index) => index !== null) as number[]; // null 제거 후 숫자 배열로 변환

        if (uncheckedIndexes.length > 0) {
            const uncheckedTexts = uncheckedIndexes.map((idx) => requiredContents[idx]); // 미동의한 약관 텍스트 가져오기
            alert(`아래의 필수 약관에 동의해주세요:\n\n• ${uncheckedTexts.join("\n• ")}`);
            return;
        }

        // 모든 필수 약관 동의 완료 시 다음 단계 진행
        // alert("모든 이용 약관에 동의하셨습니다.");
        navigation("/joinForm");
    };

    return (
        <div className="join-container">
            {/* 가입창 상단 */}
            <div className="join-text-wrap">
                <p className="join-title">회원가입</p>
                <div className="join-border-line"></div>

                {/* Progress Bar */}
                <ProgressBar currentStep={1} />
            </div>

            <div>
                {/* 약관 안내 문구 */}
                <div className="join-text-wrap">
                    <p className="join-text1">댕글댕글 이용약관</p>
                    <p className="join-text2">회원가입에 필요한 약관에 동의해주세요.</p>
                </div>

                {/* 동의약관 리스트 */}
                <div className="join-agree-content">
                    {/* 전체동의 */}
                    <div onClick={handleCheckAll} className="join-agree-all">
                        {agreements.all ? (
                            <FaCheckCircle className="icon-agree-all" style={{ color: "#EDAFB8" }} />
                        ) : (
                            <FaRegCheckCircle className="icon-agree-all" style={{ color: "#777" }} />
                        )}
                        <p>모두 동의합니다</p>
                    </div>
                    {/* 필수약관 */}
                    {requiredContents.map((text, index) => (
                        <div className="join-agree-option">
                            <div
                                className="agree-check-text"
                                key={`required=${index}`}
                                onClick={() => handleCheck("required", index)}
                            >
                                {agreements.required[index] ? (
                                    <FaCheck style={{ color: "#EDAFB8" }} />
                                ) : (
                                    <FaCheck style={{ color: "#777" }} />
                                )}
                                <p>[필수] {text}</p>
                            </div>
                            <div>
                                <MdArrowForwardIos />
                            </div>
                        </div>
                    ))}
                    {/* 선택약관 */}
                    {optionalContents.map((text, index) => (
                        <div className="join-agree-option">
                            <div
                                className="agree-check-text"
                                key={`optional-${index}`}
                                onClick={() => handleCheck("optional", index)}
                            >
                                {agreements.optional[index] ? (
                                    <FaCheck style={{ color: "#EDAFB8" }} />
                                ) : (
                                    <FaCheck style={{ color: "#777" }} />
                                )}
                                <p>[선택] {text}</p>
                            </div>
                            <div>
                                <MdArrowForwardIos />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 버튼 */}
            <div className="join-agree-button-wrap">
                <Button text="취소" className="gray-button-m" onClick={() => navigation("/home")} />
                <Button text="다음" className="pink-button-m" onClick={handleNextButton} />
            </div>
        </div>
    );
};

export default JoinAgree;
