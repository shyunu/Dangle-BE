import React, {useEffect, useState} from "react";
import {Routes, Route, useNavigate} from "react-router-dom";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchAccount from "./screens/account/SearchAccount";
import FoundId from "./screens/account/FoundId";
import Login from "./screens/account/Login";
import Home from "./screens/home/Home";
import Footer from "./common/Footer";
import Header from "./common/Header";
import FoundPw from "./screens/account/FoundPw";
import ResetPw from "./screens/account/ResetPw";
import JoinAgree from "./screens/join/JoinAgree";
import JoinForm from "./screens/join/JoinForm";
import JoinComplete from "./screens/join/JoinComplete";
import SearchStore from "./screens/store/SearchStore";
import StoreInfo from "./screens/store/StoreInfo";
import ReservationList from "./screens/reservation/ReservationList";
import ReservationDetail from "./screens/reservation/ReservationDetail";
import ReservationForm from "./screens/reservation/ReservationForm";
import Profile from "./screens/account/Profile";

const App: React.FC = () => {
    const navigation = useNavigate();

    useEffect(() => {
        if (window.location.pathname === "/") {
            navigation("/home", { replace: true });
        }
    }, []);

    return (
        <div className="App">
            <Header />

            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/searchAccount" element={<SearchAccount />} />
                <Route path="/foundId" element={<FoundId />} />
                <Route path="/foundPw" element={<FoundPw />} />
                <Route path="/resetPw" element={<ResetPw />} />
                <Route path="/searchStore" element={<SearchStore />} />
                <Route path="/storeInfo" element={<StoreInfo />} />
                <Route path="/reservationList" element={<ReservationList />} />
                <Route path="/reservationDetail" element={<ReservationDetail />} />
                <Route path="/reservationForm" element={<ReservationForm />} />
                <Route path="/reservationPayment" element={<ReservationPayment />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/joinAgree" element={<JoinAgree />} />
                <Route path="/joinForm" element={<JoinForm />} />
                <Route path="/joinComplete" element={<JoinComplete />} />
            </Routes>

            <Footer />
        </div>
    );
};

export default App;
