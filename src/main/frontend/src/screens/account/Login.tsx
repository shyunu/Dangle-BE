import React, { useState } from "react";
import "../../styles/account/Login.css";
import { FcGoogle } from "react-icons/fc";
import { SiKakao, SiNaver } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const navigation = useNavigate();
    const [id, setId] = useState<string>("");
    const [pw, setPw] = useState<string>("");

    const loginButton = () => {
        if (id === "") {
            alert("아이디를 입력해주세요.");
        } else if (pw === "") {
            alert("비밀번호를 입력해주세요.");
        } else {
            navigation("/home");
        }
    };
    return (
        <div className="loginContainer">
            <div>DangleDangle</div>
            <div>로그인</div>
            <div className="login-info">
                <p>아이디</p>
                <input value={id} onChange={(e) => setId(e.target.value)} />
                <p>비밀번호</p>
                <input value={pw} onChange={(e) => setPw(e.target.value)} />
            </div>
            <div className="loginButton">
                <button onClick={loginButton}>로그인</button>
            </div>
            <div className="textWrap">
                <Link to="/joinAgree">회원가입</Link>
                <Link to="/searchAccount">아이디/비밀번호 찾기</Link>
            </div>
            <div className="snsContainer">
                <div>
                    <FcGoogle />
                </div>
                <div>
                    <SiKakao />
                </div>
                <div>
                    <SiNaver />
                </div>
            </div>
        </div>
    );
};

export default Login;
