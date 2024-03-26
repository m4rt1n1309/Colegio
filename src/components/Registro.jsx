import { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "../style/login.css";

function ValidarRegistro() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <Form
        validated={validated}
        onSubmit={handleSubmit}
        className="ms-4 mt-3 d-flex align-items-center flex-column "
      >
        <Col md={6} sm={10} controlid="validationCustom01">
          <Card border="primary" className="p-3 border rounded my-5  ">
            <Form>
              <Form.Group as={Col} controlid="validationCustom0">
                <Form.Label>
                  <strong>Nombre</strong>
                </Form.Label>
                <Form.Control required type="text" />
              </Form.Group>

              <Form.Group as={Col} controlid="validationCustom02">
                <Form.Label>
                  <strong>Apellido</strong>
                </Form.Label>
                <Form.Control required type="text" />
              </Form.Group>

              <Form.Group as={Col} controlid="validationCustom02">
                <Form.Label>
                  <strong>Email</strong>
                </Form.Label>
                <Form.Control required type="email" />
              </Form.Group>

              <Form.Group as={Col} controlid="validationCustom02">
                <Form.Label>
                  <strong>Password</strong>
                </Form.Label>
                <Form.Control required type="password" />
              </Form.Group>

              <Form.Group as={Col} controlid="validationCustom02">
                <Form.Label>
                  <strong>Telefono</strong>
                </Form.Label>
                <Form.Control required type="number" />
              </Form.Group>

              <Button type="submit" className="mt-3 ">
                Registrar
              </Button>
            </Form>
          </Card>
        </Col>
      </Form>
    </>
  );
}

export default ValidarRegistro;
