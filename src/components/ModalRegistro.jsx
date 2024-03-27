import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import pruebaApi from '../api/pruebaApi';
import "../style/modalregistro.css"

function ModalRegistro() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [nombre, setNombre] = useState('');
	const [apellido, setApellido] = useState('');
	const [curso, setCurso] = useState('');
  const [situacionCuota, setSituacionCuota] = useState('');
	const [error, setError] = useState('');

	

	const handleSubmit = (e) => {
    const startRegister = async (nombre, apellido, curso, situacionCuota) => {
      try {
        const resp = await pruebaApi.post('/admin/crearalumno', {
          nombre,
          apellido,
          curso,
          situacionCuota,
        });
        window.location.reload(); // Refrescar la página aquí   

      } catch (error) {
        console.log(error);
      }
    };
		e.preventDefault();
		//validaciones
		if (nombre === '' || apellido === '' || curso === ''|| situacionCuota === '') {
			Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son obligatorios",
      });
		}
    else if(curso < 1 || curso > 4){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El año que curso deber ser de 1° a 4°",
      });
    }
    else {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registro existoso",
        showConfirmButton: false,
        timer: 1500
      });
      startRegister(nombre, apellido, curso, situacionCuota);
      handleClose();
        
    }

		
    
	};

  

  return (
    <>
    <div  >
      <Button variant="primary" onClick={handleShow}>
        Nuevo Alumno
      </Button>

      <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registro Alumno</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlid="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                id="nombre"
                type="text"
                placeholder="Juan"
                onChange={(e) => setNombre(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlid="exampleForm.ControlInput1">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                id="apellido"
                type="text"
                placeholder="Perez"
                onChange={(e) => setApellido(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlid="exampleForm.ControlInput1">
              <Form.Label>Curso</Form.Label>
              <Form.Control
                id="curso"
                type="text"
                placeholder="1"
                onChange={(e) => setCurso(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlid="exampleForm.ControlInput1">
              <Form.Label>Situacion Cuota</Form.Label>
              <Form.Control
                id="situacionCuota"
                type="boolean"
                placeholder="false/true"
                onChange={(e) => setSituacionCuota(e.target.value)}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  );
}

export default ModalRegistro;