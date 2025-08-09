import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

// Tüm referans resimlerini otomatik olarak içe aktar
const imageContext = import.meta.glob("../assets/images/asr-refs/*.{png,jpg,jpeg,webp}", { eager: true, as: "url" }) as Record<string, string>;
const refImages = Object.values(imageContext);

const References: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let isDown = false;
        let startX: number;
        let scrollLeft: number;

        const handleMouseDown = (e: MouseEvent) => {
            isDown = true;
            container.style.cursor = 'grabbing';
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
            // Animasyonu durdur
            if (trackRef.current) {
                trackRef.current.style.animationPlayState = 'paused';
            }
        };

        const handleMouseLeave = () => {
            isDown = false;
            container.style.cursor = 'grab';
            // Animasyonu tekrar başlat
            if (trackRef.current) {
                trackRef.current.style.animationPlayState = 'running';
            }
        };

        const handleMouseEnter = () => {
            // Mouse üzerine geldiğinde animasyonu durdur
            if (trackRef.current) {
                trackRef.current.style.animationPlayState = 'paused';
            }
        };

        const handleMouseUp = () => {
            isDown = false;
            container.style.cursor = 'grab';
            // Animasyonu tekrar başlat
            if (trackRef.current) {
                trackRef.current.style.animationPlayState = 'running';
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 2;
            container.scrollLeft = scrollLeft - walk;
        };

        container.addEventListener('mousedown', handleMouseDown);
        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);
        container.addEventListener('mouseup', handleMouseUp);
        container.addEventListener('mousemove', handleMouseMove);

        return () => {
            container.removeEventListener('mousedown', handleMouseDown);
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
            container.removeEventListener('mouseup', handleMouseUp);
            container.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="d-flex flex-column align-items-center">
            {/* <h2 className="about-services-title mb-0">
                {t('ref.title')}
            </h2>
            <div className="references-container" ref={containerRef}>

                <div className="references-track" ref={trackRef}>
                    {refImages.map((img, index) => (
                        <div key={`img1-${index}`} className="reference-item">
                            <img src={img} alt={`Referans ${index + 1}`} />
                        </div>
                    ))}
                    {refImages.map((img, index) => (
                        <div key={`img2-${index}`} className="reference-item">
                            <img src={img} alt={`Referans ${index + 1}`} />
                        </div>
                    ))}
                    {refImages.map((img, index) => (
                        <div key={`img3-${index}`} className="reference-item">
                            <img src={img} alt={`Referans ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
            <Link to="/references" className="about-btn-link">
                <button className="about-btn">
                    <span className="about-btn-text">
                        {t('ref.title')}
                    </span>
                    <div className="about-btn-light"></div>
                </button>
            </Link> */}
            <div className="references-container" ref={containerRef}>

                <div className="references-track" ref={trackRef}>
                    {/* İlk set */}
                    {refImages.map((img, index) => (
                        <div key={`img1-${index}`} className="reference-item">
                            <img src={img} alt={`Referans ${index + 1}`} />
                        </div>
                    ))}
                    {/* İkinci set (sonsuz kayma etkisi için) */}
                    {refImages.map((img, index) => (
                        <div key={`img2-${index}`} className="reference-item">
                            <img src={img} alt={`Referans ${index + 1}`} />
                        </div>
                    ))}
                    {/* Üçüncü set (daha düzgün sonsuz efekt için) */}
                    {refImages.map((img, index) => (
                        <div key={`img3-${index}`} className="reference-item">
                            <img src={img} alt={`Referans ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default References;
