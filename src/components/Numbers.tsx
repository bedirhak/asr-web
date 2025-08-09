import React, { useState, useEffect, useRef } from 'react';
import { FaFolder, FaCalendarAlt, FaHeart } from 'react-icons/fa';

interface NumberStat {
    id: number;
    value: number;
    suffix: string;
    title: string;
    icon: React.ReactNode;
    description: string;
}

const Numbers: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0]);
    const sectionRef = useRef<HTMLDivElement>(null);

    const stats: NumberStat[] = [
        {
            id: 1,
            value: 50,
            suffix: '+',
            title: 'Proje',
            icon: <FaFolder />,
            description: 'Tamamlanan Başarılı Projeler'
        },
        {
            id: 2,
            value: 10,
            suffix: '',
            title: 'Yıllık Tecrübe',
            icon: <FaCalendarAlt />,
            description: 'Sektördeki Uzmanlık Süremiz'
        },
        {
            id: 3,
            value: 100,
            suffix: '%',
            title: 'Müşteri Memnuniyeti',
            icon: <FaHeart />,
            description: 'Memnun Müşteri Oranımız'
        }
    ];

    // Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    startAnimation();
                }
            },
            {
                threshold: 0.3, // %30'u görünür olduğunda tetikle
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [isVisible]);

    // Animasyon fonksiyonu
    const startAnimation = () => {
        const duration = 4000; // 4 saniye
        const steps = 60; // 60 FPS
        const interval = duration / steps;

        stats.forEach((stat, index) => {
            let currentStep = 0;
            const increment = stat.value / steps;

            const timer = setInterval(() => {
                currentStep++;
                const currentValue = Math.min(increment * currentStep, stat.value);

                setAnimatedValues(prev => {
                    const newValues = [...prev];
                    newValues[index] = Math.round(currentValue);
                    return newValues;
                });

                if (currentStep >= steps) {
                    clearInterval(timer);
                }
            }, interval);
        });
    };

    return (
        <div
            ref={sectionRef}
            className={`numbers-section ${isVisible ? 'visible' : ''}`}
        >
            <div className="numbers-container">
                <div className="numbers-header">
                    <h2 className="numbers-title">Rakamlarla ASR Ajans</h2>
                    <p className="numbers-subtitle">
                        Güvenilir iş ortağınız olmanın gururunu yaşıyoruz
                    </p>
                </div>

                <div className="numbers-grid">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.id}
                            className={`number-card ${isVisible ? 'animate' : ''}`}
                            style={{
                                '--animation-delay': `${index * 0.2}s`
                            } as React.CSSProperties}
                        >
                            <div className="number-icon">
                                {stat.icon}
                                <div className="icon-glow"></div>
                            </div>

                            <div className="number-content">
                                <div className="number-value">
                                    <span className="animated-number">
                                        {animatedValues[index]}
                                    </span>
                                    <span className="number-suffix">{stat.suffix}</span>
                                </div>

                                <h3 className="number-title">{stat.title}</h3>
                                <p className="number-description">{stat.description}</p>
                            </div>


                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Numbers;
