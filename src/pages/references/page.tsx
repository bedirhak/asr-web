import React from 'react';
import { useTranslation } from 'react-i18next';
// Tüm referans resimlerini otomatik olarak içe aktar
const imageContext = import.meta.glob("../../assets/images/asr-refs/*.{png,jpg,jpeg,webp}", { eager: true, as: "url" }) as Record<string, string>;
const refImages = Object.values(imageContext);

// Şirket isimleri - Dosya adlarını şirket isimlerine çevirme
const getCompanyName = (imagePath: string, index: number) => {
    // Dosya adını URL'den çek (ör: ref-12-tqqg3udc.png)
    const fileNameWithExt = imagePath.split('/').pop() || '';
    // Sadece ref-12 kısmını al
    const match = fileNameWithExt.match(/^(ref-\d+)/);
    const fileKey = match ? match[1] : '';

    const companyNames: { [key: string]: string } = {
        'ref-1': 'BAŞAK TRAKTÖR',
        'ref-2': 'ERFO',
        'ref-3': 'PLATFORMDER',
        'ref-4': 'REMAX',
        'ref-5': 'YAFA İNŞAAT',
        'ref-6': 'AKTEPE AMBALAJ',
        'ref-7': 'DORE MİMİ ANAOKULU',
        'ref-8': 'BİRLİK AKADEMİ',
        'ref-9': 'BİRLİK VAKFI',
        'ref-10': 'HEYA AKADEMİ',
        'ref-11': 'VİTRA',
        'ref-12': 'SER ANAOKULU',
        'ref-13': 'HAS OTOMOTİV',
        'ref-14': 'ALTINIŞIK MÜZİK',
        'ref-15': 'TOKİ',
        'ref-16': 'EZE İNŞAAT A.Ş.',
        'ref-17': 'AKSİYON EVENT',
        'ref-18': 'KEYES ENGINEERING',
        'ref-19': 'SARDİS',
        'ref-20': 'SAKARYA GENÇLİK MERKEZİ',
        'ref-21': 'STARKGEN',
        'ref-22': 'USUL OKULLARI',
        'ref-23': 'İTİNA EĞİTİM KURUMLARI',
        'ref-24': 'BİREY OKULLARI',
        'ref-25': 'ASKO HOLDİNG',
        'ref-26': 'AKÇANSA',
        'ref-27': 'ERSAĞ',
        'ref-28': 'TÜRKİYE CUMHURİYETİ ÇEVRE, ŞEHİRCİLİK VE İKLİM DEĞİŞİKLİĞİ BAKANLIĞI'
    };

    return companyNames[fileKey] || `Şirket ${index + 1}`;
};

const ReferencesPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="references-page">
            <div className="about-hero">
                <div className="about-hero-container">
                    <h1 className="about-hero-title">
                        {t('ref.title')}
                    </h1>
                    <p className="about-hero-subtitle">
                        {t('ref.subtitle')}
                    </p>
                </div>
            </div>

            <div className="references-gallery">
                <div className="references-gallery-container">
                    <div className="references-grid">
                        {refImages.map((img, index) => (
                            <div key={index} className="reference-card">
                                <div className="reference-image-wrapper">
                                    <img
                                        src={img}
                                        alt={`Referans ${index + 1}`}
                                        className="reference-image"
                                    />
                                    <div className="reference-overlay">
                                        <div className="company-name">
                                            {getCompanyName(img, index)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReferencesPage;
