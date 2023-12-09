// LanguageSwitcher.js
import { useTranslation } from 'react-i18next';
import Us from '../assets/estadosUnidos.png'
import Br from '../assets/brasil.png'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng:string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='flex justify-end gap-2 items-center'>
      <button onClick={() => changeLanguage('en')}>
        <img src={Us} alt="American flag" className='w-8' />
      </button>
      <button onClick={() => changeLanguage('pt-BR')}>
        <img src={Br} alt="Brazilian flag" className='w-7'/>
      </button>
      {/* Add more language buttons as needed */}
    </div>
  );
};

export default LanguageSwitcher;
