import './App.css'
import Header from './components/Header/Header'
import About from './components/Sobre/Sobre'
import Nav from './components/Nav/Nav'
import Projetos from './components/Projetos/Projetos'
import Footer from './components/Formulario/Form'

function App() {

  return (
   <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
    <Nav/>
    <Header/>
    <About/>
    <Projetos />
    <Footer/>
   </div>
      
  )
}

export default App
