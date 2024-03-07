import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const BarraNav = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Libreria el 11</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Home">Inicio</Nav.Link>
            <Nav.Link href="./Login">Login</Nav.Link>
            <Nav.Link href="./Registro">Registro</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default BarraNav;
