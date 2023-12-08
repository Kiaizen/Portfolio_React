import './App.css'
import Header from './components/Header/Header'
import Body from './components/Sobre/Sobre'
import Nav from './components/Nav/Nav'
import Projetos from './components/Projetos/Projetos'
import Footer from './components/Formulario/Form'
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './translations/languageSwitcher';

function App() {
  const { t } = useTranslation();

  return (
   <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
    <Nav/>
    <LanguageSwitcher/>
    <h1>{t('greeting')}</h1>
    <Header/>
    <Body/>
    <Projetos />
    <Footer/>
   </div>
      
  )
}

export default App
