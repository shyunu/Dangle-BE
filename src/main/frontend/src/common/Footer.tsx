import React from "react";
import "../styles/common/Footer.css";
import { BiHome } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import { BiHeartCircle } from "react-icons/bi";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { RiAccountCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <div className="footerContainer">
            <div className="tabContainer">
                <Link to={"/home"}>
                    <BiHome className="home" />
                </Link>

                <Link to={"/searchStore"}>
                    <IoSearchSharp className="search" />
                </Link>
                {/* <BiHeartCircle className="heart" /> */}
                <Link to={"/reservationList"}>
                    <FaRegCalendarCheck className="calendar" />
                </Link>
                <Link to="/profile">
                    <RiAccountCircleLine className="account" />
                </Link>
            </div>
        </div>
    );
};

export default Footer;
