import React, { useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

// Tüm referans resimlerini otomatik olarak içe aktar
const imageContext = import.meta.glob("../assets/images/asr-refs/*.{png,jpg,jpeg,webp}", { eager: true, as: "url" }) as Record<string, string>;

// Production'da doğru base URL ile path'leri düzelt
const refImages = Object.values(imageContext).map(path => {
    // Eğer path zaten base URL ile başlıyorsa, düzeltmeye gerek yok
    if (path.startsWith('http') || path.startsWith('/asr-web/')) {
        return path;
    }
    // Eğer sadece /src/ ile başlıyorsa, base URL'i ekle
    if (path.startsWith('/src/')) {
        const basePath = import.meta.env.PROD ? '/asr-web' : '';
        return basePath + path;
    }
    return path;
});


// Referans resimleri ile slug'ları eşleştirmek için mapping
const getSlugFromImagePath = (imagePath: string): string => {
    const imageToSlugMap: { [key: string]: string } = {
        'ref-1.png': 'has-otomotiv',
        'ref-2.png': 'basak-traktor',
        'ref-3.png': 'toki',
        'ref-4.png': 'asko-holding',
        'ref-5.png': 'ovemmak',
        'ref-6.png': 'yutek-gemi-insa',
        'ref-7.png': 'erfo',
        'ref-8.png': 'telas',
        'ref-9.png': 'starkgen',
        'ref-10.png': 'keyes-muhendislik',
        'ref-11.png': 'platformder',
        'ref-12.png': 'ersag',
        'ref-13.png': 'aslan-kirdar-spor',
        'ref-14.png': 'aksiyon-event',
        'ref-15.png': 'sakarya-genclik-merkezi',
        'ref-16.png': 'birlik-akademi',
        'ref-17.png': 'heya-akademi',
        'ref-18.png': 'usul-okullari',
        'ref-19.png': 'itina-egitim-kurumlari',
        'ref-20.png': 'birey-okullari',
        'ref-21.png': 'ser-anaokulu',
        'ref-22.png': 'dore-mimi-anaokulu',
        'ref-23.png': 'vitra',
        'ref-24.png': 'aktepe-ambalaj',
        'ref-25.png': 'eze-insaat',
        'ref-26.png': 'remax',
        'ref-27.png': 'altinisik-muzik',
        'ref-28.png': 'cevre-bakanliği',
        'ref-29.png': 'akcansa',
        'ref-30.png': 'la-vivella',
        'ref-31.png': 'sardis',
        'ref-32.png': 'birlik-vakfi',
        'ref-33.png': 'yafa',
        'ref-34.png': 'mkc',
        'ref-35.png': 'semizoglu-traktor'
    };

    // Dosya adını path'den çıkar
    const fileName = imagePath.split('/').pop() || '';
    return imageToSlugMap[fileName] || 'aydin-holding'; // Varsayılan olarak genel sayfa
};

const References: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        // Animasyonu başlat
        track.style.animationPlayState = 'running';

        // Mouse hover'da animasyonu durdur, mouse leave'de başlat
        const handleMouseEnter = () => {
            if (track) {
                track.style.animationPlayState = 'paused';
            }
        };

        const handleMouseLeave = () => {
            if (track) {
                track.style.animationPlayState = 'running';
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('mouseenter', handleMouseEnter);
            container.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                container.removeEventListener('mouseenter', handleMouseEnter);
                container.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, []);

    return (
        <div className="d-flex flex-column align-items-center position-relative">
            <div className="references-blur-left"></div>
            <div className="references-blur-right"></div>
            <div className="references-slide-container">
                {/* <h2 className="about-services-title">
                    Referanslarımız
                </h2> */}
                <div className="references-container" ref={containerRef}>
                    <div className="references-track" ref={trackRef}>
                        {/* İlk set */}
                        {refImages.map((img: any, index) => {
                            let imgs = img.split("/").pop().split("-");
                            const slug = getSlugFromImagePath(`${imgs[0]}-${imgs[1]}.png`);

                            return (
                                <div
                                    key={`set1-${index}`}
                                    className="reference-item"
                                    onClick={() => navigate(`/reference-detail/${slug}`)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <img src={img} alt={`Referans ${index + 1}`} />
                                </div>
                            );
                        })}
                        {/* İkinci set (sonsuz kayma etkisi için) */}
                        {refImages.map((img: any, index) => {
                            let imgs = img.split("/").pop().split("-");
                            const slug = getSlugFromImagePath(`${imgs[0]}-${imgs[1]}.png`);

                            return (
                                <div
                                    key={`set2-${index}`}
                                    className="reference-item"
                                    onClick={() => navigate(`/reference-detail/${slug}`)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <img src={img} alt={`Referans ${index + 1}`} />
                                </div>
                            );
                        })}
                        {/* Üçüncü set (daha düzgün sonsuz efekt için) */}
                        {refImages.map((img: any, index) => {
                            let imgs = img.split("/").pop().split("-");
                            const slug = getSlugFromImagePath(`${imgs[0]}-${imgs[1]}.png`);

                            return (
                                <div
                                    key={`set3-${index}`}
                                    className="reference-item"
                                    onClick={() => navigate(`/reference-detail/${slug}`)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <img src={img} alt={`Referans ${index + 1}`} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            {/* <Link to="/references" className="about-btn-link mb-3">
                <button className="about-btn">
                    <span className="about-btn-text">
                        Referanslarımız
                    </span>
                    <div className="about-btn-light"></div>
                </button>
            </Link> */}
        </div>

    );
};

export default References;
