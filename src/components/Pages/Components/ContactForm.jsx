import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import "./contactForm.css"

function ContactForm(props) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phnNumber: '',
        message: '',
    });
    const [loading, setLoading] = useState(false)
    const contactForm = useRef();

    useEffect(() => {
        emailjs.init("0QCdxG7Z_J65nDbh8")
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceId = "service_threwit";
        const templateId = "template_4lc67pq";
        try {
            setLoading(true);
            await emailjs.send(serviceId, templateId, {
                user_name: formData.name,
                user_email: formData.email,
                user_contactNumber: formData.phnNumber,
                user_message: formData.message,
            });
            alert("Email successfully sent to BTI!")
        } catch (error) {
            console.log("error to sending", error)
        } finally {
            setFormData('')
            setLoading(false)
        }
    };
    return (
        <>
            <div className="contact-form-container">
                <h2 className='mb-3' data-aos="zoom-out-up" data-aos-duration="1200">Contact Form</h2>
                <form ref={contactForm} onSubmit={handleSubmit}>
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
                    {loading && "Email Sending...."}
                    <button type="submit" data-aos="flip-down" data-aos-duration="1200">Submit</button>
                </form>
            </div>
        </>
    )
}

export default ContactForm