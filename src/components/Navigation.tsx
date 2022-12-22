import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react'
import '../styles/Navbar.css'

function Navigation() {

  const [show, setShow] = useState(true)

  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow(false)
    }
    else {
      setShow(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)

    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  },[])


  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
  );
}

export default Navigation;