import React, { useState } from "react";
import "../../styles/account/Login.css";
import { FcGoogle } from "react-icons/fc";
import { SiKakao, SiNaver } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login: React.FC = () => {
    const navigation = useNavigate();
    const [userId, setUserId] = useState<string>("");
    const [userPw, setUserPw] = useState<string>("");

    const loginButton = async () => {
        if (userId === "") {
            alert("아이디를 입력해주세요.");
        } else if (userPw === "") {
            alert("비밀번호를 입력해주세요.");
        } else {
            try {
                const response = await axios.post("/account/login", { userId, userPw });

                if (response.data === "로그인 성공") {
                    sessionStorage.setItem("userId", userId);
                    navigation("/home");
                } else {
                    alert("아이디 또는 비밀번호가 일치하지 않습니다.");
                }
            } catch (error) {
                console.error("로그인 요청 중 오류 발생:", error);
                alert("서버와의 연결에 문제가 발생했습니다.");
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            loginButton();
        }
    };
    return (
        <div className="loginContainer">
            <div>DangleDangle</div>
            <div>로그인</div>
            <div className="login-info">
                <p>아이디</p>
                <input value={userId} onChange={(e) => setUserId(e.target.value)} onKeyDown={handleKeyDown} />
                <p>비밀번호</p>
                <input value={userPw} onChange={(e) => setUserPw(e.target.value)} onKeyDown={handleKeyDown} />
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
