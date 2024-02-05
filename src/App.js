import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Navbar from './components/containers/Navbar';
// import Home from './components/Pages/Home/Home';
// import CnWorld from './components/Pages/ConnectWorld/CnWorld';
// import Products from './components/Pages/Products/Products';
// import Owners from './components/Pages/Owner/Owners';
// import ContactUs from './components/Pages/ContactUs/ContactUs';
import Footer from './components/Pages/Footer/Footer';
import Navbar from './components/Pages/Navbar/Navbar';
// import About from './components/Pages/About/About';
import { FaArrowCircleUp } from 'react-icons/fa';
import { useEffect } from 'react';
import WHATSAPP_ICON from "./assets/Images/whatsappIcon.png"
import Aos from 'aos';
import ProductsImgStore from './components/Pages/Products/ProductsImgStore';
import Dashboard from './Dashboard';

function App() {
  // const [showProducts, setShowProducts] = useState(false)

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
    // Replace 'phoneNumber' with your actual WhatsApp number
    const phoneNumber = '7041914309';
    // const defaultMessage = encodeURIComponent("Hello, I'm interested in your services.");
    const defaultMessage = encodeURIComponent("Hello! I'm exploring your website and would love to learn more about your products/services. Can you provide more information?");
    const url = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;
    window.open(url, '_blank');
  };

  // useEffect(() => {
  //   if (window.location.pathname === '/productsImgStore') {
  //     setShowProducts(true)
  //   } else {
  //     setShowProducts(false)
  //   }
  // }, [])

  return (
    <>
      <BrowserRouter>
        {/* <Routes>
          <Route path='/productsImgStore' element={<ProductsImgStore />} />
        </Routes> */}
        {/* {showProducts ? <ProductsImgStore /> : <> */}
        <Navbar />
        {/* <Home />
        <CnWorld />
        <Products />
        <Owners />
        <About handleWhatsAppClick={handleWhatsAppClick} />
        <ContactUs /> */}
        {/* </>} */}
        <Routes>
          <Route path='/productsImgStore' element={<ProductsImgStore />} />
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
