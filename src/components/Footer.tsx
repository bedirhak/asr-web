import Logo from "../assets/images/logoWhite.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./Container";
import {
  FaPhone,
  FaEnvelope,
  FaAddressBook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="modern-footer">
      <div className="footer-main">
        <Container className="footer-container">
          <div className="footer-content">
            {/* Brand Section */}
            <div className="footer-brand">
              <div className="footer-logo">
                <img src={Logo} alt="Asr Ajans Logo" />
              </div>
              <p className="footer-description">
                {t('footer-text')}
              </p>
              <div className="footer-social">
                <a href="#" className="social-link">
                  <FaInstagram />
                </a>
                <a href="#" className="social-link">
                  <BsTwitterX />
                </a>
                <a href="#" className="social-link">
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links">
              <h4 className="footer-title">Hızlı Bağlantılar</h4>
              <ul className="footer-nav">
                <li>
                  <NavLink to="/home" className="footer-link">
                    {t('menu-home')}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="footer-link">
                    {t('menu-about')}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services" className="footer-link">
                    {t('menu-services')}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="footer-link">
                    {t('menu-contact')}
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-services">
              <h4 className="footer-title">Hizmetlerimiz</h4>
              <ul className="footer-nav">
                <li><a href="#" className="footer-link">Drone Çekimleri</a></li>
                <li><a href="#" className="footer-link">Tanıtım Filmleri</a></li>
                <li><a href="#" className="footer-link">Sosyal Medya İçerikleri</a></li>
                <li><a href="#" className="footer-link">Kurumsal Çekimler</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-contact">
              <h4 className="footer-title">{t('menu-contact')}</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <div className="contact-details">
                    <span className="contact-label">{t('phone')}</span>
                    <a href="tel:+905320540584" className="contact-value">
                      +(90) 537 592 50 55
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <div className="contact-details">
                    <span className="contact-label">{t('email')}</span>
                    <a href="mailto:info@asrajans.com" className="contact-value">
                      info@asrajans.com
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <FaAddressBook className="contact-icon" />
                  <div className="contact-details">
                    <span className="contact-label">{t('address')}</span>
                    <span className="contact-value">
                      Sakarya, Türkiye
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <Container className="footer-container">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <span>© 2025 Asr Ajans. Tüm hakları saklıdır.</span>
            </div>
            <div className="footer-credits">
              <span>Profesyonel görsel içerik prodüksiyon ajansı</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
