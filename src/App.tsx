import './App.css'
import Header from './components/Header/Header'
import Body from './components/Sobre/Sobre'
import Nav from './components/Nav/Nav'
import Projetos from './components/Projetos/Projetos'
import Footer from './components/Formulario/Form'

function App() {


  return (
   <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
    <Nav/>
    <Header/>
    <Body/>
    <Projetos />
    <Footer/>
   </div>
      
  )
}

export default App
