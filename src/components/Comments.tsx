import React, { useState } from 'react';
import '../styles/_comments.scss';

// Şirket logolarını import et
import ref1 from '../assets/images/asr-refs/ref-1.png';
import ref2 from '../assets/images/asr-refs/ref-2.png';
import ref3 from '../assets/images/asr-refs/ref-3.png';
import ref4 from '../assets/images/asr-refs/ref-4.png';
import ref5 from '../assets/images/asr-refs/ref-5.png';
import ref6 from '../assets/images/asr-refs/ref-6.png';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


// Müşteri yorumları verisi
const testimonials = [
    {
        id: 1,
        name: "Başak Traktör",
        company: "Fabrika",
        companyLogo: ref1,
        comment: "ASR Ajans ile çalışmak harika bir deneyimdi. Projemizi zamanında ve beklentilerimizi aşarak teslim ettiler. Profesyonel yaklaşımları ve yaratıcı çözümleri ile işimizi bir üst seviyeye taşıdılar.",
        rating: 5
    },
    {
        id: 2,
        name: "ERFO",
        company: "Metal Makina",
        companyLogo: ref2,
        comment: "Dijital pazarlama stratejimizi yeniden düzenlerken ASR Ajans'ın uzmanlığından çok faydalandık. ROI'mız %300 arttı ve marka bilinirliğimiz ciddi şekilde yükseldi.",
        rating: 5
    },
    {
        id: 3,
        name: "Platformder",
        company: "Dernek",
        companyLogo: ref3,
        comment: "Web sitesi tasarımından sosyal medya yönetimine kadar tüm dijital ihtiyaçlarımızı karşıladılar. Satışlarımız %250 arttı ve müşteri memnuniyeti en üst seviyede.",
        rating: 5
    },
    {
        id: 4,
        name: "Remax",
        company: "Emlak Ajansı",
        companyLogo: ref4,
        comment: "Moda sektöründeki deneyimleri ve trend takip yetenekleri sayesinde markamızı doğru kitleye ulaştırdılar. Sosyal medya takipçilerimiz 10 kat arttı.",
        rating: 5
    },
    {
        id: 5,
        name: "YAFA İnşaat",
        company: "Yapı Sektörü",
        companyLogo: ref5,
        comment: "Restoran zinciri olarak dijital dönüşümümüzde ASR Ajans bizim için vazgeçilmez oldu. Online sipariş sistemimiz ve dijital pazarlama stratejilerimiz mükemmel çalışıyor.",
        rating: 5
    },
    {
        id: 6,
        name: "Aktepe Ambalaj",
        company: "Ambalaj ve Paketleme",
        companyLogo: ref6,
        comment: "Sağlık sektöründeki hassasiyetleri anlayarak etik ve etkili pazarlama stratejileri geliştirdiler. Hasta memnuniyeti ve klinik doluluk oranlarımız ciddi şekilde arttı.",
        rating: 5
    }
];

const Comments: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="comments-section">
            <div className="comments-container">
                <div className="comments-header">
                    <h2 className="comments-title">Müşterilerimiz Ne Diyor?</h2>
                    <p className="comments-subtitle">
                        Başarılı projelerimiz ve memnun müşterilerimizden gelen gerçek yorumlar
                    </p>
                </div>

                <div className="testimonials-slider">
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