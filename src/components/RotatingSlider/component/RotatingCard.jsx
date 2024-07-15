import React from "react";
import { motion } from "framer-motion";

const RotatingCard = ({ image, index, currentIndex }) => {
  const isCenter = index === currentIndex;
  const isLeft =
    index === currentIndex - 1 || (currentIndex === 0 && index === 2);
  const isRight =
    index === currentIndex + 1 || (currentIndex === 2 && index === 0);

  return (
    <motion.div
      className={`slider-card ${isCenter ? "center" : ""} ${
        isLeft ? "left" : ""
      } ${isRight ? "right" : ""}`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {isCenter && <motion.div className="drag-overlay">Drag</motion.div>}
    </motion.div>
  );
};

export default RotatingCard;
