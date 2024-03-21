import { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Carousel } from "react-bootstrap";
import "../style/ppprincipal.css";
// import pruebaApi from "../api/api";

export const Administracion = () => {
  const [validated, setValidated] = useState(false);

  // const [nombre, setNombre] = useState("");

  // const recibirRegister = async (nombre) => {
  //   try {
  //     const resp = await pruebaApi.get("./auth/register", {
  //       nombre,
  //     });
  //     console.log(resp);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
    // recibirRegister(nombre);
  };

  return (
    <>
      <h1 className="text-center mt-5 mb-3">Datos Administrativos</h1>
      <Container>
        <Row className="pprincipal">
          {/* Cartel de propaganda izquierdo */}
          <Col md={3} className="d-none d-md-block">
            <Card className="p-3  mt-5">
              <Carousel>
                <Carousel.Item>
                  <img
                    className=" w-100"
                    src="https://tpc.googlesyndication.com/simgad/757953692214610139"
                    alt="First slide"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://promiedos.nyc3.cdn.digitaloceanspaces.com/gen2.gif"
                    alt="Second slide"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://s0.2mdn.net/simgad/9750117053634973713"
                    alt="Third slide"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Card>
          </Col>

          {/* Contenedor principal */}
          <Col md={6} sm={10} controlid="validationCustom01">
            <Card border="primary" className="p-3 border rounded my-5">
              <Form
                className="pprincipal"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
              >
                <Form.Group as={Col} controlid="validationCustom01">
                  <Form.Label>
                    <strong>Nombre</strong>
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    // value={nombre}
                    // onChange={(e) => setNombre(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlid="validationCustom02">
                  <Form.Label>
                    <strong>Apellido</strong>
                  </Form.Label>
                  <Form.Control required type="text" defaultValue="" />
                </Form.Group>

                <Form.Group as={Col} controlid="validationCustom02">
                  <Form.Label>
                    <strong>Fecha de ingreso</strong>
                  </Form.Label>
                  <Form.Control required type="Fecha" defaultValue="" />
                </Form.Group>

                <Form.Group as={Col} controlid="validationCustom02">
                  <Form.Label>
                    <strong>Contacto</strong>
                  </Form.Label>
                  <Form.Control required type="number" defaultValue="" />
                </Form.Group>

                <Form.Group as={Col} controlid="validationCustom02">
                  <Form.Label>
                    <strong>ID</strong>
                  </Form.Label>
                  <Form.Control required type="number" defaultValue="" />
                </Form.Group>

                <Form.Group as={Col} controlid="validationCustom02">
                  <Form.Label>
                    <strong>Nombre Institucion</strong>
                  </Form.Label>
                  <Form.Control required type="text" defaultValue="" />
                </Form.Group>

                <Form.Group as={Col} controlid="validationCustom02">
                  <Form.Label>
                    <strong>Email Institucion</strong>
                  </Form.Label>
                  <Form.Control required type="email" defaultValue="" />
                </Form.Group>
              </Form>
            </Card>
          </Col>

          {/* Cartel de propaganda derecho */}
          <Col md={3} className="d-none d-md-block">
            <Card className="p-3  mt-5">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://tpc.googlesyndication.com/simgad/757953692214610139"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://promiedos.nyc3.cdn.digitaloceanspaces.com/gen2.gif"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://s0.2mdn.net/simgad/9750117053634973713"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Administracion;
