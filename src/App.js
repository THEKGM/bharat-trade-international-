import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import Navbar from './components/containers/Navbar';
import Home from './components/Pages/Home/Home';
import CnWorld from './components/Pages/ConnectWorld/CnWorld';
import Products from './components/Pages/Products/Products';
import Owners from './components/Pages/Owner/Owners';
import ContactUs from './components/Pages/ContactUs/ContactUs';
import Footer from './components/Pages/Footer/Footer';
import Navbar from './components/Pages/Navbar/Navbar';
import About from './components/Pages/About/About';
import { FaArrowCircleUp } from 'react-icons/fa';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    let arrowTopBtn = document.getElementById("arrowTopBtn");
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        arrowTopBtn.style.transform = "translateX(-25px)"
      } else {
        arrowTopBtn.style.transform = "translateX(100px)"
      }
    })
  }, [])
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        <CnWorld />
        <Products />
        <Owners />
        <About />
        <ContactUs />
        <Footer />
        <button id="arrowTopBtn" onClick={scrollToTop}><FaArrowCircleUp /></button>
      </BrowserRouter>
    </>
  );
}

export default App;
