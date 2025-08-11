import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const SocialIcons: React.FC = () => {
    const socialLinks = [
        {
            name: 'Facebook',
            icon: <FaFacebookF />,
            url: 'https://facebook.com/asrajans',
            color: '#1877F2'
        },
        {
            name: 'Instagram',
            icon: <FaInstagram />,
            url: 'https://instagram.com/asrajans',
            color: '#E4405F'
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedinIn />,
            url: 'https://linkedin.com/company/asrajans',
            color: '#0A66C2'
        },
        {
            name: 'Twitter',
            icon: <FaTwitter />,
            url: 'https://twitter.com/asrajans',
            color: '#1DA1F2'
        },
        {
            name: 'WhatsApp',
            icon: <FaWhatsapp />,
            url: 'https://wa.me/905375925055',
            color: '#25D366'
        }
    ];

    return (
        <div className="social-icons-vertical">
            {socialLinks.map((social, index) => (
                <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-item"
                    style={{ '--hover-color': social.color } as React.CSSProperties}
                    aria-label={social.name}
                >
                    {social.icon}
                </a>
            ))}
        </div>
    );
};

export default SocialIcons;