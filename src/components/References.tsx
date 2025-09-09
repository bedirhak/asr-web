import React, { useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

// Manuel import yöntemi - daha güvenilir
import ref1 from '../assets/images/asr-refs/ref-1.png';
import ref2 from '../assets/images/asr-refs/ref-2.png';
import ref3 from '../assets/images/asr-refs/ref-3.png';
import ref4 from '../assets/images/asr-refs/ref-4.png';
import ref5 from '../assets/images/asr-refs/ref-5.png';
import ref6 from '../assets/images/asr-refs/ref-6.png';
import ref7 from '../assets/images/asr-refs/ref-7.png';
import ref8 from '../assets/images/asr-refs/ref-8.png';
import ref9 from '../assets/images/asr-refs/ref-9.png';
import ref10 from '../assets/images/asr-refs/ref-10.png';
import ref11 from '../assets/images/asr-refs/ref-11.png';
import ref12 from '../assets/images/asr-refs/ref-12.png';
import ref13 from '../assets/images/asr-refs/ref-13.png';
import ref14 from '../assets/images/asr-refs/ref-14.png';
import ref15 from '../assets/images/asr-refs/ref-15.png';
import ref16 from '../assets/images/asr-refs/ref-16.png';
import ref17 from '../assets/images/asr-refs/ref-17.png';
import ref18 from '../assets/images/asr-refs/ref-18.png';
import ref19 from '../assets/images/asr-refs/ref-19.png';
import ref20 from '../assets/images/asr-refs/ref-20.png';
import ref21 from '../assets/images/asr-refs/ref-21.png';
import ref22 from '../assets/images/asr-refs/ref-22.png';
import ref23 from '../assets/images/asr-refs/ref-23.png';
import ref24 from '../assets/images/asr-refs/ref-24.png';
import ref25 from '../assets/images/asr-refs/ref-25.png';
import ref26 from '../assets/images/asr-refs/ref-26.png';
import ref27 from '../assets/images/asr-refs/ref-27.png';
import ref28 from '../assets/images/asr-refs/ref-28.png';
import ref29 from '../assets/images/asr-refs/ref-29.png';
import ref30 from '../assets/images/asr-refs/ref-30.png';
import ref31 from '../assets/images/asr-refs/ref-31.png';
import ref32 from '../assets/images/asr-refs/ref-32.png';
import ref33 from '../assets/images/asr-refs/ref-33.png';
import ref34 from '../assets/images/asr-refs/ref-34.png';
import ref35 from '../assets/images/asr-refs/ref-35.png';

// Referans resimlerini sıralı array olarak tanımla
const refImages = [
    ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10,
    ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18, ref19, ref20,
    ref21, ref22, ref23, ref24, ref25, ref26, ref27, ref28, ref29, ref30,
    ref31, ref32, ref33, ref34, ref35
];


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
                        {refImages.map((img, index) => {
                            const slug = getSlugFromImagePath(img);
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
                        {refImages.map((img, index) => {
                            const slug = getSlugFromImagePath(img);
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
                        {refImages.map((img, index) => {
                            const slug = getSlugFromImagePath(img);
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
