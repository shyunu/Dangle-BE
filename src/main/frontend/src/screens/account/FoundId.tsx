import React from "react";
import "../../styles/account/FoundId.css";
import Button from "../../components/Button";
import {useLocation, useNavigate} from "react-router-dom";

const FoundId: React.FC = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const foundId = location.state?.foundId || "";

    return (
        <div className="searchContainer">
            <div>DangleDangle</div>
            <div>아이디 찾기</div>

            {/* 아이디 비밀번호 타켓 변경탭 */}
            <div className="targetContainer">
                <button className="active">아이디 찾기</button>
                <button onClick={() => navigation("/searchAccount", { state: { isFindId: false } })}>비밀번호 찾기</button>
            </div>

            <div className="idInfoWrap">
                <p>아이디 찾기가 완료되었습니다.</p>
                <input value={foundId} readOnly />
            </div>



            <div className="buttonContainer-id">
                <Button text="로그인" className="gray-button-m" onClick={() => navigation("/login")} />
                <Button text="홈으로 이동" className="green-button-m" onClick={() => navigation("/home")} />
            </div>
        </div>
    );
};

export default FoundId;
