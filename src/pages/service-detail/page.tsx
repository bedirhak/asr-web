import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaPhone, FaWhatsapp, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

// YouTube thumbnail generator function
const getYouTubeThumbnail = (url: string): string => {
    const videoId = url.includes('watch?v=')
        ? url.split('watch?v=')[1]?.split('&')[0]
        : url.split('/').pop();

    if (videoId) {
        // YouTube'dan high quality thumbnail al
        return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }

    // Fallback thumbnail
    return "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=300&fit=crop";
};

interface WorkExample {
    id: number;
    title: string;
    description: string;
    type: 'video' | 'image';
    url: string;
    thumbnail?: string;
}

interface ServiceDetail {
    id: number;
    title: string;
    description: string;
    fullDescription: string;
    features: string[];
    process: string[];
    image: string;
    workExamples: WorkExample[];
}

const serviceDetails: { [key: string]: ServiceDetail } = {
    "drone-cekimleri": {
        id: 1,
        title: "Drone Çekimleri",
        description: "Havadan profesyonel fotoğraf ve video çekimleri ile projelerinizi farklı açılardan tanıtın.",
        fullDescription: "Drone çekimleri ile işletmenizi, etkinliklerinizi veya projelerinizi havadan görüntüleyerek etkileyici içerikler oluşturuyoruz. Profesyonel drone pilotlarımız ve yüksek çözünürlüklü kameralarımızla her açıdan mükemmel görüntüler elde ediyoruz.",
        features: [
            "4K Ultra HD video çekimi",
            "RAW format fotoğraf çekimi",
            "Profesyonel drone pilotu",
            "Çekim izin süreçleri dahil",
            "Post prodüksiyon hizmetleri"
        ],
        process: [
            "Keşif ve planlama",
            "İzin süreçlerinin tamamlanması",
            "Çekim günü hazırlıkları",
            "Profesyonel çekim gerçekleştirme",
            "Post prodüksiyon ve teslim"
        ],
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800",
        workExamples: [
            {
                id: 1,
                title: "Drone Gemi Çekimi",
                description: "İstanbul'un havadan çekilen tanıtım videosu",
                type: "video",
                url: "https://www.youtube.com/watch?v=RTqWGifZPSc",
                thumbnail: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400"
            },
            {
                id: 2,
                title: "Otel Tanıtımı",
                description: "5 yıldızlı otel kompleksi havadan çekimi",
                type: "video",
                url: "https://www.youtube.com/watch?v=Oft3zL17aHQ",
                thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400"
            },
            {
                id: 3,
                title: "Gayrimenkul Çekimi",
                description: "Villa projesi havadan görünüm",
                type: "video",
                url: "https://www.youtube.com/watch?v=KC6Bx-JFlSw",
                thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400"
            }
        ]
    },
    "tanitim-filmleri": {
        id: 2,
        title: "Tanıtım Filmleri",
        description: "Şirketinizi ve hizmetlerinizi en iyi şekilde tanıtan profesyonel tanıtım filmleri.",
        fullDescription: "Markanızın hikayesini anlatan, değerlerinizi ve hizmetlerinizi en etkili şekilde sunan profesyonel tanıtım filmleri üretiyoruz. Senaryo aşamasından final montaja kadar tüm süreçleri profesyonel ekibimizle yönetiyoruz.",
        features: [
            "Senaryo yazımı",
            "Profesyonel çekim ekibi",
            "Yüksek kalite video prodüksiyon",
            "Müzik ve ses tasarımı",
            "Çoklu format teslimi"
        ],
        process: [
            "Briefinf ve senaryo hazırlığı",
            "Çekim planlaması",
            "Profesyonel çekim",
            "Kurgu ve post prodüksiyon",
            "Final onay ve teslim"
        ],
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800",
        workExamples: [
            {
                id: 1,
                title: "Kurumsal Tanıtım",
                description: "Teknoloji şirketi kurumsal tanıtım filmi",
                type: "video",
                url: "",
                thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400"
            },
            {
                id: 2,
                title: "Ürün Lansmanı",
                description: "Yeni ürün tanıtım kampanyası",
                type: "video",
                url: "",
                thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400"
            },
            {
                id: 3,
                title: "Hizmet Tanıtımı",
                description: "Dijital hizmetler tanıtım serisi",
                type: "video",
                url: "",
                thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400"
            }
        ]
    },
    "sosyal-medya-cekilmeri": {
        id: 3,
        title: "Sosyal Medya Çekimleri",
        description: "Sosyal medya platformları için özel olarak tasarlanmış görsel içerikler",
        fullDescription: "Sosyal medya hesaplarınızın dikkat çekmesi ve takipçi etkileşimini artırması için profesyonel fotoğraf ve video çekimleri yapıyoruz. Instagram, Facebook, TikTok ve diğer platformlar için optimize edilmiş içerikler üretiyoruz.",
        features: [
            "Instagram Stories ve Feed için optimizasyon",
            "Profesyonel lighting ve kompozisyon",
            "Lifestyle ve moda çekimleri",
            "Product placement çekimleri",
            "Hızlı teslimat süreci"
        ],
        process: [
            "Marka analizi ve konsept geliştirme",
            "Çekim planlaması ve lokasyon belirleme",
            "Profesyonel çekim gerçekleştirme",
            "Post-prodüksiyon ve renk düzeltme",
            "Platform optimizasyonu ve teslimat"
        ],
        image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop&crop=center",
        workExamples: [
            {
                id: 1,
                title: "Fashion Brand Instagram",
                description: "Moda markası sosyal medya içerik serisi",
                type: "video",
                url: "",
                thumbnail: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop"
            },
            {
                id: 2,
                title: "Restaurant Content",
                description: "Restoran sosyal medya videoları",
                type: "video",
                url: "",
                thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"
            }
        ]
    },
    "reklam-filmleri": {
        id: 4,
        title: "Reklam Filmleri",
        description: "Markanızın hikayesini anlatan etkileyici reklam filmleri",
        fullDescription: "Markanızın değerlerini ve mesajlarını hedef kitlenize etkili bir şekilde ileten profesyonel reklam filmleri üretiyoruz. Konseptten final montaja kadar tüm süreçleri yönetiyoruz.",
        features: [
            "Yaratıcı konsept geliştirme",
            "4K çözünürlükte çekim",
            "Profesyonel oyuncu kadrosu",
            "Sinematik görüntü kalitesi",
            "Müzik ve ses tasarımı"
        ],
        process: [
            "Brief ve hedef analizi",
            "Senaryo yazımı ve storyboard",
            "Ön prodüksiyon planlama",
            "Profesyonel çekim",
            "Montaj ve post-prodüksiyon"
        ],
        image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&h=600&fit=crop&crop=center",
        workExamples: [
            {
                id: 1,
                title: "Teknoloji Reklamı",
                description: "İnovatif teknoloji ürünü reklam filmi",
                type: "video",
                url: "",
                thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop"
            },
            {
                id: 2,
                title: "Otomotiv Kampanyası",
                description: "Lüks araç markası reklam serisi",
                type: "video",
                url: "",
                thumbnail: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=400&h=300&fit=crop"
            }
        ]
    },
    "urun-fotografcilik": {
        id: 5,
        title: "Ürün Fotoğrafçılığı",
        description: "E-ticaret ve katalog için profesyonel ürün fotoğrafları",
        fullDescription: "E-ticaret siteleriniz ve basılı materyalleriniz için yüksek kaliteli ürün fotoğrafları çekiyoruz. Ürünlerinizin en iyi açıdan görünmesini sağlayarak satış potansiyelini artırıyoruz.",
        features: [
            "E-ticaret için beyaz fon çekimleri",
            "Lifestyle ve kullanım görseleri",
            "360 derece ürün çekimleri",
            "Detay ve makro çekimler",
            "Çoklu format teslimat"
        ],
        process: [
            "Ürün analizi ve çekim planı",
            "Stüdyo kurulumu ve ışık düzeni",
            "Detaylı ürün çekimi",
            "Post-prodüksiyon işlemleri",
            "Format optimizasyonu ve teslimat"
        ],
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=600&fit=crop&crop=center",
        workExamples: [
            {
                id: 1,
                title: "Mücevher Koleksiyonu",
                description: "Lüks mücevher ürün katalogu çekimi",
                type: "video",
                url: "",
                thumbnail: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop"
            },
            {
                id: 2,
                title: "Elektronik Ürünler",
                description: "E-ticaret teknoloji ürünleri",
                type: "video",
                url: "",
                thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop"
            }
        ]
    },
    "fpv-drone-cekimi": {
        id: 6,
        title: "FPV Drone Çekimi",
        description: "Dinamik ve etkileyici FPV drone görüntüleri",
        fullDescription: "First Person View (FPV) drone teknolojisi ile sinematik açılar ve dinamik hareketler yakalıyoruz. Geleneksel drone çekimlerinden çok daha etkileyici ve sinematik sonuçlar elde ediyoruz.",
        features: [
            "Sinematik kamera hareketleri",
            "4K kalitede çekim",
            "İç mekan ve dış mekan çekimler",
            "Hızlı geçişler ve akrobatik hareketler",
            "Profesyonel stabilizasyon"
        ],
        process: [
            "Lokasyon analizi ve uçuş planı",
            "Güvenlik önlemleri ve izin süreçleri",
            "FPV çekim gerçekleştirme",
            "Görüntü stabilizasyonu",
            "Color grading ve final montaj"
        ],
        image: "https://images.unsplash.com/photo-1551808525-2628e560b27d?w=800&h=600&fit=crop&crop=center",
        workExamples: [
            {
                id: 1,
                title: "Fabrika Tanıtımı",
                description: "Endüstriyel tesis FPV çekimi",
                type: "video",
                url: "",
                thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop"
            },
            {
                id: 2,
                title: "Festival Coverage",
                description: "Müzik festivali dinamik çekimi",
                type: "video",
                url: "",
                thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop"
            }
        ]
    }
    // Diğer hizmetler buraya eklenecek...
};

const ServiceDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    const service = slug ? serviceDetails[slug] : null;

    if (!service) {
        return (
            <div className="service-detail-error">
                <h2>Hizmet bulunamadı</h2>
                <button onClick={() => navigate('/services')} className="btn-primary">
                    Hizmetlere Dön
                </button>
            </div>
        );
    }

    const handleWhatsAppClick = () => {
        const message = `Merhaba! ${service.title} hizmetiniz hakkında bilgi almak istiyorum.`;
        const url = `https://wa.me/905076071454?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    const openVideoModal = (videoUrl: string) => {
        // YouTube URL'ini embed formatına çevir
        const videoId = videoUrl.includes('watch?v=')
            ? videoUrl.split('watch?v=')[1]?.split('&')[0]
            : videoUrl.split('/').pop();

        if (videoId) {
            const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0`;
            setSelectedVideo(embedUrl);
        }
    };

    const closeVideoModal = () => {
        setSelectedVideo(null);
    };

    // ESC tuşu ile modal kapatma
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && selectedVideo) {
                closeVideoModal();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [selectedVideo]);

    return (
        <div className="service-detail-page">
            {/* Hero Section */}
            <div className="service-detail-hero">
                <div className="service-detail-hero-container">
                    <button
                        className="back-button"
                        onClick={() => navigate('/services')}
                    >
                        <FaArrowLeft /> Hizmetlere Dön
                    </button>
                    <div className="hero-content">
                        <h1 className="service-detail-title">{service.title}</h1>
                        <p className="service-detail-subtitle">{service.description}</p>
                    </div>
                    <div className="hero-image">
                        <img src={service.image} alt={service.title} />
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="service-detail-content">
                <div className="service-detail-container">
                    <div className="content-grid">
                        {/* Main Content */}
                        <div className="main-content">
                            <section className="description-section">
                                <h2>Hizmet Detayları</h2>
                                <p>{service.fullDescription}</p>
                            </section>

                            <div className='services-details-container'>

                                <section className="features-section">
                                    <h2>Neler Sunuyoruz?</h2>
                                    <ul className="features-list">
                                        {service.features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                </section>

                                <section className="process-section">
                                    <h2>Çalışma Sürecimiz</h2>
                                    <div className="process-steps">
                                        {service.process.map((step, index) => (
                                            <div key={index} className="process-step">
                                                <div className="step-number">{index + 1}</div>
                                                <div className="step-content">{step}</div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>

                        </div>

                        {/* Sidebar */}
                        <div className="sidebar-content">
                            <div className="contact-card">
                                <h3>Hemen Başlayalım!</h3>
                                <p>Bu hizmet için teklif almak ister misiniz?</p>
                                <div className="contact-buttons">
                                    <button
                                        className="whatsapp-btn"
                                        onClick={handleWhatsAppClick}
                                    >
                                        <FaWhatsapp /> WhatsApp
                                    </button>
                                    <button className="phone-btn">
                                        <FaPhone /> Ara
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Örnek Çalışmalar - Ana Bölüm */}
                    <div className="work-examples-section">
                        <div className="container">
                            <h2>Örnek Çalışmalarımız</h2>
                            {/* <p>Bu hizmet kapsamında gerçekleştirdiğimiz başarılı projelerden örnekler</p> */}
                            <div className="examples-grid">
                                {service.workExamples.map((example) => (
                                    <div key={example.id} className="example-card">
                                        <div
                                            className="example-thumbnail"
                                            onClick={() => example.url && openVideoModal(example.url)}
                                            style={{ cursor: example.url ? 'pointer' : 'default' }}
                                        >
                                            <img
                                                src={example.type === 'video' && example.url
                                                    ? getYouTubeThumbnail(example.url)
                                                    : example.thumbnail
                                                }
                                                alt={example.title}
                                                onError={(e) => {
                                                    // Eğer YouTube thumbnail yüklenemezse fallback kullan
                                                    e.currentTarget.src = example.thumbnail || "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=300&fit=crop";
                                                }}
                                            />
                                            {example.type === 'video' && (
                                                <div className="play-overlay">
                                                    <div className="play-button">
                                                        ▶
                                                    </div>
                                                    <span className="video-text">Video İzle</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="example-content">
                                            <h4>{example.title}</h4>
                                            <p>{example.description}</p>
                                            <div className="example-actions">
                                                {example.type === 'video' && (
                                                    <button
                                                        className="watch-btn"
                                                        onClick={() => example.url && openVideoModal(example.url)}
                                                        disabled={!example.url}
                                                    >
                                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M8 5v14l11-7z" />
                                                        </svg>
                                                        İzle
                                                    </button>
                                                )}
                                                <button className="info-btn">
                                                    <FaExternalLinkAlt /> Detay
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* YouTube Video Ekleme Formu - Geliştirme aşamasında */}
                            {/* <div className="add-video-placeholder">
                                <p>💡 YouTube videoları yakında burada görüntülenecek</p>
                                <small>Video URL'lerini admin panelinden ekleyebileceksiniz</small>
                            </div> */}
                        </div>
                    </div>

                    {/* Sidebar - Daha kompakt */}
                    <div className="sidebar-section">
                        <div className="container">
                            <div className="contact-card">
                                <h3>Teklif Al</h3>
                                <p>Bu hizmet için teklif almak ister misiniz?</p>
                                <div className="contact-buttons">
                                    <button
                                        className="whatsapp-btn"
                                        onClick={handleWhatsAppClick}
                                    >
                                        <FaWhatsapp /> WhatsApp
                                    </button>
                                    <button className="phone-btn">
                                        <FaPhone /> Ara
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            {/* Video Modal */}
            {
                selectedVideo && (
                    <div className="video-modal-overlay" onClick={closeVideoModal}>
                        <div className="video-modal-container" onClick={(e) => e.stopPropagation()}>
                            <button className="video-modal-close" onClick={closeVideoModal}>
                                <FaTimes />
                            </button>
                            <div className="video-iframe-wrapper">
                                <iframe
                                    src={selectedVideo}
                                    title="Video Player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    );
};

export default ServiceDetailPage;
