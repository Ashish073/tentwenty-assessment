import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    id: 1,
    src: "https://via.placeholder.com/235x420?text=Image+1",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "https://via.placeholder.com/235x420?text=Image+2",
    alt: "Image 2",
  },
  {
    id: 3,
    src: "https://via.placeholder.com/235x420?text=Image+3",
    alt: "Image 3",
  },
  {
    id: 4,
    src: "https://via.placeholder.com/235x420?text=Image+4",
    alt: "Image 4",
  },
  {
    id: 5,
    src: "https://via.placeholder.com/235x420?text=Image+5",
    alt: "Image 5",
  },
];

const RotatingSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {images.map((image) => (
          <div className="rotating-slide-card" key={image.id}>
            <img
              className="rotating-slide-card-img"
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RotatingSlider;
