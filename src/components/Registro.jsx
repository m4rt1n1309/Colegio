import { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "../style/login.css";
import pruebaApi from "../api/pruebaApi";
import Swal from "sweetalert2";
import LogoutButton from "./Logout";
import BotonAtras from "./BotonAtras";
import "../style/ppprincipal.css"

function ValidarRegistro() {
  const [validated, setValidated] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validarEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const resultadoValidacion = validarEmail.test(email);

    if (!nombre || !apellido || !email || !password || !telefono) {
      // Si hay campos vacíos, muestra un mensaje de error
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son obligatorios",
      });
      return;
    } else if (!resultadoValidacion) {
      // Si el correo no es válido, muestra un mensaje de error
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El correo ingresado no es correcto",
      });
      return;
    } else if (password.length < 5) {
      // Si la contraseña es demasiado corta, muestra un mensaje de error
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "La contraseña debe tener al menos 5 caracteres",
      });
      return;
    }

    try {
      // Intenta registrar al nuevo usuario
      const resp = await pruebaApi.post("/auth/registro", {
        nombre,
        apellido,
        email,
        password,
        telefono,
      });

      // Si el registro es exitoso, muestra un mensaje de éxito
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registro exitoso",
        showConfirmButton: false,
        timer: 1500,
      });

      // Puedes hacer algo con la respuesta si es necesario
      console.log(resp);

      // Limpia los campos de entrada
      setNombre("");
      setApellido("");
      setEmail("");
      setPassword("");
      setTelefono("");

      // Reset validation
      setValidated(false);
    } catch (error) {
      // Si ocurre un error al registrar al usuario, muestra un mensaje de error
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Correo ya registrado",
      });
    }
  };

  return (
    <>
      <div>
        
        <LogoutButton />
        <BotonAtras />
        <Form
          noValidate
          validated={validated}
          className="d-flex align-items-center flex-column"
          onSubmit={handleSubmit}
        >
          <Col md={6} sm={12} controlid="validationCustom01">
            <Card className="p-3 my-5">
              <Form.Group as={Col} controlId="validationCustom01">
                <Form.Label>
                  <strong>Nombre</strong>
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ingrese nombre"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="validationCustom02">
                <Form.Label>
                  <strong>Apellido</strong>
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  placeholder="Ingrese apellido"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="validationCustom03">
                <Form.Label>
                  <strong>Email</strong>
                </Form.Label>
                <Form.Control
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@hotmail.com"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="validationCustom04">
                <Form.Label>
                  <strong>Password</strong>
                </Form.Label>
                <Form.Control
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingrese password"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="validationCustom05">
                <Form.Label>
                  <strong>Telefono</strong>
                </Form.Label>
                <Form.Control
                  required
                  type="number"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="Ingrese telefono"
                />
              </Form.Group>

              <Button type="submit" className="mt-3">
                Registrar
              </Button>
            </Card>
          </Col>
        </Form>
      </div>
    </>
  );
}

export default ValidarRegistro;
