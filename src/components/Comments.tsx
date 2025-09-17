import React, { useState, useEffect, useRef } from 'react';
import '../styles/_comments.scss';

// Şirket logolarını import et
import ref1 from '../assets/images/asr-refs/ref-21.png'; // SER ANAOKULLARI
import ref2 from '../assets/images/asr-refs/ref-17.png'; // HEY AKADEMİ
import ref3 from '../assets/images/asr-refs/ref-38.png'; // İLİM YAYMA CEMİYETİ
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


// Müşteri yorumları verisi
const testimonials = [
    {
        id: 1,
        name: "SER ANAOKULLARI",
        company: "Eğitim",
        companyLogo: ref1,
        comment: "Video çekimi sürecinde oldukça profesyonel, güler yüzlü ve hızlı bir hizmet aldım. İsteklerimi dikkatle dinleyip en iyi şekilde yansıttılar. Teşekkürler.",
        rating: 5
    },
    {
        id: 2,
        name: "HEY AKADEMİ",
        company: "Eğitim",
        companyLogo: ref2,
        comment: "HEY AKADEMİ olarak Bilal bey ile iki farklı projede birlikte çalıştık. Güler yüzü, işini zamanında yapması ve ne istersek bizi kırmayıp yapması… Bundan sonraki projelerde de birlikte çalışacağız inşaAllah.",
        rating: 5
    },
    {
        id: 3,
        name: "İLİM YAYMA CEMİYETİ",
        company: "Eğitim",
        companyLogo: ref3,
        comment: "ASR Ajans ile çalışmaktan çok memnunuz. Geçtiğimiz yaz okulumuzda 17 öğrencimiz varken, bu yıl hazırladıkları profesyonel tanıtım videoları sayesinde öğrenci sayımız 60'a ulaştı. Videolar hem kalite hem de etki açısından beklentilerimizi fazlasıyla karşıladı ve toplamda 200 binden fazla izlendi. Önümüzdeki süreçte Erkek Öğrenci Yurdumuz için de tanıtım filmi çalışmalarımızı yine ASR Ajans ile sürdüreceğiz.",
        rating: 5
    }
];

const Comments: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const intervalRef = useRef<number | null>(null);

    // Otomatik slide işlevi
    useEffect(() => {
        if (isAutoPlaying) {
            intervalRef.current = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % testimonials.length);
            }, 10000); // 10 saniye
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isAutoPlaying]);

    // Manuel geçiş yapıldığında otomatik geçişi durdur ve yeniden başlat
    const resetAutoPlay = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        setIsAutoPlaying(false);

        // 15 saniye sonra otomatik geçişi yeniden başlat
        setTimeout(() => {
            setIsAutoPlaying(true);
        }, 15000);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        resetAutoPlay();
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        resetAutoPlay();
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        resetAutoPlay();
    };

    // Mouse hover'da otomatik geçişi durdur
    const handleMouseEnter = () => {
        setIsAutoPlaying(false);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    // Mouse ayrıldığında otomatik geçişi devam ettir
    const handleMouseLeave = () => {
        setIsAutoPlaying(true);
    };

    return (
        <div className="comments-section">
            <div className="comments-container">
                <div className="comments-header">
                    <h2 className="comments-title">Müşterilerimizin Gözünden ASR Ajans</h2>
                    <p className="comments-subtitle">
                        Başarılı projelerimiz ve memnun müşterilerimizden gelen gerçek yorumlar
                    </p>
                </div>

                <div className="testimonials-slider"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <div className="slider-container">
                        <div className="testimonial-wrapper">
                            <div
                                className="testimonials-track"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {testimonials.map((testimonial) => (
                                    <div key={testimonial.id} className="testimonial-card">
                                        <div className="testimonial-content">
                                            <div className="quote-icon">
                                                <i className="fas fa-quote-left"></i>
                                            </div>
                                            <p className="testimonial-text">
                                                "{testimonial.comment}"
                                            </p>
                                            <div className="rating">
                                                {[...Array(testimonial.rating)].map((_, index) => (
                                                    <i key={index} className="fas fa-star"></i>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="client-info">
                                            <div className="company-logo">
                                                <img
                                                    src={testimonial.companyLogo}
                                                    alt={testimonial.company}
                                                    onError={(e) => {
                                                        // Fallback: Şeffaf resim göster
                                                        const target = e.target as HTMLImageElement;
                                                        target.style.display = 'none';
                                                        // Logo yerine şirket isminin ilk harfini göster
                                                        const logoContainer = target.parentElement;
                                                        if (logoContainer && !logoContainer.querySelector('.fallback-text')) {
                                                            const fallbackText = document.createElement('div');
                                                            fallbackText.className = 'fallback-text';
                                                            fallbackText.textContent = testimonial.company.charAt(0);
                                                            logoContainer.appendChild(fallbackText);
                                                        }
                                                    }}
                                                />
                                            </div>
                                            <div className="client-details">
                                                <h4 className="client-name">{testimonial.name}</h4>
                                                <p className="client-company">{testimonial.company}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="slider-controls">
                            <button className="slider-btn prev-btn" onClick={prevSlide}>
                                <FaArrowLeft />
                            </button>
                            <button className="slider-btn next-btn" onClick={nextSlide}>
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>

                    <div className="slider-dots">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comments;