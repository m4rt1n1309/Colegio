import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Carousel } from "react-bootstrap";
import "../style/ppprincipal.css";
import pruebaApi from "../api/pruebaApi";
import LogoutButton from "./Logout";
import BotonAlumno from "./ButtonAlumno";

export const Administracion = () => {
  const [datosAdmin, setDatosAdmin] = useState({}); // Inicializa datosAdmin como un objeto vacío

  const localToken = localStorage.getItem("token");
  let idAdmin;

  useEffect(() => {
    // Mover la lógica de obtener los datos del administrador dentro de useEffect
    const obtenerDatos = async (idAdmin) => {
      try {
        if (idAdmin) {
          const resp = await pruebaApi.post("/admin/datosadmin", {
            _id: idAdmin,
          });
          setDatosAdmin(resp.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (localToken) {
      const tokenBody = localToken.split(".")[1];
      const decodedToken = JSON.parse(atob(tokenBody));
      idAdmin = decodedToken.id;
      obtenerDatos(idAdmin); // Llama a obtenerDatos cuando idAdmin cambie
    } else {
      console.log("No se encontró ningún token en el almacenamiento local.");
    }
  }, [localToken]); // Este efecto se ejecutará cuando localToken cambie

  // Desestructura datosAdmin después de asegurarte de que se ha actualizado correctamente
  const { admin } = datosAdmin || {};
  let { nombre, apellido, telefono, fechaIngreso, contacto, _id, colegio } =
    admin || {};

  nombre = nombre ? nombre.toUpperCase() : "";
  apellido = apellido ? apellido.toUpperCase() : "";

  
  return (
    <>
    <div className="fondopantalla">
      <BotonAlumno className="botonalumnos pb-3"/>
      <LogoutButton className="boton pb-3"/>
      <h1 className="text-center ">Datos Administrativos</h1>

      <Container>
        <Row className="pprincipal pt-4">
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
                // noValidate
                // validated={validated}
                // onSubmit={handleSubmit}
              >
                <Form.Group as={Col} controlid="validationCustom01">
                  <Form.Label>
                    <strong>Nombre</strong>
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    defaultValue={nombre}
                    readOnly
                  />
                </Form.Group>

                <Form.Group as={Col} controlid="validationCustom02">
                  <Form.Label>
                    <strong>Apellido</strong>
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    defaultValue={apellido}
                    readOnly
                  />
                </Form.Group>

                <Form.Group as={Col} controlid="validationCustom02">
                  <Form.Label>
                    <strong>Fecha de ingreso</strong>
                  </Form.Label>
                  <Form.Control
                    required
                    type="Fecha"
                    defaultValue={fechaIngreso}
                    readOnly
                  />
                </Form.Group>

                <Form.Group as={Col} controlid="validationCustom02">
                  <Form.Label>
                    <strong>Contacto</strong>
                  </Form.Label>
                  <Form.Control
                    required
                    type="number"
                    defaultValue={telefono}
                    readOnly
                  />
                </Form.Group>

                <Form.Group as={Col} controlid="validationCustom02">
                  <Form.Label>
                    <strong>ID</strong>
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    defaultValue={_id}
                    readOnly
                  />
                </Form.Group>

                <Form.Group as={Col} controlid="validationCustom02">
                  <Form.Label>
                    <strong>Nombre Institucion</strong>
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    defaultValue={colegio}
                    readOnly
                  />
                </Form.Group>

                <Form.Group as={Col} controlid="validationCustom02">
                  <Form.Label>
                    <strong>Email Institucion</strong>
                  </Form.Label>
                  <Form.Control
                    required
                    type="email"
                    defaultValue={contacto}
                    readOnly
                  />
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
      </div>
    </>
  );
};

export default Administracion;
