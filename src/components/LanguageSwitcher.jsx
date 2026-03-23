import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="text-xl hover:bg-red-500/10 rounded transition pr-15"
    >
      {i18n.language === 'tr' ? '🇹🇷' : '🇬🇧'}
    </button>
  );
};

export default LanguageSwitcher;