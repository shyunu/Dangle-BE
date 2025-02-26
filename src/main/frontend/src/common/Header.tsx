import React from "react";
import "../styles/common/Header.css";

const Header: React.FC = () => {
    return (
        <div className="headerContainer">
            <div className="header-wrap">
                <img src="./image/dangleLogo1.png" alt="logo" />
            </div>
        </div>
    );
};

export default Header;
