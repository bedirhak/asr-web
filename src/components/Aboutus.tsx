import React from 'react';
import { useInView } from './useInView';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import '../styles/_aboutS.scss';

const Aboutus: React.FC = () => {
    const { t } = useTranslation();

    const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.4 });
    return (
        <div
            ref={ref}
            className={`about-section slide-in${inView ? ' in-view' : ''}`}
        >
            <div className="about-container">
                <div className="about-small-title">
                    {t('about.small-title')}
                </div>

                <h2 className="about-main-title">
                    {t('about.main-title')}
                </h2>

                <p className="about-description">
                    {t('about.description')}
                </p>

                <Link to="/about" className="about-btn-link">
                    <button className="about-btn">
                        <span className="about-btn-text">
                            {t('about.button-text')}
                        </span>
                        <div className="about-btn-light"></div>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Aboutus;
