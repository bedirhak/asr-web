import React, { useEffect, useState } from 'react';
import droneImage from '../assets/images/homepage/follow1.png';

const DroneFollow: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);

            // Slider'dan sonra görünmeye başlasın (yaklaşık 600px)
            const sliderHeight = 600;
            setIsVisible(currentScrollY > sliderHeight);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    // Scroll pozisyonuna göre drone'un konumunu hesapla
    const scrollProgress = Math.min(scrollY / (document.body.scrollHeight - window.innerHeight), 1);
    const droneX = 85 - (scrollProgress * 100); // Sağdan sola, daha yumuşak hareket
    const droneY = 15 + (scrollProgress * 50); // Yukarıdan aşağıya, daha kontrollü
    const droneRotation = -3 + (scrollProgress * 8); // Daha az perspektif değişimi
    const droneScale = 0.9 + (scrollProgress * 0.2); // Daha az boyut değişimi

    return (
        <div className="drone-follow-container">
            <div
                className="drone-follow"
                style={{
                    transform: `translate(${droneX}vw, ${droneY}vh) rotate(${droneRotation}deg) scale(${droneScale})`,
                }}
            >
                <img
                    src={droneImage}
                    alt="Drone"
                    className="drone-image"
                />
                {/* Drone'un gölgesi */}
                <div className="drone-shadow"></div>
            </div>
        </div>
    );
};

export default DroneFollow;
