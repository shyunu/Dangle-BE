import React, { useState } from "react";
import "../../styles/store/SavedStores.css";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { LuMapPin, LuClock4 } from "react-icons/lu";

const SavedStores: React.FC = () => {
  const navigation = useNavigate();
  const [isSaved, setIsSaved] = useState<boolean>(true);
  return (
    <div className="saved-stores-container">
      <div className="saved-stores-title-wrap">
        <IoIosArrowBack onClick={() => navigation(-1)} />
        <p>저장한 매장</p>
      </div>
      <div className="saved-stores-wrap">
        <div className="saved-stores-cnt-filter">
          <p>n개의 매장</p>
          <select>
            <option>최신등록순</option>
          </select>
        </div>
        <div className="saved-stores-list-box">
          <div className="saved-stores-image-wrap">
            <img src="./image/store1-2.jpg" alt="store1-2" />
          </div>
          <div className="saved-stores-info-wrap">
            <div className="store-name-heart">
              <p>댕글댕글 1호점</p>
              {isSaved ? (
                <FaHeart onClick={() => setIsSaved(!isSaved)} />
              ) : (
                <FaRegHeart onClick={() => setIsSaved(!isSaved)} />
              )}
            </div>
            <div className="review">
              <FaStar />
              <p>4.9</p>
              <p>(1,238)</p>
            </div>
            <div className="map">
              <LuMapPin />
              <p>동대문구청 2번출구 도보 3분 거리</p>
            </div>
            <div className="time">
              <LuClock4 />
              <p>영업시간 : 09:00 ~ 18:00 (매주 월요일 휴무)</p>
            </div>
            <div className="rv-cnt">
              <p>예약횟수 n회</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedStores;
