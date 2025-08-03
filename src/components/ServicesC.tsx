
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Container from "./Container";
import { Link } from 'react-router-dom';


const ServicesC: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Container>
            <div className="about-services">
                <h2 className="about-services-title">
                    {t('about.page.services-title')}
                </h2>
                <div className="about-services-grid mb-5">
                    <div className="about-service-card">
                        <h3>{t('about.page.service1.title')}</h3>
                        <p>{t('about.page.service1.description')}</p>
                    </div>
                    <div className="about-service-card">
                        <h3>{t('about.page.service2.title')}</h3>
                        <p>{t('about.page.service2.description')}</p>
                    </div>
                    <div className="about-service-card">
                        <h3>{t('about.page.service3.title')}</h3>
                        <p>{t('about.page.service3.description')}</p>
                    </div>
                </div>
                <Link to="/services" className="about-btn-link">
                    <button className="about-btn">
                        <span className="about-btn-text">
                            {t('services.direct-button')}
                        </span>
                        <div className="about-btn-light"></div>
                    </button>
                </Link>
            </div>
        </Container>
    );
};

export default ServicesC;