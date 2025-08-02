import { useTranslation } from 'react-i18next';

const Language = () => {
    const { i18n } = useTranslation();

    return (
        <div className="language-selector">
            <button
                className={`language-button ${i18n.language === 'tr' ? 'active' : ''}`}
                onClick={() => i18n.changeLanguage('tr')}
                title="Türkçe"
            >
                TR
            </button>
            <button
                className={`language-button ${i18n.language === 'en' ? 'active' : ''}`}
                onClick={() => i18n.changeLanguage('en')}
                title="English"
            >
                EN
            </button>

        </div>
    );
};

export default Language;