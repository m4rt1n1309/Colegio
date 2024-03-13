import { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

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
      <h1 className="text-center ms-5 my-2 ">Datos Administrativos</h1>
      <Card border="primary" className="container p-3 border rounded  my-5">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-1 container ">
            <Form.Group md="4" sm={10} controlId="validationCustom01">
              <Form.Label>
                <strong>Nombre</strong>
              </Form.Label>
              <Form.Control required type="text" />
            </Form.Group>

            <Form.Group
              md="4"
              sm={10}
              controlId="validationCustom02"
              className="mt-3  "
            >
              <Form.Label>
                <strong>Apellido</strong>
              </Form.Label>
              <Form.Control
                required
                type="text"
                defaultValue=""
                className="mt-3 "
              />
            </Form.Group>

            <Form.Group
              md="4"
              sm={10}
              controlId="validationCustom02"
              className="mt-3"
            >
              <Form.Label>
                <strong>Fecha de Ingreso</strong>
              </Form.Label>
              <Form.Control
                required
                type="date"
                defaultValue=""
                className="mt-3"
              />
            </Form.Group>

            <Form.Group
              md="4"
              sm={10}
              controlId="validationCustom02"
              className="mt-3"
            >
              <Form.Label>
                <strong>Contacto</strong>
              </Form.Label>
              <Form.Control
                required
                type="number"
                defaultValue=""
                className="mt-3"
              />
            </Form.Group>

            <Form.Group
              md="4"
              sm={10}
              controlId="validationCustom02"
              className="mt-3"
            >
              <Form.Label>
                <strong>ID</strong>
              </Form.Label>
              <Form.Control
                required
                type="number"
                defaultValue=""
                className="mt-3"
                sm={10}
              />
            </Form.Group>
            <Form.Group md="4" controlId="validationCustom02" className="mt-3">
              <Form.Label>
                <strong>Nombre Institucion</strong>
              </Form.Label>
              <Form.Control
                required
                type="text"
                defaultValue=""
                className="mt-3"
              />
            </Form.Group>
            <Form.Group md="4" controlId="validationCustom02" className="mt-3">
              <Form.Label>
                <strong>Email Institucion</strong>
              </Form.Label>
              <Form.Control
                required
                type="email"
                defaultValue=""
                className="mt-3"
                sm={10}
              />
            </Form.Group>
          </Row>
        </Form>
      </Card>
    </>
  );
};

export default Administracion;
