import React, {useState} from "react";
import "../../styles/join/JoinForm.css";
import ProgressBar from "../../components/ProgressBar";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import axios from "axios";
import {formatPhoneNumber} from "../../utils/formatPhoneNumber";

interface AccountVO {
    userId?: string | number;
    userPw: string;
    userName: string;
    userBirth: string;
    userGender: string;
    userEmail: string;
    userPhone: string;
    userAddress: string;
    userJoinDate: Date;
    accountStatusNo: number;
    userProfileUrl: string | null;
}

const JoinForm: React.FC = () => {
    const navigation = useNavigate();

    // 회원가입 양식 폼
    const [accountVO, setAccountVO] = useState<AccountVO>({
        userId: "",
        userPw: "",
        userName: "",
        userBirth: "",
        userGender: "",
        userEmail: "",
        userPhone: "",
        userAddress: "",
        userJoinDate: new Date(),
        accountStatusNo: 1,
        userProfileUrl: null,
    })

    // 이메일 상태관리
    const [emailLocal, setEmailLocal] = useState("");
    const [emailDomain, setEmailDomain] = useState("");
    const [isCustomEmail, setIsCustomEmail] = useState(true); // 직접입력 유무

    // 주소 상태관리
    const [addressMain, setAddressMain] = useState("");
    const [addressDetail, setAddressDetail] = useState("");

    // 기본 input change event
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setAccountVO((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // 이메일 input change event
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;

        if(name === "emailLocal") {
            setEmailLocal(value);
            setAccountVO((prevState) => ({
                ...prevState,
                userEmail: `${value}@${emailDomain}`,
            }));
        } else if (name === "emailDomain") {
            setEmailDomain(value);
            setAccountVO((prevState) => ({
                ...prevState,
                userEmail: `${emailLocal}@${value}`,
            }));
        }
    };

    // 이메일 도메인 select change event
    const handleEmailSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedDomain = e.target.value;
        if (selectedDomain === "custom") {
            setIsCustomEmail(true);
            setEmailDomain("");  // 사용자 입력을 위해 emailDomain 초기화
            setAccountVO((prevState) => ({
                ...prevState,
                userEmail: `${emailLocal}@`,  // @뒤는 비워두기
            }));
        } else {
            setIsCustomEmail(false);
            setEmailDomain(selectedDomain);
            setAccountVO((prevState) => ({
                ...prevState,
                userEmail: `${emailLocal}@${selectedDomain}`,
            }));
        }
    };

    // 주소 input change event
    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        if (name === "addressMain") {
            setAddressMain(value);
            setAccountVO((prevState) => ({
                ...prevState,
                userAddress: `${value} ${addressDetail}`,
            }));
        } else if (name === "addressDetail") {
            setAddressDetail(value);
            setAccountVO((prevState) => ({
                ...prevState,
                userAddress: `${addressMain} ${value}`,
            }));
        }
    }

    // 회원가입 폼 제출 event
    const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // 기본 제출 방지

        const formattedAccountVO = {
            ...accountVO,
            userJoinDate: accountVO.userJoinDate.toISOString().split("T")[0]  // "YYYY-MM-DD"
        };

        try {
            const response = await axios.post("/account/joinForm", formattedAccountVO);

            if (response.data) {
                console.log("회원가입 성공:", response.data);
                navigation('/joinComplete', { state: { userName: accountVO.userName }});
            }
        } catch (error) {
            console.error("회원가입 에러:", error);
        }
    }

    return (
        <form className="join-container" onSubmit={handleSubmitForm}>
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
                    <input type="text" name="userId" value={accountVO.userId} onChange={handleInputChange} />
                    <Button text={"중복확인"} className="white-button-s" />
                </div>
                <p>비밀번호</p>
                <div className="join-form-input-wrap">
                    <input type="password" name="userPw" value={accountVO.userPw} onChange={handleInputChange} />
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
                    <input type="text" name="userName" value={accountVO.userName} onChange={handleInputChange} />
                </div>
                <div className="join-form-birth-gender-wrap">
                    <div className="join-form-birth">
                        <p>생년월일</p>
                        <div className="calendar-wrap">
                            <input type="date" name="userBirth" value={accountVO.userBirth} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="join-form-gender">
                        <p>성별</p>
                        <div className="gender-wrap">
                            <input type="radio" name="userGender" value="남" checked={accountVO.userGender === "남"} onChange={handleInputChange} />
                            <p>남</p>
                            <input type="radio" name="userGender" value="여" checked={accountVO.userGender === "여"} onChange={handleInputChange} />
                            <p>여</p>
                        </div>
                    </div>
                </div>
                <p>연락처</p>
                <div className="join-form-input-wrap">
                    <input type="text" name="userPhone" value={formatPhoneNumber(accountVO.userPhone)} onChange={handleInputChange} />
                </div>
                <p>이메일</p>
                <div className="join-form-input-wrap email-wrap">
                    <input type="text" name="emailLocal" value={emailLocal} onChange={handleEmailChange} />
                    <MdAlternateEmail />
                    <input type="text" name="emailDomain" value={emailDomain} onChange={handleEmailChange} />
                    <select onChange={handleEmailSelect}>
                        <option>직접입력</option>
                        <option>naver.com</option>
                        <option>gmail.com</option>
                    </select>
                </div>
                <p>주소</p>
                <div className="join-form-input-wrap address-search-wrap">
                    <input type="text" name="addressMain" value={addressMain} onChange={handleAddressChange} />
                    <Button text={"검색"} className="white-button-s" />
                </div>
                <div className="join-form-input-wrap address-detail">
                    <input type="text" name="addressDetail" value={addressDetail} onChange={handleAddressChange} />
                </div>
            </div>

            {/* 구분선 */}
            <div className="join-form-border-line"></div>

            {/* 버튼 */}
            <div className="join-form-button-wrap">
                <Button text="이전" className="gray-button-m" onClick={() => navigation(-1)} />
                <Button text="다음" className="pink-button-m" type="submit" />
            </div>
        </form>
    );
};

export default JoinForm;
