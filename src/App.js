import { BrowserRouter } from 'react-router-dom';
import './App.css';
import "./components/containers/style.css"
// import Navbar from './components/containers/Navbar';
import Home from './components/containers/Home';
import CnWorld from './components/Pages/ConnectWorld/CnWorld';
import Products from './components/containers/Products';
import Owners from './components/containers/Owners';
import About from './components/containers/About';
import ContactUs from './components/Pages/ContactUs/ContactUs';
import Footer from './components/Pages/Footer/Footer';
import Navbar from './components/Pages/Navbar/Navbar';

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
