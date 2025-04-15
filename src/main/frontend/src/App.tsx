import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
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
import ReservationPayment from "./screens/reservation/ReservationPayment";
import ConfirmEdit from "./screens/account/ConfirmEdit";
import EditProfile from "./screens/account/EditProfile";
import DeleteAccount from "./screens/account/DeleteAccount";
import ReviewForm from "./screens/review/ReviewForm";
import ReviewList from "./screens/review/ReviewList";
import SavedStores from "./screens/store/SavedStores";

const App: React.FC = () => {
  const location = useLocation();
  const navigation = useNavigate();

  // Footer를 숨길 경로 list
  const hideFooterRoutes = ["/deleteAccount"];

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
        <Route path="/confirmEdit" element={<ConfirmEdit />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/deleteAccount" element={<DeleteAccount />} />
        <Route path="/reviewForm" element={<ReviewForm />} />
        <Route path="/reviewList" element={<ReviewList />} />
        <Route path="/savedStores" element={<SavedStores />} />
      </Routes>

      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
};

export default App;
