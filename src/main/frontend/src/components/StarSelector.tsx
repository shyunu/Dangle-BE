import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegStar } from "react-icons/fa";

interface StarSelectorProps {
  rating: number;
  onChange: (rating: number) => void;
}

const StarSelector: React.FC<StarSelectorProps> = ({ rating, onChange }) => {
  const handleClick = (idx: number) => {
    onChange(idx + 1);
  };
  return (
    <div>
      {[0, 1, 2, 3, 4].map((i) => {
        const isFilled = i < rating;

        return (
          <motion.div
            key={i}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleClick(i)}
            style={{ cursor: "pointer" }}
          >
            {isFilled ? <FaStar color="#ffb703" size={24} /> : <FaRegStar color="#ffb703" size={24} />}
          </motion.div>
        );
      })}
    </div>
  );
};

export default StarSelector;
