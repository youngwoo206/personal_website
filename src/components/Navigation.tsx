import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import "../styles/Navbar.css";

import resume from "../assets/Youngwoo_Lee2023.pdf";

function Navigation() {
  const [show, setShow] = useState(true);

  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="link" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="link" href="/projects">
              Projects
            </Nav.Link>
          </Nav>
          <Nav>
            <a href={resume} download="Youngwoo_Lee2023.pdf">
              Resume
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
