import Footer from './Components/Footer/Footer.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Portfolio from './Components/Portfolio/Portfolio.jsx'
import About from './Components/About/About.jsx'
import ContactMe from './Components/ContactMe/ContactMe.jsx'



import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <Hero />
            <Portfolio />
            <About />
            <ContactMe />
          </>
        }></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/contactMe' element={<ContactMe />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
