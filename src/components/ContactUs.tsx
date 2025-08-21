import React, { useState } from 'react';
import { FaRocket, FaEnvelopeOpen, FaArrowRight, FaStar } from 'react-icons/fa';

const ContactUs: React.FC = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);

        // Telefon uygulamasına yönlendir
        window.location.href = "tel:+905076071454";

        // Click animasyonunu kısa süre sonra sıfırla
        setTimeout(() => {
            setIsClicked(false);
        }, 200);
    };

    return (
        <div className="contact-us-container">
            <div className="floating-elements">
                <div className="floating-circle circle-1"></div>
                <div className="floating-circle circle-2"></div>
                <div className="floating-circle circle-3"></div>
            </div>

            <button
                className={`contact-us-button ${isClicked ? 'clicked' : ''}`}
                onClick={handleClick}
            >
                <div className="button-background">
                    <div className="gradient-overlay"></div>
                    <div className="shine-effect"></div>
                </div>

                <div className="button-content">
                    <div className="icon-container">
                        <FaRocket className="rocket-icon" />
                        <FaEnvelopeOpen className="envelope-icon" />
                    </div>

                    <div className="text-container">
                        <span className="main-text">Bizimle İletişime Geçin</span>
                        <span className="sub-text">Projelerinizi hayata geçirelim</span>
                    </div>

                    <div className="arrow-container">
                        <FaArrowRight className="arrow-icon" />
                        <div className="arrow-trail"></div>
                    </div>
                </div>

                <div className="particle-system">
                    {[...Array(8)].map((_, index) => (
                        <div key={index} className={`particle particle-${index + 1}`}></div>
                    ))}
                </div>

                <div className="ripple-effect">
                    <div className="ripple ripple-1"></div>
                    <div className="ripple ripple-2"></div>
                    <div className="ripple ripple-3"></div>
                </div>
            </button>

            <div className="call-to-action">
                <p className="cta-text">
                    <i className="fas fa-star"></i>
                    Hemen başlayalım ve farkı birlikte yaşayalım!
                </p>
            </div>
        </div>
    );
};

export default ContactUs;
