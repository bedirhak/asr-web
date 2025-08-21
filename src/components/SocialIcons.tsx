import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";


const SocialIcons: React.FC = () => {
    const socialLinks = [

        {
            name: 'Instagram',
            icon: <FaInstagram />,
            url: 'https://instagram.com/asrajanscom',
            color: '#E4405F'
        },
        {
            name: 'YouTube',
            icon: <FaYoutube />,
            url: 'https://www.youtube.com/@ASRAjansMedya',
            color: '#FF0000'
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedinIn />,
            url: 'https://linkedin.com/company/asrajans',
            color: '#0A66C2'
        },
        {
            name: 'Twitter',
            icon: <FaXTwitter />,
            url: 'https://twitter.com/asrajans',
            color: '#1DA1F2'
        },
        {
            name: 'Facebook',
            icon: <FaFacebookF />,
            url: 'https://facebook.com/asrajans',
            color: '#1877F2'
        },
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