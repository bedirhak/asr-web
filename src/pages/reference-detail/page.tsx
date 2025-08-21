import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaPhone, FaWhatsapp, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

// Tüm referans resimlerini otomatik olarak içe aktar
const imageContext = import.meta.glob("../../assets/images/asr-refs/*.{png,jpg,jpeg,webp}", { eager: true, as: "url" }) as Record<string, string>;

// Resim URL'sini ref numarasından bul
const getImageUrl = (refNumber: string): string => {
    const imageEntry = Object.entries(imageContext).find(([path, _]) =>
        path.includes(`${refNumber}.`) || path.includes(`${refNumber}-`)
    );
    return imageEntry ? imageEntry[1] : '';
};

interface ReferenceProject {
    id: number;
    title: string;
    description: string;
    category: string;
    completionDate: string;
    location: string;
}

interface ReferenceDetail {
    id: number;
    companyName: string;
    companyLogo: string;
    companyDescription: string;
    summary: string;
    sector: string;
    collaboration: string;
    projects: ReferenceProject[];
    image: string;
}

const referenceDetails: { [key: string]: ReferenceDetail } = {
    "basak-traktor": {
        id: 1,
        companyName: "BAŞAK TRAKTÖR",
        companyLogo: "ref-1",
        companyDescription: "Tarım makineleri sektöründe faaliyet gösteren köklü bir firma olan Başak Traktör, yenilikçi çözümleriyle tarımsal verimliliği artırmaya odaklanmaktadır.",
        summary: "Başak Traktör ile yaptığımız işbirliğinde dijital pazarlama stratejileri geliştirerek markanın online görünürlüğünü artırdık. Tarım sektörüne yönelik özel tasarımlar ve kampanyalar ile hedef kitleye ulaşımı optimize ettik.",
        sector: "Tarım Makineleri",
        collaboration: "2022 - Devam Ediyor",
        projects: [
            {
                id: 1,
                title: "Kurumsal Web Sitesi",
                description: "Modern ve kullanıcı dostu web sitesi tasarımı",
                category: "Web Tasarım",
                completionDate: "Mart 2022",
                location: "Sakarya"
            },
            {
                id: 2,
                title: "Sosyal Medya Yönetimi",
                description: "Instagram ve Facebook hesaplarının profesyonel yönetimi",
                category: "Sosyal Medya",
                completionDate: "Nisan 2022",
                location: "Online"
            },
            {
                id: 3,
                title: "SEO Optimizasyonu",
                description: "Arama motoru optimizasyonu ve Google Ads kampanyaları",
                category: "Dijital Pazarlama",
                completionDate: "Mayıs 2022",
                location: "Online"
            }
        ],
        image: "ref-1"
    },
    "erfo": {
        id: 2,
        companyName: "ERFO",
        companyLogo: "ref-2",
        companyDescription: "Teknoloji sektöründe yenilikçi çözümler sunan ERFO, kurumsal yazılım geliştirme ve dijital dönüşüm projelerinde uzmanlaşmıştır.",
        summary: "ERFO ile gerçekleştirdiğimiz projelerde kurumsal kimlik çalışmaları, web tasarım ve dijital pazarlama stratejileri geliştirdik. Teknoloji odaklı yaklaşımımızla markanın dijital varlığını güçlendirdik.",
        sector: "Teknoloji",
        collaboration: "2021 - 2023",
        projects: [
            {
                id: 1,
                title: "Kurumsal Kimlik Tasarımı",
                description: "Logo, kartvizit ve kurumsal materyaller tasarımı",
                category: "Grafik Tasarım",
                completionDate: "Ağustos 2021",
                location: "İstanbul"
            },
            {
                id: 2,
                title: "E-ticaret Platformu",
                description: "Modern e-ticaret web sitesi geliştirimi",
                category: "Web Geliştirme",
                completionDate: "Ekim 2021",
                location: "Online"
            }
        ],
        image: "ref-2"
    },
    "platformder": {
        id: 3,
        companyName: "PLATFORMDER",
        companyLogo: "ref-3",
        companyDescription: "Platform ekonomisi ve dijital dönüşüm alanında faaliyet gösteren Platformder, inovasyonun öncüsü olarak sektörde liderlik yapmaktadır.",
        summary: "Platformder ile birlikte modern web tasarım çözümleri ve içerik stratejileri geliştirdik. Dijital platform yaklaşımıyla kullanıcı deneyimini ön planda tutarak projeleri hayata geçirdik.",
        sector: "Dijital Platform",
        collaboration: "2022",
        projects: [
            {
                id: 1,
                title: "Platform Web Sitesi",
                description: "Responsive ve modern platform web sitesi",
                category: "Web Tasarım",
                completionDate: "Haziran 2022",
                location: "Ankara"
            }
        ],
        image: "ref-3"
    },
    "remax": {
        id: 4,
        companyName: "REMAX",
        companyLogo: "ref-4",
        companyDescription: "Emlak sektöründe güvenilir hizmet veren Remax, müşteri memnuniyetini ön planda tutarak gayrimenkul danışmanlığında uzmanlaşmıştır.",
        summary: "Remax ile emlak sektörüne özel dijital pazarlama çözümleri geliştirdik. Emlak portföyünün online tanıtımı ve müşteri kazanım stratejileri üzerine çalıştık.",
        sector: "Emlak",
        collaboration: "2021 - 2022",
        projects: [
            {
                id: 1,
                title: "Emlak Portföy Sitesi",
                description: "Dinamik emlak portföy yönetim sistemi",
                category: "Web Geliştirme",
                completionDate: "Aralık 2021",
                location: "İstanbul"
            },
            {
                id: 2,
                title: "Dijital Pazarlama",
                description: "Facebook ve Instagram emlak reklamları",
                category: "Sosyal Medya",
                completionDate: "Şubat 2022",
                location: "Online"
            }
        ],
        image: "ref-4"
    },
    "yafa-insaat": {
        id: 5,
        companyName: "YAFA İNŞAAT",
        companyLogo: "ref-5",
        companyDescription: "İnşaat sektöründe kaliteli projeler üreten Yafa İnşaat, modern mimari anlayışı ve güvenilir hizmet yaklaşımıyla öne çıkmaktadır.",
        summary: "Yafa İnşaat ile inşaat sektörüne özel web tasarım ve tanıtım projeleri gerçekleştirdik. Proje portfolyolarının etkileyici sunumu ve müşteri güveninin artırılması üzerine odaklandık.",
        sector: "İnşaat",
        collaboration: "2022",
        projects: [
            {
                id: 1,
                title: "Kurumsal Web Sitesi",
                description: "Proje portföyü odaklı kurumsal site",
                category: "Web Tasarım",
                completionDate: "Temmuz 2022",
                location: "Sakarya"
            },
            {
                id: 2,
                title: "Proje Katalogları",
                description: "Dijital proje katalogları ve broşürler",
                category: "Grafik Tasarım",
                completionDate: "Ağustos 2022",
                location: "Sakarya"
            }
        ],
        image: "ref-5"
    },
    "aktepe-ambalaj": {
        id: 6,
        companyName: "AKTEPE AMBALAJ",
        companyLogo: "ref-6",
        companyDescription: "Ambalaj sektöründe kaliteli ürünler sunan Aktepe Ambalaj, sürdürülebilir ambalaj çözümleriyle çevre dostu yaklaşımını benimser.",
        summary: "Aktepe Ambalaj ile ambalaj sektörüne özel dijital çözümler geliştirdik. Ürün katalogları, web tasarım ve dijital pazarlama stratejileriyle markanın online varlığını güçlendirdik.",
        sector: "Ambalaj",
        collaboration: "2021",
        projects: [
            {
                id: 1,
                title: "Ürün Kataloğu Tasarımı",
                description: "Dijital ve basılı ürün katalogları",
                category: "Grafik Tasarım",
                completionDate: "Eylül 2021",
                location: "İstanbul"
            }
        ],
        image: "ref-6"
    },
    "dore-mimi-anaokulu": {
        id: 7,
        companyName: "DORE MİMİ ANAOKULU",
        companyLogo: "ref-7",
        companyDescription: "Çocukların gelişimini destekleyen eğitim yaklaşımıyla Dore Mimi Anaokulu, kaliteli okul öncesi eğitim hizmetleri sunmaktadır.",
        summary: "Dore Mimi Anaokulu ile eğitim sektörüne özel web tasarım ve tanıtım projeleri gerçekleştirdik. Ebeveyn iletişimi ve okul tanıtımı odaklı dijital çözümler geliştirdik.",
        sector: "Eğitim",
        collaboration: "2022",
        projects: [
            {
                id: 1,
                title: "Okul Web Sitesi",
                description: "Ebeveyn bilgilendirme sistemli web sitesi",
                category: "Web Tasarım",
                completionDate: "Haziran 2022",
                location: "İstanbul"
            },
            {
                id: 2,
                title: "Sosyal Medya İçerikleri",
                description: "Eğitici ve tanıtıcı sosyal medya içerikleri",
                category: "İçerik Üretimi",
                completionDate: "Temmuz 2022",
                location: "Online"
            }
        ],
        image: "ref-7"
    },
    "birlik-akademi": {
        id: 8,
        companyName: "BİRLİK AKADEMİ",
        companyLogo: "ref-8",
        companyDescription: "Profesyonel eğitim ve gelişim programları sunan Birlik Akademi, bireylerin kariyer hedeflerine ulaşmalarını destekler.",
        summary: "Birlik Akademi ile eğitim platformu geliştirme ve dijital öğrenme çözümleri üzerine çalıştık. Online kurs sistemi ve öğrenci yönetim platformları oluşturduk.",
        sector: "Eğitim",
        collaboration: "2021 - 2022",
        projects: [
            {
                id: 1,
                title: "E-öğrenme Platformu",
                description: "Online kurs ve eğitim yönetim sistemi",
                category: "Web Geliştirme",
                completionDate: "Kasım 2021",
                location: "Online"
            },
            {
                id: 2,
                title: "Mobil Uygulama",
                description: "iOS ve Android öğrenci uygulaması",
                category: "Mobil Geliştirme",
                completionDate: "Mart 2022",
                location: "Online"
            }
        ],
        image: "ref-8"
    },
    "birlik-vakfi": {
        id: 9,
        companyName: "BİRLİK VAKFI",
        companyLogo: "ref-9",
        companyDescription: "Sosyal sorumluluk projeleri ve toplumsal kalkınma alanında faaliyet gösteren Birlik Vakfı, sürdürülebilir gelişim hedeflerine odaklanır.",
        summary: "Birlik Vakfı ile sosyal sorumluluk projelerinin tanıtımı ve bağışçı yönetim sistemleri geliştirdik. Toplumsal farkındalık kampanyaları ve dijital bağış platformları oluşturduk.",
        sector: "Sosyal Sorumluluk",
        collaboration: "2022",
        projects: [
            {
                id: 1,
                title: "Vakıf Web Sitesi",
                description: "Bağış sistemi entegreli kurumsal site",
                category: "Web Geliştirme",
                completionDate: "Mayıs 2022",
                location: "Ankara"
            }
        ],
        image: "ref-9"
    },
    "heya-akademi": {
        id: 10,
        companyName: "HEYA AKADEMİ",
        companyLogo: "ref-10",
        companyDescription: "Yenilikçi eğitim metodolojileri ile öğrencilerin potansiyelini ortaya çıkaran Heya Akademi, kişiselleştirilmiş öğrenme deneyimleri sunar.",
        summary: "Heya Akademi ile modern eğitim teknolojileri ve öğrenci takip sistemleri geliştirdik. İnteraktif öğrenme platformları ve ebeveyn iletişim araçları oluşturduk.",
        sector: "Eğitim",
        collaboration: "2022 - Devam Ediyor",
        projects: [
            {
                id: 1,
                title: "Öğrenme Yönetim Sistemi",
                description: "LMS platformu ve öğrenci takip sistemi",
                category: "Web Geliştirme",
                completionDate: "Ağustos 2022",
                location: "İstanbul"
            },
            {
                id: 2,
                title: "Mobil Öğrenci Uygulaması",
                description: "Ders takip ve ödev yönetim uygulaması",
                category: "Mobil Geliştirme",
                completionDate: "Ekim 2022",
                location: "Online"
            }
        ],
        image: "ref-10"
    },
    "vitra": {
        id: 11,
        companyName: "VİTRA",
        companyLogo: "ref-11",
        companyDescription: "Banyo ve seramik sektöründe dünya markası olan Vitra, yenilikçi tasarımları ve kaliteli ürünleriyle sektörde liderdir.",
        summary: "Vitra ile gerçekleştirdiğimiz projelerde dijital pazarlama stratejileri ve ürün tanıtım kampanyaları geliştirdik. Markanın online görünürlüğünü artırmak için çok kanallı yaklaşım uyguladık.",
        sector: "Banyo & Seramik",
        collaboration: "2021",
        projects: [
            {
                id: 1,
                title: "Dijital Pazarlama Kampanyası",
                description: "Ürün lansmanı için kapsamlı dijital kampanya",
                category: "Dijital Pazarlama",
                completionDate: "Nisan 2021",
                location: "İstanbul"
            },
            {
                id: 2,
                title: "İçerik Üretimi",
                description: "Ürün fotoğrafları ve tanıtım videoları",
                category: "İçerik Üretimi",
                completionDate: "Mayıs 2021",
                location: "İstanbul"
            }
        ],
        image: "ref-11"
    },
    "ser-anaokulu": {
        id: 12,
        companyName: "SER ANAOKULU",
        companyLogo: "ref-12",
        companyDescription: "Çocuk gelişimi odaklı eğitim yaklaşımıyla Ser Anaokulu, kaliteli okul öncesi eğitim hizmetleri sunarak aileler için güvenilir bir tercihtir.",
        summary: "Ser Anaokulu ile eğitim sektörüne özel web tasarım ve aile iletişim sistemleri geliştirdik. Okul etkinliklerinin tanıtımı ve ebeveyn bilgilendirme platformları oluşturduk.",
        sector: "Eğitim",
        collaboration: "2022",
        projects: [
            {
                id: 1,
                title: "Okul Yönetim Sistemi",
                description: "Ebeveyn-öğretmen iletişim platformu",
                category: "Web Geliştirme",
                completionDate: "Eylül 2022",
                location: "İstanbul"
            }
        ],
        image: "ref-12"
    },
    "has-otomotiv": {
        id: 13,
        companyName: "HAS OTOMOTİV",
        companyLogo: "ref-13",
        companyDescription: "Otomotiv sektöründe kaliteli hizmet veren Has Otomotiv, araç bakım ve onarım hizmetlerinde uzmanlaşmış güvenilir bir firmadır.",
        summary: "Has Otomotiv ile otomotiv sektörüne özel dijital çözümler geliştirdik. Servis randevu sistemi, müşteri takip platformu ve dijital pazarlama stratejileri oluşturduk.",
        sector: "Otomotiv",
        collaboration: "2021 - 2022",
        projects: [
            {
                id: 1,
                title: "Servis Randevu Sistemi",
                description: "Online randevu ve müşteri takip sistemi",
                category: "Web Geliştirme",
                completionDate: "Kasım 2021",
                location: "Sakarya"
            },
            {
                id: 2,
                title: "Kurumsal Web Sitesi",
                description: "Modern ve kullanıcı dostu kurumsal web sitesi",
                category: "Web Tasarım",
                completionDate: "Aralık 2021",
                location: "Sakarya"
            }
        ],
        image: "ref-13"
    },
    "altinisik-muzik": {
        id: 14,
        companyName: "ALTINIŞIK MÜZİK",
        companyLogo: "ref-14",
        companyDescription: "Müzik eğitimi ve enstrüman satışı alanında faaliyet gösteren Altınışık Müzik, müzik severlerin buluşma noktasıdır.",
        summary: "Altınışık Müzik ile müzik sektörüne özel e-ticaret platformu ve müzik eğitim sistemi geliştirdik. Online müzik dersleri ve enstrüman satış platformu oluşturduk.",
        sector: "Müzik & Eğitim",
        collaboration: "2022",
        projects: [
            {
                id: 1,
                title: "E-ticaret Platformu",
                description: "Enstrüman satış ve kiralama sistemi",
                category: "E-ticaret",
                completionDate: "Temmuz 2022",
                location: "İstanbul"
            },
            {
                id: 2,
                title: "Online Ders Sistemi",
                description: "Uzaktan müzik eğitim platformu",
                category: "Web Geliştirme",
                completionDate: "Ağustos 2022",
                location: "Online"
            }
        ],
        image: "ref-14"
    },
    "toki": {
        id: 15,
        companyName: "TOKİ",
        companyLogo: "ref-15",
        companyDescription: "Toplu Konut İdaresi olarak TOKİ, uygun fiyatlı konut projeleri ile vatandaşların konut sahibi olma hayallerini gerçekleştirmektedir.",
        summary: "TOKİ ile kamu kurumu dijital dönüşüm projeleri gerçekleştirdik. Konut başvuru sistemleri, proje tanıtım platformları ve vatandaş bilgilendirme sistemleri geliştirdik.",
        sector: "Kamu",
        collaboration: "2021",
        projects: [
            {
                id: 1,
                title: "Proje Tanıtım Sistemi",
                description: "Konut projelerinin interaktif tanıtım platformu",
                category: "Web Geliştirme",
                completionDate: "Haziran 2021",
                location: "Ankara"
            }
        ],
        image: "ref-15"
    }
};

// URL slug'ını referans anahtarına çevir
const getRefKey = (slug: string): string => {
    return slug.toLowerCase().replace(/-/g, '-');
};

const ReferenceDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    const refKey = slug ? getRefKey(slug) : '';
    const reference = referenceDetails[refKey];

    // Referans bulunamazsa ana sayfaya yönlendir
    if (!reference) {
        return (
            <div className="reference-not-found">
                <div className="container">
                    <h2>Referans bulunamadı</h2>
                    <button onClick={() => navigate('/references')} className="btn-primary">
                        Referanslara Dön
                    </button>
                </div>
            </div>
        );
    }

    const handleCall = () => {
        window.open('tel:+905434160222', '_self');
    };

    const handleWhatsApp = () => {
        const message = `Merhaba, ${reference.companyName} referansı hakkında bilgi almak istiyorum.`;
        const whatsappUrl = `https://wa.me/905434160222?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="reference-detail-page">
            {/* Hero Section */}
            <div className="reference-hero">
                <div className="reference-hero-container">
                    <button
                        className="back-button"
                        onClick={() => navigate('/references')}
                    >
                        <FaArrowLeft /> Referanslara Dön
                    </button>

                    <div className="reference-hero-content">
                        <div className="reference-hero-text">
                            <h1 className="reference-hero-title">
                                {reference.companyName}
                            </h1>
                            <p className="reference-hero-subtitle">
                                {reference.sector} • {reference.collaboration}
                            </p>
                            <p className="reference-hero-description">
                                {reference.companyDescription}
                            </p>

                            <div className="hero-buttons">
                                <button className="btn-primary" onClick={handleCall}>
                                    <FaPhone /> Hemen Ara
                                </button>
                                <button className="btn-secondary" onClick={handleWhatsApp}>
                                    <FaWhatsapp /> WhatsApp
                                </button>
                            </div>
                        </div>

                        <div className="reference-hero-image">
                            <img
                                src={getImageUrl(reference.image)}
                                alt={reference.companyName}
                                className="reference-main-image"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Summary Section */}
            <div className="reference-summary">
                <div className="reference-summary-container">
                    <div className="summary-content">
                        <h2>İşbirliği Özeti</h2>
                        <p>{reference.summary}</p>
                    </div>
                </div>
            </div>

            {/* Projects Section */}
            <div className="reference-projects">
                <div className="reference-projects-container">
                    <h2>Yapılan İşler</h2>
                    <div className="projects-grid">
                        {reference.projects.map((project) => (
                            <div key={project.id} className="project-card">
                                <div className="project-header">
                                    <h3>{project.title}</h3>
                                    <span className="project-category">{project.category}</span>
                                </div>
                                <p className="project-description">{project.description}</p>
                                <div className="project-meta">
                                    <div className="project-date">
                                        <FaCalendar />
                                        <span>{project.completionDate}</span>
                                    </div>
                                    <div className="project-location">
                                        <FaMapMarkerAlt />
                                        <span>{project.location}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="reference-cta">
                <div className="reference-cta-container">
                    <h2>Sizin de Projeniz İçin Birlikte Çalışalım</h2>
                    <p>Benzer başarılı projeler gerçekleştirmek için hemen iletişime geçin.</p>
                    <div className="cta-buttons">
                        <button className="btn-primary" onClick={handleCall}>
                            <FaPhone /> Hemen Ara
                        </button>
                        <button className="btn-secondary" onClick={handleWhatsApp}>
                            <FaWhatsapp /> WhatsApp ile İletişim
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReferenceDetailPage;
