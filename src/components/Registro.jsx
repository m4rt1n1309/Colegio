import { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "../style/login.css";
import pruebaApi from "../api/pruebaApi";
import Swal from "sweetalert2";

function ValidarRegistro() {
  const [error, setError] = useState("");
  const [validated, setValidated] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = (e) => {
    const startRegister = async (
      nombre,
      apellido,
      email,
      password,
      telefono
    ) => {
      try {
        const resp = await pruebaApi.post("/auth/registro", {
          nombre,
          apellido,
          email,
          password,
          telefono,
        });
        setError(resp.data.msg);
        console.log(resp.data);
        localStorage.setItem("token", resp.data.token);
      } catch (error) {
        console.log(error);
      }
    };
    e.preventDefault();

    const validarEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    const resultadoValidacion = validarEmail.test(email);

    if (!nombre || !apellido || !email || !password || !telefono) {
      console.log("campos vacios");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son obligatorios",
      });
    } else if (!resultadoValidacion) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El correo ingresado no es correcto",
      });
    } else if (password.length < 5) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Contraseña debe ser mayor a 5 digitos ",
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registro existoso",
        showConfirmButton: false,
        timer: 1500,
      });

      startRegister(nombre, apellido, email, password, telefono);
      setValidated(true);
    }
  };

  return (
    <>
      <div>
        {error ? <h3 className="errorStyle">{error}</h3> : ""}
        <Form
          validated={validated}
          className=" d-flex align-items-center  flex-column "
        >
          <Col md={6} sm={12} controlid="validationCustom01">
            <Card className="p-3 my-5  ">
              <Form>
                <Form.Group
                  as={Col}
                  controlid="validationCustom0"
                  onChange={(e) => setNombre(e.target.value)}
                >
                  <Form.Label>
                    <strong>Nombre</strong>
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="nombre"
                    //onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ingrese nombre"
                  />
                </Form.Group>
                <Form.Group as={Col} controlid="validationCustom02">
                  <Form.Label>
                    <strong>Apellido</strong>
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="apellido"
                    onChange={(e) => setApellido(e.target.value)}
                    placeholder="Ingrese apellido"
                  />
                </Form.Group>
                <Form.Group as={Col} controlid="validationCustom02">
                  <Form.Label>
                    <strong>Email</strong>
                  </Form.Label>
                  <Form.Control
                    required
                    type="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@hotmail.com"
                  />
                </Form.Group>
                <Form.Group as={Col} controlid="validationCustom02">
                  <Form.Label>
                    <strong>Password</strong>
                  </Form.Label>
                  <Form.Control
                    required
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Ingrese password"
                  />
                </Form.Group>
                <Form.Group as={Col} controlid="validationCustom02">
                  <Form.Label>
                    <strong>Telefono</strong>
                  </Form.Label>
                  <Form.Control
                    required
                    type="number"
                    id="telefono"
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="Ingrese telefono"
                  />
                </Form.Group>
                <Button type="submit" className="mt-3" onClick={handleSubmit}>
                  Registrar
                </Button>
              </Form>
            </Card>
          </Col>
        </Form>
      </div>
    </>
  );
}

export default ValidarRegistro;
