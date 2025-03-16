import React, { useEffect, useState } from "react";
import "../../styles/account/SearchAccount.css";
import Button from "../../components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";
import {formatPhoneNumber} from "../../utils/formatPhoneNumber";

const SearchAccount: React.FC = () => {
    const navigation = useNavigate();
    const location = useLocation(); // 넘긴 state값 가져올때 사용
    const [isFindId, setIsFindId] = useState(true);
    const [selectedOption, setSelectedOption] = useState<number>(0);

    const [userEmail, setUserEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [userId, setUserId] = useState("");
    const [userPhone, setUserPhone] = useState("");

    // 아이디 비밀번호 변경 탭
    const handleTabChange = (findId: boolean) => {
        setIsFindId(findId);

        if (findId) {
            setUserId("");
            setUserPhone("");
        } else {
            setUserEmail("");
            setUserName("");
            setUserPhone("");
            setSelectedOption(0);
        }
    };

    const changeOption = (option: number) => {
        setSelectedOption(option);

        if (option === 1) {
            setUserName("");
            setUserPhone("");
        } else if (option === 2) {
            setUserEmail("");
        }
    };

    // Input 유효성 검사
    const validateInputs = () => {
        if (isFindId) {
            if (selectedOption === 1) {
                // 이메일 검사
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(userEmail)) {
                    alert("올바른 이메일 형식을 입력해주세요.");
                    return false;
                }
            } else if (selectedOption === 2) {
                // 이름 검사 (공백 불가)
                if (userName.includes(" ")) {
                    alert("이름에 공백을 포함할 수 없습니다.");
                    return false;
                }
                // 전화번호 검사 (000-0000-0000 형식)
                const phoneRegex = /^\d{3}-\d{4}-\d{4}$/;
                if (!phoneRegex.test(userPhone)) {
                    alert("전화번호를 올바른 형식(000-0000-0000)으로 입력해주세요.");
                    return false;
                }
            }
        } else {
            // 아이디 검사 (공백 불가)
            if (userId.includes(" ")) {
                alert("아이디에 공백을 포함할 수 없습니다.");
                return false;
            }
            // 전화번호 검사 (000-0000-0000 형식)
            const phoneRegex = /^\d{3}-\d{4}-\d{4}$/;
            if (!phoneRegex.test(userPhone)) {
                alert("전화번호를 올바른 형식(000-0000-0000)으로 입력해주세요.");
                return false;
            }
        }

        return true;
    };

    const handleNavigation = async () => {
        if (!validateInputs()) return;

        if (isFindId) {
            try {
                let response;

                if (selectedOption === 1) {
                    response = await axios.post("/account/findIdByEmail", { userEmail });
                } else if (selectedOption === 2) {
                    response = await axios.post("/account/findIdByNameAndPhone", { userName, userPhone });
                }

                if (response?.data) {
                    navigation("/foundId", { state: { foundId: response.data } });
                } else {
                    alert("옵션 및 정보를 입력해주세요.");
                }
            } catch (error) {
                console.error("아이디 찾기 요청 중 오류 발생:", error);
                alert("아이디 찾기 서버 연결에 문제가 발생했습니다.");
            }
        } else {
            try {
                const response = await axios.post("/account/findAccountForPw", { userId, userPhone });

                if (response.data === "계정확인완료") {
                    navigation("/resetPw", { state: { userId, userPhone } });
                } else {
                    alert(response.data);
                }
            } catch (error) {
                console.error("에러발생:", error);
                alert("비밀번호찾기 서버연결에 문제 발생함");
            }
        }
    };

    useEffect(() => {
        if (location.state?.isFindId !== undefined) {
            setIsFindId(location.state.isFindId);
        }
    }, [location.state]);

    const handlePhoneFormat = (event: React.ChangeEvent<HTMLInputElement>) => {
        const formattedPhone = formatPhoneNumber(event.target.value);
        setUserPhone(formattedPhone)
    }

    return (
        <div className="searchContainer">
            <div>DangleDangle</div>
            <div>{isFindId ? "아이디 찾기" : "비밀번호 찾기"}</div>

            {/* 아이디 비밀번호 타켓 변경탭 */}
            <div className="targetContainer">
                <button className={isFindId ? "active" : ""} onClick={() => handleTabChange(true)}>
                    아이디 찾기
                </button>
                <button className={!isFindId ? "active" : ""} onClick={() => handleTabChange(false)}>
                    비밀번호 찾기
                </button>
            </div>

            {/* 타겟에 따른 화면 구성 */}
            <div className="searchWrap">
                {isFindId ? (
                    <>
                        <div className="emailContainer">
                            <div className="radioWrap" onClick={() => changeOption(1)}>
                                {selectedOption === 1 ? <IoMdRadioButtonOn /> : <IoMdRadioButtonOff />}
                                <p>가입한 이메일로 찾기</p>
                            </div>
                            <input
                                type="email"
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                                placeholder="이메일을 입력해주세요."
                                disabled={selectedOption === 2 || selectedOption === 0}
                            />
                        </div>
                        <div className="phoneContainer">
                            <div className="radioWrap" onClick={() => changeOption(2)}>
                                {selectedOption === 2 ? <IoMdRadioButtonOn /> : <IoMdRadioButtonOff />}
                                <p>가입한 휴대폰으로 찾기</p>
                            </div>
                            <p>이름</p>
                            <input
                                type="text"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                placeholder="이름을 입력해주세요."
                                disabled={selectedOption === 1 || selectedOption === 0}
                            />
                            <p>전화번호</p>
                            <input
                                type="text"
                                value={userPhone}
                                onChange={handlePhoneFormat}
                                placeholder="전화번호를 입력해주세요."
                                disabled={selectedOption === 1 || selectedOption === 0}
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="pwContainer">
                            <p>아이디</p>
                            <input
                                type="text"
                                placeholder="아이디를 입력해주세요."
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
                            />
                            <p>전화번호</p>
                            <input
                                type="text"
                                placeholder="전화번호를 입력해주세요."
                                value={userPhone}
                                onChange={handlePhoneFormat}
                            />
                        </div>
                    </>
                )}
            </div>

            <div className="searchButton">
                <Button text={isFindId ? "아이디 찾기" : "비밀번호 찾기"} onClick={handleNavigation} />
            </div>
        </div>
    );
};

export default SearchAccount;
