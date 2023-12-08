// LanguageSwitcher.js
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng:string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('br')}>Português</button>
      {/* Add more language buttons as needed */}
    </div>
  );
};

export default LanguageSwitcher;
