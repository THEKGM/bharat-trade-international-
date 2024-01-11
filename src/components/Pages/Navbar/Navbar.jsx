import React, { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import navBar_Logo from "../../../assets/Images/headerImageCroped-removebg-preview.png";
// import dorpDownArrow from "../../../assets/svg/arrow-down.svg";
import "./navbar.css"

const NavigationBar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <section className='border'>
                <div className="containerDiv p-0">
                    <Navbar bg="light" className='p-0' expand={false}>
                        <Container fluid>
                            <Navbar.Brand href="#home">
                                <img src={navBar_Logo} width={70} height={50} alt="" />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
                            <Navbar.Offcanvas
                                id="offcanvasNavbar"
                                aria-labelledby="offcanvasNavbarLabel"
                                placement="end"
                                show={show}
                                onHide={handleClose}
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id="offcanvasNavbarLabel">Bharat Trade International</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <Nav.Link href="#home">Home</Nav.Link>
                                        <Nav.Link href="#about">About</Nav.Link>
                                        <Nav.Link href="#contact">Contact</Nav.Link>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                </div>
            </section>

        </>
    );
};

export default NavigationBar;