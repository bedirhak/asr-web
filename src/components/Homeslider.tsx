
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

import slider1 from "../assets/images/homepage/slider1.jpg";
import slider2 from "../assets/images/homepage/slider2.jpg";
import slider3 from "../assets/images/homepage/slider3.jpg";

interface Slide {
  image: string;
  titleKey: string;
  descriptionKey: string;
  buttonKey: string;
}

const slides: Slide[] = [
  {
    image: slider1,
    titleKey: "slider.0.title",
    descriptionKey: "slider.0.description",
    buttonKey: "slider.0.buttonText",
  },
  {
    image: slider2,
    titleKey: "slider.1.title",
    descriptionKey: "slider.1.description",
    buttonKey: "slider.1.buttonText",
  },
  {
    image: slider3,
    titleKey: "slider.2.title",
    descriptionKey: "slider.2.description",
    buttonKey: "slider.2.buttonText",
  },
];

const FullPageHomeSlider: React.FC = () => {
  const { t } = useTranslation();
  const [progress, setProgress] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const autoplaySpeed = 7000; // 7 saniye

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / (autoplaySpeed / 100)); // Her 100ms'de doğru oranda artır
      });
    }, 100);

    return () => clearInterval(interval);
  }, [currentSlide, autoplaySpeed]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: autoplaySpeed,
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false,
    swipe: true,
    touchMove: true,
    beforeChange: (current: number, next: number) => {
      setCurrentSlide(next);
      setProgress(0);
    },
  };

  return (
    <div className="cg-slider-main" style={{ height: "100vh" }}>
      {/* Progress Bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "4px",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          zIndex: 10,
        }}
      >
        <div
          className="slider-progress"
          style={{
            height: "100%",
            width: `${progress}%`,
            backgroundColor: "#0A145A",
            transition: "width 0.1s linear",
          }}
        />
      </div>

      <Slider ref={sliderRef} {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              style={{
                height: "100vh",
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                textAlign: "center",
                padding: "20px",
              }}
            >
              <h1 className="cg-slider-heading">{t(slide.titleKey)}</h1>
              <p
                className="cg-slider-desc"
                style={{
                  fontSize: "1.2rem",
                  maxWidth: "800px",
                  margin: "20px 0",
                }}
              >
                {t(slide.descriptionKey)}
              </p>
              {/* <button
                style={{
                  background: "#0056b3",
                  color: "#fff",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                {t(slide.buttonKey)}
              </button> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FullPageHomeSlider;
