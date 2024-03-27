import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import pruebaApi from '../api/pruebaApi';
import "../style/modalregistro.css"

function CargarNotas() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [nombre, setNombre] = useState('');
	const [apellido, setApellido] = useState('');
	const [curso, setCurso] = useState('');
  const [situacionCuota, setSituacionCuota] = useState('');
	const [error, setError] = useState('');
  const [lenguaLiteratura, setLenguaLiteratura] = useState ('');
  const [biologia, setBiologia] = useState ('');
  const [fisica, setFisica] = useState ('');
  const [quimica, setQuimica] = useState ('');
  const [economia, setEconomia] = useState ('');
  const [geografia, setGeografia] = useState ('');
  const [historia, setHistoria] = useState ('');
  const [educacionFisica, setEducacionFisica] = useState ('');
  const [matematicas, setMatematicas] = useState (" ");
  const alumnoIdLocalStorage = localStorage.getItem("alumnoId"); // Obtener el ID del alumno del localStorage
	

	const handleSubmit = () => {

    
    const cargaNotas = async (_id, matematicas, lenguaLiteratura, biologia,fisica,quimica,economia,geografia,historia,educacionFisica) => {
      try {
        const resp = await pruebaApi.put('/admin/cargarnotas', {
          _id,
           matematicas,
            lenguaLiteratura, 
            biologia,
            fisica,
            quimica,
            economia,
            geografia,
            historia,
            educacionFisica
        });
        window.location.reload(); // Refrescar la página aquí   

      } catch (error) {
        console.log(error);
      }
    };
	
      cargaNotas(alumnoIdLocalStorage, matematicas, lenguaLiteratura, biologia,fisica,quimica,economia,geografia,historia,educacionFisica);
      handleClose();
        
    

		
    
	};

  

  return (
    <>
    <div  >
      <Button variant="primary" onClick={handleShow}>
        cambiar notas
      </Button>

      <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cambiar notas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlid="exampleForm.ControlInput1">
              <Form.Label>matematicas</Form.Label>
              <Form.Control
                id="nombre"
                type="text"
                onChange={(e) => setMatematicas(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlid="exampleForm.ControlInput1">
              <Form.Label>lengua y Literatura</Form.Label>
              <Form.Control
                id="apellido"
                type="text"
                placeholder="Perez"
                onChange={(e) => setLenguaLiteratura(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlid="exampleForm.ControlInput1">
              <Form.Label>biologia</Form.Label>
              <Form.Control
                id="curso"
                type="text"
                placeholder="1"
                onChange={(e) => setBiologia(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlid="exampleForm.ControlInput1">
              <Form.Label>fisica</Form.Label>
              <Form.Control
                id="situacionCuota"
                type="boolean"
                placeholder="false/true"
                onChange={(e) => setFisica(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlid="exampleForm.ControlInput1">
              <Form.Label>quimica</Form.Label>
              <Form.Control
                id="situacionCuota"
                type="boolean"
                placeholder="false/true"
                onChange={(e) => setQuimica(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlid="exampleForm.ControlInput1">
              <Form.Label>economia</Form.Label>
              <Form.Control
                id="situacionCuota"
                type="boolean"
                placeholder="false/true"
                onChange={(e) => setEconomia(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlid="exampleForm.ControlInput1">
              <Form.Label>geografia</Form.Label>
              <Form.Control
                id="situacionCuota"
                type="boolean"
                placeholder="false/true"
                onChange={(e) => setGeografia(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlid="exampleForm.ControlInput1">
              <Form.Label>historia</Form.Label>
              <Form.Control
                id="situacionCuota"
                type="boolean"
                placeholder="false/true"
                onChange={(e) => setHistoria(e.target.value)}

                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlid="exampleForm.ControlInput1">
              <Form.Label>educacion Fisica</Form.Label>
              <Form.Control
                id="situacionCuota"
                type="boolean"
                placeholder="false/true"
                onChange={(e) => setEducacionFisica(e.target.value)}
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

export default CargarNotas;