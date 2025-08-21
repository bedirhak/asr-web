import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
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

// Şirket URL slug'ı oluştur
const getCompanySlug = (imagePath: string) => {
    const fileNameWithExt = imagePath.split('/').pop() || '';
    const match = fileNameWithExt.match(/^(ref-\d+)/);
    const fileKey = match ? match[1] : '';

    const slugMapping: { [key: string]: string } = {
        'ref-1': 'basak-traktor',
        'ref-2': 'erfo',
        'ref-3': 'platformder',
        'ref-4': 'remax',
        'ref-5': 'yafa-insaat',
        'ref-6': 'aktepe-ambalaj',
        'ref-7': 'dore-mimi-anaokulu',
        'ref-8': 'birlik-akademi',
        'ref-9': 'birlik-vakfi',
        'ref-10': 'heya-akademi',
        'ref-11': 'vitra',
        'ref-12': 'ser-anaokulu',
        'ref-13': 'has-otomotiv',
        'ref-14': 'altinisik-muzik',
        'ref-15': 'toki',
        'ref-16': 'eze-insaat',
        'ref-17': 'aksiyon-event',
        'ref-18': 'keyes-engineering',
        'ref-19': 'sardis',
        'ref-20': 'sakarya-genclik-merkezi',
        'ref-21': 'starkgen',
        'ref-22': 'usul-okullari',
        'ref-23': 'itina-egitim-kurumlari',
        'ref-24': 'birey-okullari',
        'ref-25': 'asko-holding',
        'ref-26': 'akcansa',
        'ref-27': 'ersag',
        'ref-28': 'cevre-bakanliği'
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
