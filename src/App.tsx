import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
import Intro from './components/Intro/Intro'
import Header from './components/Header/header'

function App() {

  return (
    <div>
      <Header/>
      <Intro/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
