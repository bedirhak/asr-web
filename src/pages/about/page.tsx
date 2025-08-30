import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaLightbulb, FaHandshake, FaRocket, FaUsers } from 'react-icons/fa';
import ContactUs from '../../components/ContactUs';

// Team photos
import bilalBeyPhoto from '../../assets/images/team/bilalBey.png';
import mustafaBeyPhoto from '../../assets/images/team/mustafaBey.png';
import yusufBeyPhoto from '../../assets/images/team/yusufBey.png';


const AboutPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="about-page">
            {/* Hero Section */}
            <div className="about-hero">
                <div className="about-hero-container">
                    <h1 className="about-hero-title">
                        {t('about.page.hero-title')}
                    </h1>
                    <p className="about-hero-subtitle">
                        {t('about.page.hero-subtitle')}
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="about-content">
                <div className="about-content-container">
                    <div className="about-section-grid">
                        <div className="about-text-section">
                            <h2 className="about-section-title">
                                {t('about.page.who-we-are')}
                            </h2>
                            <p className="about-section-text">
                                {t('about.page.who-we-are-text')}
                            </p>

                            <h3 className="about-subsection-title">
                                {t('about.page.our-mission')}
                            </h3>
                            <p className="about-section-text">
                                {t('about.page.our-mission-text')}
                            </p>

                            <h3 className="about-subsection-title">
                                {t('about.page.our-vision')}
                            </h3>
                            <p className="about-section-text">
                                {t('about.page.our-vision-text')}
                            </p>
                        </div>

                        <div className="about-stats-section">
                            <div className="about-stat">
                                <div className="about-stat-number">50+</div>
                                <div className="about-stat-label">{t('about.page.projects')}</div>
                            </div>
                            <div className="about-stat">
                                <div className="about-stat-number">10+</div>
                                <div className="about-stat-label">{t('about.page.years')}</div>
                            </div>
                            <div className="about-stat">
                                <div className="about-stat-number">97%</div>
                                <div className="about-stat-label">{t('about.page.satisfaction')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="about-values">
                <div className="about-values-container">
                    <h2 className="section-title">Değerlerimiz</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">
                                <FaLightbulb />
                            </div>
                            <h3 className="value-title">İnovasyon</h3>
                            <p className="value-description">
                                En son teknolojiler ve yaratıcı çözümlerle sektörde öncü olmayı hedefliyoruz.
                            </p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">
                                <FaHandshake />
                            </div>
                            <h3 className="value-title">Güvenilirlik</h3>
                            <p className="value-description">
                                Müşterilerimizle kurduğumuz güven ilişkisi, işimizin temel taşıdır.
                            </p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">
                                <FaRocket />
                            </div>
                            <h3 className="value-title">Kalite</h3>
                            <p className="value-description">
                                Her projede mükemmellik arayışımız, kaliteyi asla taviz vermeyiz.
                            </p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">
                                <FaUsers />
                            </div>
                            <h3 className="value-title">Ekip Çalışması</h3>
                            <p className="value-description">
                                Başarılarımızın arkasında güçlü ekip ruhu ve işbirliği vardır.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Timeline Section */}
            {/* <div className="about-timeline">
                <div className="about-timeline-container">
                    <h2 className="section-title">Yolculuğumuz</h2>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-year">2019</div>
                            <div className="timeline-content">
                                <h3>Kuruluş</h3>
                                <p>ASR Ajans olarak dijital dünyada ilk adımlarımızı attık.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-year">2020</div>
                            <div className="timeline-content">
                                <h3>Büyüme</h3>
                                <p>Ekibimizi genişlettik ve yeni hizmet alanlarına odaklandık.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-year">2022</div>
                            <div className="timeline-content">
                                <h3>Gelişim</h3>
                                <p>50+ başarılı projeye imza atarak sektörde söz sahibi olduk.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-year">2025</div>
                            <div className="timeline-content">
                                <h3>Bugün</h3>
                                <p>Teknoloji öncülüğünde müşteri memnuniyetini hedefleyerek yolumuza devam ediyoruz.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Team Section */}
            <div className="about-team">
                <div className="about-team-container">
                    <h2 className="section-title">Ekibimiz</h2>
                    <p className="section-subtitle">
                        Deneyimli ve tutkulu ekibimizle projelerinizi hayata geçiriyoruz.
                    </p>
                    <div className="team-grid">
                        <div className="team-member">
                            <div className="member-avatar">
                                <img src={bilalBeyPhoto} alt="Bilal Gökçe" className="avatar-image" />
                            </div>
                            <h3 className="member-name">Bilal Gökçe</h3>
                            <p className="member-role">Kurucu & CEO</p>
                            <p className="member-description">
                                10+ yıllık deneyimiyle grafik tasarım, fotoğraf, video prodüksiyon ve drone çekimlerinde uzman; yönetici vizyonuyla markalara güçlü görsel hikâyeler kazandırıyor.
                            </p>
                        </div>
                        <div className="team-member">
                            <div className="member-avatar">
                                <img src={mustafaBeyPhoto} alt="Mustafa Gökçe" className="avatar-image" />
                            </div>
                            <h3 className="member-name">Mustafa Gökçe</h3>
                            <p className="member-role">Finans Müdürü</p>
                            <p className="member-description">
                                30+ yıllık profesyonel deneyimiyle finans ve muhasebe alanında, analitik düşünce yapısı ve mükemmeliyetçi yaklaşımıyla öne çıkan bir yönetici.
                            </p>
                        </div>
                        <div className="team-member">
                            <div className="member-avatar">
                                <img src={yusufBeyPhoto} alt="Yusuf Gökçe" className="avatar-image" />
                            </div>
                            <h3 className="member-name">Yusuf Gökçe</h3>
                            <p className="member-role">İçerik Üreticisi</p>
                            <p className="member-description">
                                Güçlü çizim yeteneğini videografi ve fotoğrafçılıkla birleştirerek projelere fark yaratan, ilham verici içerikler üretiyor.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            {/* <div className="about-cta">
                <div className="about-cta-container">
                    <h2 className="cta-title">Birlikte Çalışmaya Hazır mısınız?</h2>
                    <p className="cta-subtitle">
                        Projelerinizi hayata geçirmek için bizimle iletişime geçin.
                    </p>
                    <div className="cta-buttons">
                        <button className="btn-primary">İletişime Geçin</button>
                        <button className="btn-secondary">Portfolyomuzu İnceleyin</button>
                    </div>
                </div>
            </div> */}
            <ContactUs />
        </div>
    );
};

export default AboutPage;
