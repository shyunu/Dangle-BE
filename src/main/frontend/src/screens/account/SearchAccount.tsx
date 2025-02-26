import React, { useEffect, useState } from "react";
import "../../styles/account/SearchAccount.css";
import Button from "../../components/Button";
import { useLocation, useNavigate } from "react-router-dom";

const SearchAccount: React.FC = () => {
    const navigation = useNavigate();
    const location = useLocation(); // 넘긴 state값 가져올때 사용
    const [isFindId, setIsFindId] = useState(true);

    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const changeOption = (e: number) => {
        setSelectedOption(e);
    };

    const handleNavigation = () => {
        if (isFindId) {
            navigation("/foundId");
        } else {
            navigation("/resetPw");
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
                            <div className="radioWrap">
                                <input
                                    type="radio"
                                    id="option1"
                                    name="searchOption"
                                    checked={selectedOption === 1}
                                    onChange={() => changeOption(1)}
                                />
                                <p>가입한 이메일로 찾기</p>
                            </div>
                            <input placeholder="이메일을 입력해주세요." />
                        </div>
                        <div className="phoneContainer">
                            <div className="radioWrap">
                                <input
                                    type="radio"
                                    id="option2"
                                    name="searchOption"
                                    checked={selectedOption === 2}
                                    onChange={() => changeOption(2)}
                                />
                                <p>가입한 휴대폰으로 찾기</p>
                            </div>
                            <p>이름</p>
                            <input placeholder="이름을 입력해주세요." />
                            <p>전화번호</p>
                            <input placeholder="전화번호를 입력해주세요." />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="pwContainer">
                            <p>아이디</p>
                            <input placeholder="아이디를 입력해주세요." />
                            <p>전화번호</p>
                            <input placeholder="전화번호를 입력해주세요." />
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
