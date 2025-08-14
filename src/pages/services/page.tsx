import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FaVideo, FaCamera, FaHome, FaCode, FaPalette, FaTv, FaBox, FaCalendarAlt, FaPlane, FaEdit, FaBuilding, FaStreetView } from 'react-icons/fa';
import { MdFlightTakeoff } from 'react-icons/md';
import VerticleText from '../../components/VerticleText';

interface Service {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    image: string;
    slug: string;
}

const services: Service[] = [
    {
        id: 1,
        title: "Drone Çekimleri",
        description: "Havadan profesyonel fotoğraf ve video çekimleri ile projelerinizi farklı açılardan tanıtın.",
        icon: <MdFlightTakeoff />,
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400",
        slug: "drone-cekimleri"
    },
    {
        id: 2,
        title: "Tanıtım Filmleri",
        description: "Şirketinizi ve hizmetlerinizi en iyi şekilde tanıtan profesyonel tanıtım filmleri.",
        icon: <FaVideo />,
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400",
        slug: "tanitim-filmleri"
    },
    {
        id: 3,
        title: "Sosyal Medya Çekimleri",
        description: "Sosyal medya platformlarınız için özel olarak hazırlanmış içerikler ve çekimler.",
        icon: <FaCamera />,
        image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400",
        slug: "sosyal-medya-cekimleri"
    },
    {
        id: 4,
        title: "Emlak Çekimleri",
        description: "Drone + iç mekan profesyonel fotoğraf/video ile emlak projelerinizi en iyi şekilde sergileyin.",
        icon: <FaHome />,
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400",
        slug: "emlak-cekimleri"
    },
    {
        id: 5,
        title: "Web Sitesi Tasarımı",
        description: "SEO uyumlu, mobil uyumlu ve hızlı web siteleri ile dijital varlığınızı güçlendirin.",
        icon: <FaCode />,
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400",
        slug: "web-sitesi-tasarimi"
    },
    {
        id: 6,
        title: "Grafik Tasarım",
        description: "Logo, kartvizit, kurumsal kimlik ve afiş tasarımlarıyla markanızı öne çıkarın.",
        icon: <FaPalette />,
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400",
        slug: "grafik-tasarim"
    },
    {
        id: 7,
        title: "Reklam Filmleri",
        description: "TV, YouTube, Instagram için profesyonel reklam içerikleri üretiyoruz.",
        icon: <FaTv />,
        image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400",
        slug: "reklam-filmleri"
    },
    {
        id: 8,
        title: "Ürün Fotoğrafçılığı",
        description: "E-ticaret, katalog ve sosyal medya için profesyonel ürün fotoğrafçılığı.",
        icon: <FaBox />,
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400",
        slug: "urun-fotografciligi"
    },
    {
        id: 9,
        title: "Etkinlik Çekimleri",
        description: "Fuar, açılış, lansman, konser gibi etkinliklerinizi profesyonelce kayıt altına alın.",
        icon: <FaCalendarAlt />,
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
        slug: "etkinlik-cekimleri"
    },
    {
        id: 10,
        title: "FPV Drone Çekimleri",
        description: "Dinamik, sinematik ve hızlı geçişlerle FPV drone çekimleri.",
        icon: <FaPlane />,
        image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=400",
        slug: "fpv-drone-cekimleri"
    },
    {
        id: 11,
        title: "Video Post-Prodüksiyon",
        description: "Kurgu, renk düzenleme, ses miksajı ile videolarınızı mükemmelleştirin.",
        icon: <FaEdit />,
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400",
        slug: "video-post-produksiyon"
    },
    {
        id: 12,
        title: "Kurumsal Video",
        description: "Şirket içi eğitim, iş güvenliği, tanıtım videoları ile kurumsal iletişiminizi güçlendirin.",
        icon: <FaBuilding />,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400",
        slug: "kurumsal-video"
    },
    {
        id: 13,
        title: "360° Sanal Tur",
        description: "Google Street View ve web siteleri için 360° sanal tur çekimleri.",
        icon: <FaStreetView />,
        image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400",
        slug: "sanal-tur"
    }
];

const ServicesPage: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleServiceClick = (slug: string) => {
        navigate(`/service-detail/${slug}`);
    };

    return (
        <div className="services-page">
            <div className="about-hero">
                <div className="about-hero-container">
                    <h1 className="about-hero-title">
                        {t('servicesPage.page-title')}
                    </h1>
                    <p className="about-hero-subtitle">
                        {t('servicesPage.subtitle')}
                    </p>
                </div>
            </div>

            {/* <VerticleText /> */}

            {/* Services Grid */}
            <div className="services-content">
                <div className="services-container">
                    {/* <h2 className="services-section-title">Hizmetlerimiz</h2>
                    <p className="services-section-subtitle">
                        Dijital dünyada size özel çözümler sunuyoruz
                    </p> */}

                    <div className="services-grid">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="service-card"
                                onClick={() => handleServiceClick(service.slug)}
                            >
                                <div className="service-image">
                                    <img src={service.image} alt={service.title} />
                                    <div className="service-overlay">
                                        <div className="service-icon">
                                            {service.icon}
                                        </div>
                                    </div>
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-description">{service.description}</p>
                                    <button className="service-button">
                                        Detayları İncele
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
