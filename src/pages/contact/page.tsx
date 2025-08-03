import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../../components/Container';

const ContactPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="about-page">
            <div className="about-hero">
                <div className="about-hero-container">
                    <h1 className="about-hero-title">
                        {t('contactPage.title')}
                    </h1>
                    <p className="about-hero-subtitle">
                        {t('contactPage.subtitle')}
                    </p>
                </div>
            </div>

            {/* <Container>
                <div className="contact-content">
                    <div className="contact-grid">
                        
                        <div className="contact-form-section">
                            <h2 className="contact-section-title">Bize Ulaşın</h2>
                            <form className="contact-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="firstName">İsim</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastName">Soyisim</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="phone">Telefon</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">E-Mail</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Konu</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Mesaj</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="contact-submit-btn">
                                    <span>Mesaj Gönder</span>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </form>
                        </div>

                        <div className="contact-info-section">
                            <h2 className="contact-section-title">İletişime Geçin</h2>

                            <div className="contact-info-cards">
                                <div className="contact-info-card">
                                    <div className="contact-info-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.03 7.03 1 12 1S21 5.03 21 10Z" stroke="currentColor" strokeWidth="2" />
                                            <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div className="contact-info-content">
                                        <h3>Adres</h3>
                                        <p>Sakarya Üniversitesi Teknokent<br />Esentepe Kampüsü, Sakarya</p>
                                    </div>
                                </div>

                                <div className="contact-info-card">
                                    <div className="contact-info-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 16.92V19.92C22 20.97 21.07 21.88 20.02 21.88C9.11 21.88 0.12 12.89 0.12 1.98C0.12 0.93 1.03 0 2.08 0H5.08C6.13 0 7.04 0.91 7.04 1.96C7.04 3.98 7.42 5.9 8.12 7.64C8.47 8.34 8.33 9.18 7.77 9.74L6.26 11.25C7.69 14.15 9.85 16.31 12.75 17.74L14.26 16.23C14.82 15.67 15.66 15.53 16.36 15.88C18.1 16.58 20.02 16.96 22.04 16.96C23.09 16.96 24 17.87 24 18.92V21.92Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <div className="contact-info-content">
                                        <h3>Telefon</h3>
                                        <p>+90 532 123 45 67</p>
                                    </div>
                                </div>

                                <div className="contact-info-card">
                                    <div className="contact-info-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" />
                                            <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div className="contact-info-content">
                                        <h3>E-Mail</h3>
                                        <p>info@asrajans.com</p>
                                    </div>
                                </div>

                                <div className="contact-info-card">
                                    <div className="contact-info-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                            <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div className="contact-info-content">
                                        <h3>Çalışma Saatleri</h3>
                                        <p>Pazartesi - Cuma: 09:00 - 18:00<br />Cumartesi: 09:00 - 15:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container> */}

            <div className="abc-contact-content">
                <div className="abc-contact-form">
                    <h6 className="abc-contact-form-title">İletişim Formu</h6>
                    <p className="abc-contact-form-desc">Görüşme talebinde bulunmak veya hizmetlerimiz hakkında detaylı bilgi
                        almak için bizimle iletişime
                        geçin.</p>
                    <form>
                        <div className="abc-form-two">
                            <div className="abc-input-container">
                                <label htmlFor="name">Ad Soyad</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="abc-input-container">
                                <label htmlFor="mail">E-Posta</label>
                                <input type="text" id="mail" name="mail" required />
                            </div>
                        </div>
                        <div className="abc-form-two">
                            <div className="abc-input-container">
                                <label htmlFor="phone">Telefon Numarası</label>
                                <input type="text" id="phone" name="phone" required />
                            </div>
                            <div className="abc-input-container">
                                <label htmlFor="subject">Konu</label>
                                <input type="text" id="subject" name="subject" required />
                            </div>
                        </div>
                        <div>
                            <div className="abc-input-container">
                                <label htmlFor="message">Mesaj</label>
                                <textarea id="message" name="message" className="message" required style={{ resize: 'none' }}></textarea>
                            </div>
                        </div>
                        <button type="submit" className="abc-submit-button">Gönder</button>
                    </form>
                </div>
                <div className="abc-contact-info">
                    <h6 className="abc-contact-form-title">İletişim Bilgileri</h6>
                    <div className="abc-contact-info-card">
                        <i className="fa-light fa-map-location-dot"></i>
                        <h6>Adres:</h6>
                        <p>Kurtuluş Mahallesi, Atik Sk. No:5 Daire:5, Durusu İş Merkezi - Adapazarı / Sakarya</p>
                    </div>
                    <div className="abc-contact-info-card">
                        <i className="fa-thin fa-phone-office"></i>
                        <h6>Telefon:</h6>
                        <p>
                            <a href="tel:+905375925055" style={{ textDecoration: 'none' }}>
                                +(90) 537 592 50 55
                            </a>
                        </p>
                    </div>
                    <div className="abc-contact-info-card">
                        <i className="fa-light fa-envelopes"></i>
                        <h6>E-Posta:</h6>
                        <p>
                            <a href="mailto:info@asrajans.com" style={{ textDecoration: 'none' }}>
                                info@asrajans.com
                            </a>
                        </p>
                    </div>
                    <div className="abc-contact-info-card">
                        <i className="fa-light fa-calendar-check"></i>
                        <h6>Çalışma Saatleri:</h6>
                        <p>Pazartesi - Pazar: 09:00 - 20:00</p>
                    </div>
                </div>
            </div>

            <div className="abc-map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d755.2891192303767!2d30.396158619798364!3d40.780573959691274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sKurtulu%C5%9F%20Mahallesi%2C%20Atik%20Sk.%20No%3A5%20Daire%3A5%2C%20Durusu%20%C4%B0%C5%9F%20Merkezi%2054100%20-%20Adapazar%C4%B1%20%2F%20Sakarya!5e0!3m2!1str!2str!4v1754244145809!5m2!1str!2str"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
};

export default ContactPage;
