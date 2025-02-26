import React from "react";
import "../../styles/join/JoinForm.css";
import ProgressBar from "../../components/ProgressBar";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";

const JoinForm: React.FC = () => {
    const navigation = useNavigate();

    return (
        <div className="join-container">
            {/* 가입창 상단 */}
            <div className="join-text-wrap">
                <p className="join-title">회원가입</p>
                <div className="join-border-line"></div>

                {/* Progress Bar */}
                <ProgressBar currentStep={2} />
            </div>

            {/* 회원가입폼 */}
            <div className="join-form-container">
                <p>아이디</p>
                <div className="join-form-input-wrap">
                    <input type="text" />
                    <Button text={"중복확인"} className="white-button-s" />
                </div>
                <p>비밀번호</p>
                <div className="join-form-input-wrap">
                    <input type="password" />
                </div>
                <div className="join-form-pw-info">
                    <IoIosInformationCircleOutline />
                    <p>영문, 숫자, 특수문자 조합 8~20자리로 입력해주세요.</p>
                </div>
                <p>비밀번호 확인</p>
                <div className="join-form-input-wrap">
                    <input type="password" />
                </div>
                <p>이름</p>
                <div className="join-form-input-wrap">
                    <input type="text" />
                </div>
                <div className="join-form-birth-gender-wrap">
                    <div className="join-form-birth">
                        <p>생년월일</p>
                        <div className="calendar-wrap">
                            <input type="date" />
                        </div>
                    </div>
                    <div className="join-form-gender">
                        <p>성별</p>
                        <div className="gender-wrap">
                            <input type="radio" name="genderOption" />
                            <p>남</p>
                            <input type="radio" name="genderOption" />
                            <p>여</p>
                        </div>
                    </div>
                </div>
                <p>연락처</p>
                <div className="join-form-input-wrap">
                    <input type="text" />
                </div>
                <p>이메일</p>
                <div className="join-form-input-wrap email-wrap">
                    <input type="email" />
                    <MdAlternateEmail />
                    <input type="email" />
                    <select>
                        <option>직접입력</option>
                        <option>naver.com</option>
                        <option>gmail.com</option>
                    </select>
                </div>
                <p>주소</p>
                <div className="join-form-input-wrap address-search-wrap">
                    <input type="text" />
                    <Button text={"검색"} className="white-button-s" />
                </div>
                <div className="join-form-input-wrap address-detail">
                    <input type="text" />
                </div>
            </div>

            {/* 구분선 */}
            <div className="join-form-border-line"></div>

            {/* 버튼 */}
            <div className="join-form-button-wrap">
                <Button text="이전" className="gray-button-m" onClick={() => navigation(-1)} />
                <Button text="다음" className="pink-button-m" onClick={() => navigation("/joinComplete")} />
            </div>
        </div>
    );
};

export default JoinForm;
