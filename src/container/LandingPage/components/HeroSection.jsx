import React, { useEffect, useState } from "react";
import ImageSlider from "../../../components/ImageSlider";
import { Helmet } from "react-helmet-async";
import PreviewNextView from "../../../components/PreviewNextView";

const images = ["/img3.webp", "/img1.webp", "/img2.webp"];

const slideDuration = 8000;

function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showBorderAnimation, setShowBorderAnimation] = useState(false);
  const [nextImageIndex, setNextImageIndex] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBorderAnimation(true);
      setTimeout(() => {
        setShowBorderAnimation(false);
        goToNextImage();
      }, 1000);
    }, slideDuration - 1000);

    return () => clearTimeout(timer);
  }, [currentImageIndex, nextImageIndex]);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setNextImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-text-container">
          <p className="hero-sub-title">Welcome To TenTwenty Farms</p>
          <p className="hero-main-title">
            From our Farms
            <br />
            to your hands
          </p>
          <PreviewNextView
            showBorderAnimation={showBorderAnimation}
            images={images}
            nextImageIndex={nextImageIndex}
            goToNextImage={goToNextImage}
            slideDuration={slideDuration}
            currentImageIndex={currentImageIndex}
          />
        </div>
      </div>
      <ImageSlider images={images} currentImageIndex={currentImageIndex} />
    </section>
  );
}

export default HeroSection;
