import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedOverlay from "../ImageSlider/components/AnimatedOverlay";

const PreviewNextView = ({
  images,
  currentImageIndex,
  nextImageIndex,
  slideDuration,
  goToNextImage,
}) => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          type: "smooth",
          duration: slideDuration / 1000,
          bounce: 0,
          repeat: Infinity,
          repeatType: "loop",
        },
        opacity: { duration: 0.01 },
      },
    }),
  };

  const slideVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const handleNextClick = () => {
    goToNextImage();
  };

  function formatNumberWithZero(number) {
    if (number < 10) {
      return `0${number}`;
    } else {
      return `${number}`;
    }
  }

  return (
    <div className="next-preview-container">
      <div className="next-preview">
        <motion.div
          className="next-image-preview"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            className="next-image-button"
            onClick={handleNextClick}
            initial={{ fontSize: "1rem" }}
            whileHover={{ fontSize: "1.3rem" }} // Scale up to 1.1 on hover
          >
            Next
          </motion.button>

          <div className="next-image-container">
            <div className="next-image-container-overlay"></div>
            <div
              className="next-image"
              style={{
                backgroundImage: `url(${images[nextImageIndex]})`,
              }}
            />
            <AnimatedOverlay
              imageUrl={
                images[
                  nextImageIndex + 1 <= images.length - 1
                    ? nextImageIndex + 1
                    : 0
                ]
              }
              duration={1.5} // Adjust duration as needed
              currentImageIndex={currentImageIndex}
            />
          </div>
          {/* SVG and text overlay */}
          <motion.svg
            width="143"
            height="143"
            viewBox="0 0 140 140"
            initial="hidden"
            animate="visible"
            className="animated-svg"
          >
            <motion.rect
              width="100%"
              height="100%"
              strokeWidth="15"
              fill="none"
              stroke="#fff"
              variants={draw}
              custom={1}
              key={currentImageIndex}
            />
          </motion.svg>
          <motion.div
            className="image-slider-page-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentImageIndex}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="current-slide-number"
                  variants={slideVariants}
                  transition={{ duration: 0.5 }}
                >
                  {formatNumberWithZero(currentImageIndex + 1)}
                </motion.div>
              </AnimatePresence>
              <div className="slide-number-divider"></div>
              <div className="total-slide-number">
                {formatNumberWithZero(images.length)}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PreviewNextView;
