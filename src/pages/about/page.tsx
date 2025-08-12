import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaLightbulb, FaHandshake, FaRocket, FaUsers, FaUser } from 'react-icons/fa';

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
                                <div className="about-stat-number">5+</div>
                                <div className="about-stat-label">{t('about.page.years')}</div>
                            </div>
                            <div className="about-stat">
                                <div className="about-stat-number">100%</div>
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
                                <div className="avatar-placeholder">
                                    <FaUser />
                                </div>
                            </div>
                            <h3 className="member-name">Ahmet Yılmaz</h3>
                            <p className="member-role">Kurucu & CEO</p>
                            <p className="member-description">
                                10+ yıllık deneyimle dijital pazarlama ve strateji alanında uzman.
                            </p>
                        </div>
                        <div className="team-member">
                            <div className="member-avatar">
                                <div className="avatar-placeholder">
                                    <FaUser />
                                </div>
                            </div>
                            <h3 className="member-name">Zeynep Kaya</h3>
                            <p className="member-role">Kreatif Direktör</p>
                            <p className="member-description">
                                Yaratıcı tasarım ve marka kimliği konularında 8 yıllık tecrübe.
                            </p>
                        </div>
                        <div className="team-member">
                            <div className="member-avatar">
                                <div className="avatar-placeholder">
                                    <FaUser />
                                </div>
                            </div>
                            <h3 className="member-name">Mehmet Demir</h3>
                            <p className="member-role">Teknik Direktör</p>
                            <p className="member-description">
                                Web geliştirme ve teknik çözümler konusunda 12 yıllık deneyim.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="about-cta">
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
            </div>
        </div>
    );
};

export default AboutPage;
