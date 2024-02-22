import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Pages/Footer/Footer';
import Navbar from './components/Pages/Navbar/Navbar';
import { FaArrowCircleUp } from 'react-icons/fa';
import { useEffect } from 'react';
import WHATSAPP_ICON from "./assets/Images/whatsappIcon.png"
import Aos from 'aos';
import ProductsImgStore from './components/Pages/Products/ProductsImgStore';
import Dashboard from './Dashboard';

function App() {
  useEffect(() => {
    Aos.init();
  }, [])

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

  const handleWhatsAppClick = () => {
    const phoneNumber = '7041914309';
    // const defaultMessage = encodeURIComponent("Hello, I'm interested in your services.");
    const defaultMessage = encodeURIComponent("Hello! I'm exploring your website and would love to learn more about your services. Can you provide more information?");
    const url = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/productsImgStore' element={<ProductsImgStore />} />
          {/* <Route path='/admin' element={<Admin />} /> */}
          <Route path='/' element={<Dashboard />} />
        </Routes>
        <Footer handleWhatsAppClick={handleWhatsAppClick} />
        <button id="arrowTopBtn" onClick={scrollToTop}><FaArrowCircleUp /></button>
        <button className='whatsapp-btn' onClick={handleWhatsAppClick}>
          <img src={WHATSAPP_ICON} alt="WhatsApp" />
        </button>
      </BrowserRouter>
    </>
  );
}

export default App;
