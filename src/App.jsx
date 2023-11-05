import { useState,useEffect } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Work from './components/Work'
import TimeLine from './components/TimeLine'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
// import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);
  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };

    window.addEventListener("resize", resizeRatio);

    return () => {
      window.removeEventListener("resize", resizeRatio);
    };
  }, [ratio]);

  return (
    <>
      
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home  />
      <Work />
      <TimeLine />
      <Services />
      <Testimonial />
      {/* <Contact /> */}
      <Footer />
      
    </>
  ) 
}

export default App
