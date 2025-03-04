// src/utils/renderStars.tsx
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";

export const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={i} />);
    }
    if (hasHalfStar) {
        stars.push(<FaStarHalf key={fullStars} />);
    }
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<FaRegStar key={fullStars + i} style={{ color: "#ffb703" }} />);
    }

    return stars;
};
