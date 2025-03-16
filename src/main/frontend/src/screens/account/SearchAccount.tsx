import React, { useEffect, useState } from "react";
import "../../styles/account/SearchAccount.css";
import Button from "../../components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";

const SearchAccount: React.FC = () => {
    const navigation = useNavigate();
    const location = useLocation(); // 넘긴 state값 가져올때 사용
    const [isFindId, setIsFindId] = useState(true);
    const [selectedOption, setSelectedOption] = useState<number>(0);

    const [userEmail, setUserEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [userId, setUserId] = useState("");
    const [userPhone, setUserPhone] = useState("");

    const changeOption = (option: number) => {
        setSelectedOption(option);

        if (option === 1) {
            setUserName("");
            setUserPhone("");
        } else if (option === 2) {
            setUserEmail("");
        }
    };

    const handleNavigation = async () => {
        if (isFindId) {
            navigation("/foundId");
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

    return (
        <div className="searchContainer">
            <div>DangleDangle</div>
            <div>{isFindId ? "아이디 찾기" : "비밀번호 찾기"}</div>

            {/* 아이디 비밀번호 타켓 변경탭 */}
            <div className="targetContainer">
                <button className={isFindId ? "active" : ""} onClick={() => setIsFindId(true)}>
                    아이디 찾기
                </button>
                <button className={!isFindId ? "active" : ""} onClick={() => setIsFindId(false)}>
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
                                disabled={selectedOption === 2}
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
                                disabled={selectedOption === 1}
                            />
                            <p>전화번호</p>
                            <input
                                type="text"
                                value={userPhone}
                                onChange={(e) => setUserPhone(e.target.value)}
                                placeholder="전화번호를 입력해주세요."
                                disabled={selectedOption === 1}
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
                                onChange={(e) => setUserPhone(e.target.value)}
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
