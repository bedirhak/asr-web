import React from 'react';
import { useTranslation } from 'react-i18next';
import './references.scss'
// Tüm referans resimlerini otomatik olarak içe aktar
const imageContext = import.meta.glob("../../assets/images/asr-refs/*.{png,jpg,jpeg,webp}", { eager: true, as: "url" }) as Record<string, string>;
const refImages = Object.values(imageContext);

// Şirket isimleri - Dosya adlarını şirket isimlerine çevirme
const getCompanyName = (imagePath: string, index: number) => {
    const fileName = imagePath.split('/').pop()?.split('.')[0];

    // Bilinen şirket isimleri (yazabildiğim kadarını ekleyeceğim)
    const companyNames: { [key: string]: string } = {
        'ref-1': 'Başak Traktör',
        'ref-2': 'Erfo',
        'ref-3': 'Platformder',
        'ref-4': 'Remax',
        'ref-5': 'Yafa İnşaat',
        'ref-6': 'Aktepe Ambalaj',
        'ref-7': 'Dore Mimi Anaokulu',
        'ref-8': 'Birlik Akademi',
        'ref-9': 'Birlik Vakfı',
        'ref-10': 'Hey Akademi',
        'ref-11': 'Vitra',
        'ref-12': 'Ser Anaokulu',
        'ref-13': 'Has Otomotiv',
        'ref-14': 'Altınışık Müzik',
        'ref-15': 'Toki',
        'ref-16': 'Eze İnşaat A.Ş.',
        'ref-17': 'Aksiyon Event',
        'ref-18': 'Keyes Engineering',
        'ref-19': 'Sardis',
        'ref-20': 'Sakarya Gençlik Merkezi',
        'ref-21': 'StarkGen',
        'ref-22': 'Usul Okulları',
        'ref-23': 'İtina Eğitim Kurumları',
        'ref-24': 'Birey Okulları',
        'ref-25': 'Asko Holding',
        'ref-26': 'AkçanSA',
        'ref-27': 'Ersağ',
        'ref-28': 'Türkiye Cumhuriyeti - Çevre, Şehircilik ve İklim Değişikliği Bakanlığı'
        // Diğer isimleri sen elle ekleyebilirsin
    };

    return companyNames[fileName || ''] || `Şirket ${index + 1}`;
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
