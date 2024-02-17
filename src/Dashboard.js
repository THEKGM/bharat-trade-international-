import React from 'react'
import Home from './components/Pages/Home/Home'
import CnWorld from './components/Pages/ConnectWorld/CnWorld'
import Products from './components/Pages/Products/Products'
import Owners from './components/Pages/Owner/Owners'
import About from './components/Pages/About/About'
import ContactUs from './components/Pages/ContactUs/ContactUs'

function Dashboard() {
    const handleWhatsAppClick = () => {
        // Replace 'phoneNumber' with your actual WhatsApp number
        const phoneNumber = '7041914309';
        // const defaultMessage = encodeURIComponent("Hello, I'm interested in your services.");
        const defaultMessage = encodeURIComponent("Hello! I'm interested in booking a 15-minute free consultation. Can you please provide more information?");
        const url = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;
        window.open(url, '_blank');
    };

    return (
        <>
            <Home />
            <CnWorld />
            <Products />
            <Owners />
            <About handleWhatsAppClick={handleWhatsAppClick} />
            <ContactUs />
        </>
    )
}

export default Dashboard