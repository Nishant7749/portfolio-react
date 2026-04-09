import './App.css'
import {Route, Routes} from 'react-router-dom'
import Header from './components/main/Header'
import Home from './components/main/Home'
import Footer from './components/main/Footer'
import About from './components/navbar/About'
import Projects from './components/navbar/Projects'
import Contact from './components/navbar/Contact'

export default function App() {
  return(
    <>
    <Header />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>

    <Footer />

    </>
  )
}