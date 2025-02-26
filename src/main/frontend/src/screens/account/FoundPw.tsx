import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import "../../styles/account/FoundPw.css";

const FoundPw: React.FC = () => {
    const navigation = useNavigate();

    return (
        <div className="searchContainer">
            <div>DangleDangle</div>
            <div>비밀번호 찾기</div>

            {/* 아이디 비밀번호 타켓 변경탭 */}
            <div className="targetContainer">
                <button onClick={() => navigation("/searchAccount")}>아이디 찾기</button>
                <button className="active">비밀번호 찾기</button>
            </div>

            <div className="pwInfoWrap">
                <div>
                    <p>이름</p>
                    <input placeholder="이름을 입력해주세요." />
                </div>
                <div>
                    <p>전화번호</p>
                    <input placeholder="전화번호를 입력해주세요." />
                </div>
            </div>

            <div className="buttonContainer-pw">
                <Button text="비밀번호 찾기" className="green-button-m" onClick={() => navigation("/resetPw")} />
            </div>
        </div>
    );
};

export default FoundPw;
