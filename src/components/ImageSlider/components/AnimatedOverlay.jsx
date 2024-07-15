// AnimatedOverlay.js
import React from "react";
import { motion } from "framer-motion";

const AnimatedOverlay = ({ imageUrl, height, duration, currentImageIndex }) => {
  const overlayVariants = {
    hidden: { clipPath: "inset(50% 0 50% 0)", opacity: 1 },
    visible: {
      clipPath: "inset(0% 0 0% 0)",
      opacity: 1,
      transition: { duration },
    },
  };

  return (
    <motion.div
      className="next-image"
      key={currentImageIndex} // Trigger animation restart on key change
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
  );
};

export default AnimatedOverlay;
