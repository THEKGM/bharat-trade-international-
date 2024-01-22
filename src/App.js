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

function App() {
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
      </BrowserRouter>
    </>
  );
}

export default App;
