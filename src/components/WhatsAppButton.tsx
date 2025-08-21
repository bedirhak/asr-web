import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
    const phoneNumber = "905076071454"; // Telefon numarası (90 ülke kodu dahil)
    const message = "Merhaba! ASR Ajans hizmetleri hakkında bilgi almak istiyorum.";

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="whatsapp-button" onClick={handleWhatsAppClick}>
            <FaWhatsapp />
            <span className="whatsapp-tooltip">💬 Whatsapp'dan İletişime Geçin!</span>
        </div>
    );
};

export default WhatsAppButton;
