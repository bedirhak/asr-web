import React, { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Social: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const socialLinks = [
        {
            name: 'Instagram',
            url: 'https://instagram.com/asrajans',
            icon: <FaInstagram />,
            color: '#E4405F',
            hoverColor: '#C13584'
        },
        {
            name: 'Facebook',
            url: 'https://facebook.com/asrajans',
            icon: <FaFacebookF />,
            color: '#1877F2',
            hoverColor: '#166FE5'
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/asrajans',
            icon: <FaTwitter />,
            color: '#1DA1F2',
            hoverColor: '#0D8BD9'
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/company/asrajans',
            icon: <FaLinkedinIn />,
            color: '#0077B5',
            hoverColor: '#005A8B'
        },
        {
            name: 'YouTube',
            url: 'https://youtube.com/@asrajans',
            icon: <FaYoutube />,
            color: '#FF0000',
            hoverColor: '#CC0000'
        },
        {
            name: 'WhatsApp',
            url: 'https://wa.me/905375925055',
            icon: <FaWhatsapp />,
            color: '#25D366',
            hoverColor: '#1EBE56'
        }
    ];

    const handleToggle = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsExpanded(!isExpanded);
    };

    const handleSocialClick = (e: React.MouseEvent, url: string, name: string) => {
        e.stopPropagation();
        // Analytics tracking burada olabilir
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className={`social-widget ${isExpanded ? 'expanded' : 'collapsed'}`}>
            {/* Ana toggle butonu */}
            <button
                className="social-toggle"
                onClick={handleToggle}
                aria-label={isExpanded ? 'Sosyal medya linklerini kapat' : 'Sosyal medya linklerini aç'}
            >
                <i className={`fas ${isExpanded ? 'fa-times' : 'fa-share-alt'}`}></i>
                {!isExpanded ?
                    <span className="toggle-text">
                        Takip Et
                    </span> :
                    <RxCross1 />
                }
            </button>

            {/* Sosyal medya linkleri */}
            <div className="social-links">
                {socialLinks.map((social, index) => (
                    <button
                        key={social.name}
                        className="social-link"
                        onClick={(e) => handleSocialClick(e, social.url, social.name)}
                        style={{
                            '--social-color': social.color,
                            '--social-hover-color': social.hoverColor,
                            '--animation-delay': `${index * 0.1}s`
                        } as React.CSSProperties}
                        aria-label={`${social.name} sayfamızı ziyaret edin`}
                        title={`${social.name} - @asrajans`}
                    >
                        {social.icon}
                        <span className="social-name">{social.name}</span>
                    </button>
                ))}
            </div>

            {/* Backdrop overlay */}
            {isExpanded && (
                <div
                    className="social-backdrop"
                    onClick={handleToggle}
                    aria-hidden="true"
                ></div>
            )}

            {/* Floating action indicator */}
            <div className="social-indicator">
                <div className="pulse-ring"></div>
                <div className="pulse-ring pulse-ring-2"></div>
            </div>
        </div>
    );
};

export default Social;
