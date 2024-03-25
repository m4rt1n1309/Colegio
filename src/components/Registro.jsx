import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

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
    
    <Form  style={{width:'500px'}} noValidate validated={validated} onSubmit={handleSubmit} className='ms-4 mt-3  d-flex align-items-end flex-column'>
      <Row className="mb-3">
        <Form.Group as={Row} md="4" controlId="validationCustom01">
          <Form.Label><strong>Nombre</strong></Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nombre"
            defaultValue=""
            className='mt-3'
          />
          <Form.Control.Feedback>Perfecto!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Row} md="4" controlId="validationCustom02" className="mt-3">
          <Form.Label><strong>Apellido</strong></Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Apellido"
            defaultValue=""
            className='mt-3'
          />
          <Form.Control.Feedback>Perfecto!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Row} md="4" controlId="validationCustom02" className="mt-3">
          <Form.Label><strong>Email</strong></Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="ejemplo@ejemplo.com"
            defaultValue=""
            className='mt-3'
          />
          <Form.Control.Feedback>Perfecto!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      
      
      <Button type="submit" className='mt-3 '>Registrar</Button>
    </Form>
    </>
  );
}

export default ValidarRegistro;
