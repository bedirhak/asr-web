import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
// Tüm referans resimlerini otomatik olarak içe aktar
const imageContext = import.meta.glob("../../assets/images/asr-refs/*.{png,jpg,jpeg,webp}", { eager: true, as: "url" }) as Record<string, string>;

// Resimleri ref numarasına göre sırala
const sortImagesByRefNumber = () => {
    const images = Object.values(imageContext);
    return images.sort((a, b) => {
        const getRefNumber = (imagePath: string) => {
            const fileNameWithExt = imagePath.split('/').pop() || '';
            const match = fileNameWithExt.match(/^ref-(\d+)/);
            return match ? parseInt(match[1]) : 999;
        };

        return getRefNumber(a) - getRefNumber(b);
    });
};

const refImages = sortImagesByRefNumber();

// Şirket isimleri - Dosya adlarını şirket isimlerine çevirme
const getCompanyName = (imagePath: string, index: number) => {
    // Dosya adını URL'den çek (ör: ref-12-tqqg3udc.png)
    const fileNameWithExt = imagePath.split('/').pop() || '';
    // Sadece ref-12 kısmını al
    const match = fileNameWithExt.match(/^(ref-\d+)/);
    const fileKey = match ? match[1] : '';

    const companyNames: { [key: string]: string } = {
        'ref-1': 'HAS OTOMOTİV - MERCEDES',
        'ref-2': 'BAŞAK TRAKTÖR',
        'ref-3': 'TOKİ - TOPLU KONUT İDARESİ BAŞKANLIĞI',
        'ref-4': 'ASKO HOLDİNG',
        'ref-5': 'OVEMMAK',
        'ref-6': 'YUTEK GEMİ İNŞA',
        'ref-7': 'ERFO',
        'ref-8': 'TELAS LASTİK',
        'ref-9': 'STARKGEN',
        'ref-10': 'KEYES MÜHENDİSLİK',
        'ref-11': 'PLATFORMDER',
        'ref-12': 'ERSAĞ',
        'ref-13': 'ASLAN KIRDAR SPOR ORGANİZASYONU A.Ş.',
        'ref-14': 'AKSİYON EVENT',
        'ref-15': 'SAKARYA GENÇLİK MERKEZİ',
        'ref-16': 'BİRLİK AKADEMİ',
        'ref-17': 'HEYA AKADEMİ',
        'ref-18': 'USUL OKULLARI',
        'ref-19': 'İTİNA EĞİTİM KURUMLARI',
        'ref-20': 'BİREY OKULLARI',
        'ref-21': 'SER ANAOKULU',
        'ref-22': 'DORE MİMİ ANAOKULU',
        'ref-23': 'VİTRA',
        'ref-24': 'AKTEPE AMBALAJ',
        'ref-25': 'EZE İNŞAAT A.Ş.',
        'ref-26': 'REMAX İKON',
        'ref-27': 'ALTINIŞIK MÜZİK',
        'ref-28': 'ÇEVRE VE ŞEHİRCİLİK BAKANLIĞI',
        'ref-29': 'AKÇANSA',
        'ref-30': 'LA VIVELLA BEAUTY',
        'ref-31': 'SARDİS',
        'ref-32': 'BİRLİK VAKFI',
        'ref-33': 'YAFA İNŞAAT',
        'ref-34': 'MKC GROUP',

    };

    return companyNames[fileKey] || `Şirket ${index + 1}`;
};

// Şirket URL slug'ı oluştur
const getCompanySlug = (imagePath: string) => {
    const fileNameWithExt = imagePath.split('/').pop() || '';
    const match = fileNameWithExt.match(/^(ref-\d+)/);
    const fileKey = match ? match[1] : '';

    const slugMapping: { [key: string]: string } = {
        'ref-1': 'has-otomotiv',
        'ref-2': 'basak-traktor',
        'ref-3': 'toki',
        'ref-4': 'asko-holding',
        'ref-5': 'ovemmak',
        'ref-6': 'yutek-gemi-insa',
        'ref-7': 'erfo',
        'ref-8': 'telas',
        'ref-9': 'starkgen',
        'ref-10': 'keyes-muhendislik',
        'ref-11': 'platformder',
        'ref-12': 'ersag',
        'ref-13': 'aslan-kirdar-spor',
        'ref-14': 'aksiyon-event',
        'ref-15': 'sakarya-genclik-merkezi',
        'ref-16': 'birlik-akademi',
        'ref-17': 'heya-akademi',
        'ref-18': 'usul-okullari',
        'ref-19': 'itina-egitim-kurumlari',
        'ref-20': 'birey-okullari',
        'ref-21': 'ser-anaokulu',
        'ref-22': 'dore-mimi-anaokulu',
        'ref-23': 'vitra',
        'ref-24': 'aktepe-ambalaj',
        'ref-25': 'eze-insaat',
        'ref-26': 'remax',
        'ref-27': 'altinisik-muzik',
        'ref-28': 'cevre-bakanliği',
        'ref-29': 'akcansa',
        'ref-30': 'la-vivella',
        'ref-31': 'sardis',
        'ref-32': 'birlik-vakfi',
        'ref-33': 'yafa',
        'ref-34': 'mkc',

    };

    return slugMapping[fileKey] || 'genel-referans';
};

const ReferencesPage: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleReferenceClick = (imagePath: string) => {
        const slug = getCompanySlug(imagePath);
        navigate(`/reference-detail/${slug}`);
    };

    return (
        <div className="references-page">
            <div className="references-hero">
                <div className="references-hero-container">
                    <h1 className="references-hero-title">
                        {t('ref.title')}
                    </h1>
                    <p className="references-hero-subtitle">
                        {t('ref.subtitle')}
                    </p>
                </div>
            </div>

            <div className="references-gallery">
                <div className="references-gallery-container">
                    <div className="references-grid">
                        {refImages.map((img, index) => (
                            <div
                                key={index}
                                className="reference-card"
                                onClick={() => handleReferenceClick(img)}
                                style={{ cursor: 'pointer' }}
                            >
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
                                        <div className="view-details">
                                            Detayları Gör
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
