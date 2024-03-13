import { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export const Administracion = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <h1 className="text-center mt-5 mb-3">Datos Administrativos</h1>
      <Container fluid>
        <Row>
          {/* Cartel de propaganda izquierdo */}
          <Col md={3} className="d-none d-md-block">
            <Card border="info" className="p-3 border rounded mt-5">
              <Card.Title>Publicidad</Card.Title>
              {/* Contenido del cartel de propaganda */}
            </Card>
          </Col>

          {/* Contenedor principal */}
          <Col md={6} sm={10} controlId="validationCustom01">
            <Card border="primary" className="p-3 border rounded my-5">
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group as={Col} controlId="validationCustom01">
                  <Form.Label>
                    <strong>Nombre</strong>
                  </Form.Label>
                  <Form.Control required type="text" />
                </Form.Group>

                <Form.Group as={Col} controlId="validationCustom02">
                  <Form.Label>
                    <strong>Apellido</strong>
                  </Form.Label>
                  <Form.Control required type="text" defaultValue="" />
                </Form.Group>

                <Form.Group as={Col} controlId="validationCustom02">
                  <Form.Label>
                    <strong>Fecha de ingreso</strong>
                  </Form.Label>
                  <Form.Control required type="Fecha" defaultValue="" />
                </Form.Group>

                <Form.Group as={Col} controlId="validationCustom02">
                  <Form.Label>
                    <strong>Contacto</strong>
                  </Form.Label>
                  <Form.Control required type="number" defaultValue="" />
                </Form.Group>

                <Form.Group as={Col} controlId="validationCustom02">
                  <Form.Label>
                    <strong>ID</strong>
                  </Form.Label>
                  <Form.Control required type="number" defaultValue="" />
                </Form.Group>

                <Form.Group as={Col} controlId="validationCustom02">
                  <Form.Label>
                    <strong>Nombre Institucion</strong>
                  </Form.Label>
                  <Form.Control required type="text" defaultValue="" />
                </Form.Group>

                <Form.Group as={Col} controlId="validationCustom02">
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
            <Card border="info" className="p-3 border rounded mt-5">
              <Card.Title>Publicidad</Card.Title>
              {/* Contenido del cartel de propaganda */}
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Administracion;
