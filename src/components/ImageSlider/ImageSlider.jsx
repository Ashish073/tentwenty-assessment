import React from "react";
import { AnimatePresence } from "framer-motion";
import AnimatedOverlay from "./components/AnimatedOverlay";

const ImageSlider = ({ images, currentImageIndex }) => {
  const overlayHeight = "100%";
  const overlayDuration = 1.5;

  return (
    <div className="image-slider">
      <div className="slider-container">
        {/* Current image */}
        <div
          className="current-image"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
          }}
        />

        {/* Image overlay */}
        <AnimatePresence>
          <AnimatedOverlay
            imageUrl={images[(currentImageIndex + 1) % images.length]}
            height={overlayHeight}
            duration={overlayDuration}
            currentImageIndex={currentImageIndex}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ImageSlider;
