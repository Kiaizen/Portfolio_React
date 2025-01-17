import { useTranslation } from 'react-i18next';
import Us from '../assets/estadosUnidos.png'
import Br from '../assets/brasil.png'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng:string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='flex  gap-2'>
      <button className='pt-2' onClick={() => changeLanguage('en')}>
        <img src={Us} alt="American flag" className='w-6 lg:w-8' />
      </button>
      <button className='pt-2' onClick={() => changeLanguage('pt-BR')}>
        <img src={Br} alt="Brazilian flag" className='w-5 lg:w-7'/>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
