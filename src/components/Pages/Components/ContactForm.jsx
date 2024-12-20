import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "./contactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phnNumber: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [isCustomProduct, setIsCustomProduct] = useState("Your Message *");
  const contactForm = useRef();

  useEffect(() => {
    // emailjs.init(process.env.EMAILJS_USERID);
    const IsCustomProduct = sessionStorage.getItem("IsCustomProduct");
    if (IsCustomProduct) {
      setIsCustomProduct("Describe Your Choice, and Fill the Form");
    }
    return () => sessionStorage.removeItem("IsCustomProduct");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const serviceId = process.env.EMAILJS_SERVICEID;
    // const templateId = process.env.EMAILJS_TEMPLATEID;

    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address");
      return;
    } else {
      setEmailError(""); // Clear error if valid
    }

    const serviceId = process.env.REACT_PUBLIC_EMAILJS_SERVICEID;
    const templateId = process.env.REACT_PUBLIC_EMAILJS_TEMPLATEID;
    const userId = process.env.REACT_PUBLIC_EMAILJS_USERID;

    try {
      setLoading(true);
      await emailjs.send(
        serviceId,
        templateId,
        {
          user_name: formData.name,
          user_email: formData.email,
          user_contactNumber: formData.phnNumber,
          user_message: formData.message,
        },
        userId
      );
      setFormData({
        name: "",
        email: "",
        phnNumber: "",
        message: "",
      });
      toast.success("Email successfully sent to BTI!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      console.log("error to sending", error);
    } finally {
      setLoading(false);
    }
  };

  //   useEffect(() => {
  //     sessionStorage.removeItem("IsCustomProduct");
  //   }, []);

  return (
    <>
      <ToastContainer />
      <div className="contact-form-container">
        <h2 className="mb-3" data-aos="zoom-out-up" data-aos-duration="1200">
          Contact Form
        </h2>
        <form ref={contactForm} onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name*"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="off"
            data-aos="flip-down"
            data-aos-duration="1200"
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email*"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="off"
            data-aos="flip-down"
            data-aos-duration="1200"
          />
          {emailError && <p className="error-message">{emailError}</p>}
          <input
            type="tel"
            id="phnNumber"
            name="phnNumber"
            placeholder="Phone Number*"
            value={formData.phnNumber}
            onChange={handleChange}
            required
            autoComplete="off"
            data-aos="flip-down"
            data-aos-duration="1200"
          />
          <textarea
            id="message"
            name="message"
            placeholder={isCustomProduct}
            value={formData.message}
            onChange={handleChange}
            required
            autoComplete="off"
            data-aos="flip-down"
            data-aos-duration="1200"
          ></textarea>
          {loading && <p>Sending Email...</p>}
          <button
            type="submit"
            disabled={loading}
            data-aos="flip-down"
            data-aos-duration="1200"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
