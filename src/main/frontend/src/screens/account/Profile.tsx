import React, { useEffect, useState } from "react";
import "../../styles/account/Profile.css";
import Button from "../../components/Button";
import { PiHeartFill } from "react-icons/pi";
import { FaRegFaceSmile } from "react-icons/fa6";
import { PiUserCircleLight } from "react-icons/pi";
import Accordion from "react-bootstrap/Accordion";
import { useNavigate } from "react-router-dom";

interface ProfileLogProps {
    isLogin: boolean;
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Profile: React.FC<ProfileLogProps> = () => {
    const navigation = useNavigate();
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        setUserId(sessionStorage.getItem("userId"));
    }, []);

    const handleLogout = () => {
        sessionStorage.removeItem("userId");
        setUserId(null);
        navigation("/profile");
    };

    return (
        <div className="profile-mypage-container">
            <p className="profile-mypage-title">마이페이지</p>
            <div className="profile-border"></div>
            <div className="profile-image-wrap">
                {userId ? (
                    <>
                        <img src="./image/profile1.jpg" alt="profile-img" />
                        <div className="profile-name">
                            <div className="profile-name-bold">
                                <p>강해린</p>
                                <p>님</p>
                            </div>
                            <div className="profile-intro-comment">
                                <p>오늘도 좋은 하루 되세요!</p>
                                <PiHeartFill />
                            </div>
                        </div>
                        <div className="profile-log-btn">
                            <Button text="로그아웃" className="pink-button-s" onClick={handleLogout} />
                        </div>
                    </>
                ) : (
                    <>
                        <PiUserCircleLight className="profile-image-default" />
                        <div className="profile-name">
                            <div className="profile-name-bold">
                                <p>안녕하세요</p>
                            </div>
                            <div className="profile-intro-comment">
                                <p>댕글댕글에 로그인해주세요</p>
                                <FaRegFaceSmile style={{ color: "#a8cab8" }} />
                            </div>
                        </div>
                        <div className="profile-log-btn">
                            <Button text="로그인" className="green-button-s" onClick={() => navigation("/login")} />
                        </div>
                    </>
                )}
            </div>
            <div className="profile-border"></div>

            {/* profile accordion */}
            <Accordion defaultActiveKey="0" className="custom-accordion-profile">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>내 계정</Accordion.Header>
                    <Accordion.Body>회원정보 수정</Accordion.Body>
                    <Accordion.Body>비밀번호 변경</Accordion.Body>
                    <Accordion.Body>저장한 매장</Accordion.Body>
                    <Accordion.Body>리뷰 관리</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>내 반려동물</Accordion.Header>
                    <Accordion.Body>반려동물 조회</Accordion.Body>
                    <Accordion.Body>반려동물 등록</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>고객센터</Accordion.Header>
                    <Accordion.Body>자주 묻는 질문(FAQ)</Accordion.Body>
                    <Accordion.Body>문의하기 (1:1 문의)</Accordion.Body>
                    <Accordion.Body>이용약관 및 개인정보처리방침</Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Profile;
