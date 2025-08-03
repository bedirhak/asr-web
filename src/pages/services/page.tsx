import React from 'react';
import { useTranslation } from 'react-i18next';

const ServicesPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="about-page">
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
        </div>
    );
};

export default ServicesPage;
