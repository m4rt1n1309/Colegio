import { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

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
      <h1 className="text-center">Datos Administrativos</h1>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="ms-4 mt-3"
      >
        <Row className="mb-3">
          <Form.Group as={Row} md="4" controlId="validationCustom01">
            <Form.Label>
              <strong>Nombre</strong>
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nombre"
              defaultValue=""
              className="mt-3"
            />
          </Form.Group>
          <Form.Group
            as={Row}
            md="4"
            controlId="validationCustom02"
            className="mt-3"
          >
            <Form.Label>
              <strong>Apellido</strong>
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Apellido"
              defaultValue=""
              className="mt-3"
            />
          </Form.Group>
          <Form.Group
            as={Row}
            md="4"
            controlId="validationCustom02"
            className="mt-3"
          >
            <Form.Label>
              <strong>Fecha de Ingreso</strong>
            </Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="01/10/1997"
              defaultValue=""
              className="mt-3"
            />
          </Form.Group>
          <Form.Group
            as={Row}
            md="4"
            controlId="validationCustom02"
            className="mt-3"
          >
            <Form.Label>
              <strong>Contacto</strong>
            </Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Telefono"
              defaultValue=""
              className="mt-3"
            />
          </Form.Group>

          <Form.Group
            as={Row}
            md="4"
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
            />
          </Form.Group>
          <Form.Group
            as={Row}
            md="4"
            controlId="validationCustom02"
            className="mt-3"
          >
            <Form.Label>
              <strong>Nombre Institucion</strong>
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Tucson School"
              defaultValue=""
              className="mt-3"
            />
          </Form.Group>
          <Form.Group
            as={Row}
            md="4"
            controlId="validationCustom02"
            className="mt-3"
          >
            <Form.Label>
              <strong>Email Institucion</strong>
            </Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="ejemplo@ejemplo.com"
              defaultValue=""
              className="mt-3"
            />
          </Form.Group>
        </Row>
      </Form>
    </>
  );
};

export default Administracion;  