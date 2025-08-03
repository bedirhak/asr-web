
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

import slider1 from "../assets/images/homepage/slider1.jpg";
import slider2 from "../assets/images/homepage/slider2.jpg";
import droneImage from "../assets/images/homepage/drone.webp";

// YouTube video URL - embed format with optimized parameters
const slider3VideoUrl = "https://www.youtube.com/embed/_emteWELApM?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playlist=_emteWELApM&start=0&enablejsapi=1&origin=" + window.location.origin;

interface Slide {
  image?: string;
  video?: string;
  titleKey: string;
  descriptionKey: string;
  buttonKey: string;
  type: 'image' | 'video';
}

const slides: Slide[] = [
  {
    video: slider3VideoUrl,
    titleKey: "slider.2.title",
    descriptionKey: "slider.2.description",
    buttonKey: "slider.2.buttonText",
    type: 'video',
  },
  {
    image: slider1,
    titleKey: "slider.0.title",
    descriptionKey: "slider.0.description",
    buttonKey: "slider.0.buttonText",
    type: 'image',
  },
  {
    image: slider2,
    titleKey: "slider.1.title",
    descriptionKey: "slider.1.description",
    buttonKey: "slider.1.buttonText",
    type: 'image',
  },
];

const FullPageHomeSlider: React.FC = () => {
  const { t } = useTranslation();
  const [progress, setProgress] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [displayedDesc, setDisplayedDesc] = useState("");
  const [titleComplete, setTitleComplete] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [droneTransform, setDroneTransform] = useState({ rotateX: 0, rotateY: 0 });

  const autoplaySpeed = 7000; // 7 saniye
  const videoAutoplaySpeed = 60000; // 1 dakika (60 saniye)

  const getCurrentSlideSpeed = () => {
    return slides[currentSlide]?.type === 'video' ? videoAutoplaySpeed : autoplaySpeed;
  };

  useEffect(() => {
    const currentSpeed = getCurrentSlideSpeed();
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / (currentSpeed / 100)); // Her 100ms'de doğru oranda artır
      });
    }, 100);

    return () => clearInterval(interval);
  }, [currentSlide, autoplaySpeed, videoAutoplaySpeed]);

  // Typewriter effect for title
  useEffect(() => {
    const currentSlideData = slides[currentSlide];
    const fullTitle = t(currentSlideData.titleKey);
    setDisplayedTitle("");
    setTitleComplete(false);

    let index = 0;
    const titleInterval = setInterval(() => {
      if (index <= fullTitle.length) {
        setDisplayedTitle(fullTitle.slice(0, index));
        index++;
      } else {
        setTitleComplete(true);
        clearInterval(titleInterval);
      }
    }, 50); // Her 50ms'de bir harf (3 saniyede tamamlanır)

    return () => clearInterval(titleInterval);
  }, [currentSlide, t]);

  // Typewriter effect for description (starts after title completes)
  useEffect(() => {
    if (!titleComplete) return;

    const currentSlideData = slides[currentSlide];
    const fullDesc = t(currentSlideData.descriptionKey);
    setDisplayedDesc("");

    let index = 0;
    const descInterval = setInterval(() => {
      if (index <= fullDesc.length) {
        setDisplayedDesc(fullDesc.slice(0, index));
        index++;
      } else {
        clearInterval(descInterval);
      }
    }, 30); // Açıklama için daha hızlı

    return () => clearInterval(descInterval);
  }, [titleComplete, currentSlide, t]);

  // Mouse tracking for drone perspective effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (slides[currentSlide]?.type !== 'video') return;

    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rotateX = (mouseY - centerY) / centerY * -30; // -30 to 30 degrees
    const rotateY = (mouseX - centerX) / centerX * 30;  // -30 to 30 degrees

    setDroneTransform({ rotateX, rotateY });
    setMousePosition({ x: mouseX, y: mouseY });
  }; const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: getCurrentSlideSpeed(),
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false,
    swipe: true,
    touchMove: true,
    beforeChange: (current: number, next: number) => {
      setCurrentSlide(next);
      setProgress(0);
      setDisplayedTitle("");
      setDisplayedDesc("");
      setTitleComplete(false);
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
          backgroundColor: "#000E58",
          zIndex: 100,
        }}
      >
        <div
          className="slider-progress"
          style={{
            height: "100%",
            width: `${progress}%`,
            backgroundColor: "white",
            transition: "width 0.1s linear",
          }}
        />
      </div>

      <Slider ref={sliderRef} {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              className={slide.type === 'video' ? 'video-slide' : ''}
              style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                textAlign: "center",
                padding: "20px",
                position: "relative",
              }}
              onMouseMove={handleMouseMove}
            >
              {/* Background - Image or Video */}
              {slide.type === 'image' ? (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: -1,
                  }}
                />
              ) : (
                <iframe
                  src={slide.video}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "177.77vh", // 16:9 aspect ratio için minimum width
                    height: "100vw", // Minimum height
                    minWidth: "100%",
                    minHeight: "100%",
                    transform: "translate(-50%, -50%)",
                    border: "none",
                    zIndex: -1,
                    pointerEvents: "none",
                    objectFit: "cover"
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Asr Ajans welcome screen"
                  loading="eager"
                />
              )}

              {/* Drone Image - Only for video slides - Behind text */}
              {slide.type === 'video' && (
                <div
                  className="drone-container"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) perspective(1000px) rotateX(${droneTransform.rotateX}deg) rotateY(${droneTransform.rotateY}deg)`,
                    transition: "transform 0.1s ease-out",
                    zIndex: 5,
                    pointerEvents: "none",
                  }}
                >
                  <img
                    src={droneImage}
                    alt="Drone"
                    style={{
                      width: "400px",
                      height: "auto",
                      maxWidth: "80vw",
                      filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.4)) brightness(0.8)",
                      opacity: 0.7,
                    }}
                  />
                </div>
              )}

              {/* Content */}
              <h1
                className="cg-slider-heading"
                style={{
                  zIndex: 10,
                  position: "relative",
                  transform: `perspective(1000px) rotateX(${droneTransform.rotateX * 0.3}deg) rotateY(${droneTransform.rotateY * 0.3}deg)`,
                  transition: "transform 0.1s ease-out",
                }}
              >
                {displayedTitle}<span className="typewriter-cursor">|</span>
              </h1>
              <p
                className="cg-slider-desc"
                style={{
                  fontSize: "1.2rem",
                  maxWidth: "800px",
                  margin: "20px 0",
                  zIndex: 10,
                  position: "relative",
                  transform: `perspective(1000px) rotateX(${droneTransform.rotateX * 0.2}deg) rotateY(${droneTransform.rotateY * 0.2}deg)`,
                  transition: "transform 0.1s ease-out",
                }}
              >
                {displayedDesc}
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
