import Logo from "../assets/images/asrLogo.png";
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
    <>
      <footer className="cg-footer">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="cg-footer-container ">
            <div>
              <img
                src={Logo}
                alt="Contra Logo"
                className="mb-2 cg-footer-image"
              />
              <p className="cg-footer-desc">
                &nbsp;&nbsp;&nbsp;&nbsp;{t('footer-text')}
              </p>
            </div>
            <div className="cg-footer-navs">
              <NavLink to="/home" className="cg-color-red d-block">
                {t('menu-home')}
              </NavLink>
              <NavLink to="/institutional" className="cg-color-red d-block">
                {t('menu-institutional')}
              </NavLink>
              <NavLink to="/capabilities" className="cg-color-red d-block">
                {t('menu-capabilities')}
              </NavLink>
              {/* <NavLink to="/contact" className="cg-color-red d-block">
                Arge Inovasyon
              </NavLink> */}
              <NavLink to="/contact" className="cg-color-red d-block">
                {t('menu-contact')}
              </NavLink>
            </div>
            <div>
              <div className="cg-footer-contact">
                <h5 className="cg-color-red">{t('menu-contact')}</h5>
                <div>
                  <div>
                    <p>
                      <div className="d-flex align-items-center gap-2">
                        <div>
                          <FaPhone className="cg-color-red" />
                        </div>
                        <span className="cg-color-red">{t('phone')}:</span>
                      </div>
                      <a href="tel:+905320540584">+(90) 532 054 05 84</a>
                    </p>
                    <p>
                      <div className="d-flex align-items-center gap-2">
                        <div>
                          <FaEnvelope className="cg-color-red" />
                        </div>
                        <span className="cg-color-red">{t('email')}:</span>
                      </div>
                      <span>executive@contracorporate.com</span>
                    </p>
                    <p>
                      <div className="d-flex align-items-center gap-2 ">
                        <div className="align-self-start">
                          <FaAddressBook className="cg-color-red" />
                        </div>
                        <span className="cg-color-red align-self-start">
                          {t('address')}:
                        </span>
                      </div>
                      <span>
                        Maliköy Başkent OSB mah. 20.Cad. No: 12G
                        Sincan/Ankara/Türkiye
                      </span>
                    </p>
                  </div>
                  <div>
                    <ul className="cg-footer-social">
                      <li>
                        <a>
                          <FaInstagram />
                        </a>
                      </li>
                      <li>
                        <a>
                          <BsTwitterX />
                        </a>
                      </li>
                      <li>
                        <a>
                          <FaLinkedin />
                        </a>
                      </li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </footer>
      <div
        className="cg-footer-rights d-flex justify-content-between text-white p-3"
        style={{ fontSize: "16px" }}
      >
        <div>
          {t('rights')}
        </div>
        <div>© 2024 - Contra Group</div>
      </div>
    </>
  );
};

export default Footer;
