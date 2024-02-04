import React, { useState } from 'react'
import "./contactForm.css"

function ContactForm(props) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phnNumber: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };
    return (
        <>
            {/* <section> */}
            <div className="contact-form-container">
                {/* <h2 className='mb-3'>Contact {props.companyName}</h2> */}
                <h2 className='mb-3' data-aos="zoom-out-up" data-aos-duration="1200">Contact Form</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder='Your Name*'
                        value={formData.name}
                        onChange={handleChange}
                        required
                        data-aos="flip-down" data-aos-duration="1200"
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='Your Email*'
                        value={formData.email}
                        onChange={handleChange}
                        required
                        data-aos="flip-down" data-aos-duration="1200"
                    />
                    <input
                        type="tel"
                        id="phnNumber"
                        name="phnNumber"
                        placeholder='Phone Number*'
                        value={formData.phnNumber}
                        onChange={handleChange}
                        required
                        data-aos="flip-down" data-aos-duration="1200"
                    />
                    <textarea
                        id="message"
                        name="message"
                        placeholder='Your message*'
                        value={formData.message}
                        onChange={handleChange}
                        required
                        data-aos="flip-down" data-aos-duration="1200"
                    ></textarea>
                    <button type="submit" data-aos="flip-down" data-aos-duration="1200">Submit</button>
                </form>
            </div>
            {/* </section> */}
        </>
    )
}

export default ContactForm