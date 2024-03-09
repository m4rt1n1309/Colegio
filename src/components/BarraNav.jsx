import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/Barranav.css"
import { NavLink } from 'react-bootstrap';

function BarraNav() {
  
    return (
      <>
        
        <Navbar className="navbar" expand="lg">
          <div>
               <img src="../public/images/logoescuela.png" alt="logoescuela" width="85px"/>
          </div>
          <Container className='container'>
            <Navbar.Brand href="/home" className='brand me-auto'>Tucson School</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="colorletra ms-auto">
              <Nav.Link as={NavLink} href="/Home">Inicio</Nav.Link>
              <Nav.Link as={NavLink} href="/login">Login</Nav.Link>
              <Nav.Link as={NavLink} href="/registro">Registro</Nav.Link>
              {/* Añade botones según sea necesario */}
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
  
  export default BarraNav;