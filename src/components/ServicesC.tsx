
import React from "react";
import { useTranslation } from "react-i18next";
import Container from "./Container";
import { Link } from 'react-router-dom';
import { FaVideo, FaCamera } from 'react-icons/fa';
import { MdFlightTakeoff } from 'react-icons/md';

import { useInView } from './useInView';


const ServicesC: React.FC = () => {
    const { t } = useTranslation();

    // Her kart için ayrı ref ve inView
    // threshold'u yükselterek kartların ekranın ortasına daha çok yaklaştığında görünmesini sağla
    const [ref1, inView1] = useInView<HTMLDivElement>({ threshold: 0.4 });
    const [ref2, inView2] = useInView<HTMLDivElement>({ threshold: 0.4 });
    const [ref3, inView3] = useInView<HTMLDivElement>({ threshold: 0.4 });

    return (
        <Container>
            <div className="about-services text-center about-services-container">
                <h2 className="about-services-title">
                    {t('about.page.services-title')}
                </h2>
                <div className="about-services-grid mb-5">
                    <div
                        ref={ref1}
                        className={`about-service-card slide-in-left${inView1 ? ' in-view' : ''}`}
                    >
                        <div className="service-icon">
                            <FaVideo />
                        </div>
                        <h3>{t('about.page.service1.title')}</h3>
                        <p>{t('about.page.service1.description')}</p>
                    </div>
                    <div
                        ref={ref2}
                        className={`about-service-card slide-in${inView2 ? ' in-view' : ''}`}
                    >
                        <div className="service-icon">
                            <FaCamera />
                        </div>
                        <h3>{t('about.page.service2.title')}</h3>
                        <p>{t('about.page.service2.description')}</p>
                    </div>
                    <div
                        ref={ref3}
                        className={`about-service-card slide-in-right${inView3 ? ' in-view' : ''}`}
                    >
                        <div className="service-icon">
                            <MdFlightTakeoff />
                        </div>
                        <h3>{t('about.page.service3.title')}</h3>
                        <p>{t('about.page.service3.description')}</p>
                    </div>
                </div>
                <Link to="/services" className="about-btn-link">
                    <button className="about-btn">
                        <span className="about-btn-text">
                            {t('servicesPage.direct-button')}
                        </span>
                        <div className="about-btn-light"></div>
                    </button>
                </Link>
            </div>
        </Container>
    );
};

export default ServicesC;