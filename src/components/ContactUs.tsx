import React, { useState } from 'react';

const ContactUs: React.FC = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);

        // Click animasyonunu kısa süre sonra sıfırla
        setTimeout(() => {
            setIsClicked(false);
        }, 200);

        // Burada iletişim sayfasına yönlendirme veya modal açma kodu olacak
        // Örnek: window.location.href = '/contact';
        console.log('İletişim sayfasına yönlendiriliyor...');
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
                        <i className="fas fa-rocket rocket-icon"></i>
                        <i className="fas fa-envelope-open envelope-icon"></i>
                    </div>

                    <div className="text-container">
                        <span className="main-text">Bizimle İletişime Geçin</span>
                        <span className="sub-text">Projelerinizi hayata geçirelim</span>
                    </div>

                    <div className="arrow-container">
                        <i className="fas fa-arrow-right arrow-icon"></i>
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
