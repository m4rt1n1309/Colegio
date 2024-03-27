import { useEffect } from "react";
import pruebaApi from "../api/pruebaApi";
import { useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import "../style/login.css";
import ModalRegistro from "./ModalRegistro";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export const Alumnos = () => {
  const [cargarAlumnos, setCargarAlumnos] = useState([]);
  const [alumnoEditar, setAlumnoEditar] = useState({});
  const [showEditar, setShowEditar] = useState(false);

  const listaAlumnos = async () => {
    try {
      const resp = await pruebaApi.get("/admin/listaalumnos");
      setCargarAlumnos(resp.data.listaAlumnos);
      console.log(cargarAlumnos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listaAlumnos();
  }, []);

  const handleEliminarClick = async (id) => {
    // Muestra una ventana emergente de confirmación antes de eliminar el alumno
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      // Si el usuario confirma la eliminación
      if (result.isConfirmed) {
        try {
          // Realiza la solicitud para eliminar el alumno con el ID especificado
          const response = await pruebaApi.delete(
            `/admin/eliminaralumno/${id}`
          );

          // Verifica si la solicitud se completó con éxito (código de estado 200)
          if (response.status === 200) {
            // Muestra un mensaje de éxito utilizando SweetAlert u otra biblioteca de notificación
            Swal.fire({
              icon: "success",
              title: "Alumno eliminado correctamente",
              showConfirmButton: false,
              timer: 1500,
            });

            // Aquí puedes realizar cualquier otra acción necesaria, como recargar la lista de alumnos
          } else {
            // Si la solicitud no se completó con éxito, muestra un mensaje de error
            throw new Error("No se pudo eliminar el alumno");
          }
        } catch (error) {
          // Captura y maneja cualquier error que pueda ocurrir durante el proceso
          console.error("Error al eliminar el alumno:", error);
          // Muestra un mensaje de error utilizando SweetAlert u otra biblioteca de notificación
          Swal.fire({
            icon: "error",
            title: "Error al eliminar el alumno",
            text: "Por favor, inténtalo de nuevo más tarde",
          });
        }
      }
    });
  };

  const editarAlumno = (alumno) => {
    setAlumnoEditar(alumno);
    setShowEditar(true);
  };

  const handleChangeEditar = (campo, valor) => {
    setAlumnoEditar({
      ...alumnoEditar,
      [campo]: valor,
    });
  };

  const editarAlumnoDB = async () => {
    try {
      const { nombre, materia, nota } = alumnoEditar;
      const resp = await pruebaApi.put("/admin/editaralumno", {
        nombre,
        materia,
        nota,
      });

      // Verifica si la solicitud se completó con éxito (código de estado 200)
      if (resp.status === 200) {
        // Muestra un mensaje de éxito utilizando SweetAlert u otra biblioteca de notificación
        Swal.fire({
          icon: "success",
          title: "Alumno editado correctamente",
          showConfirmButton: false,
          timer: 1500,
        });

        // Cierra el modal de edición
        setShowEditar(false);

        // Actualiza la lista de alumnos
        listaAlumnos();
      } else {
        // Si la solicitud no se completó con éxito, muestra un mensaje de error
        throw new Error("No se pudo editar el alumno");
      }
    } catch (error) {
      // Captura y maneja cualquier error que pueda ocurrir durante el proceso
      console.error("Error al editar el alumno:", error);
      // Muestra un mensaje de error utilizando SweetAlert u otra biblioteca de notificación
      Swal.fire({
        icon: "error",
        title: "Error al editar el alumno",
        text: "Por favor, inténtalo de nuevo más tarde",
      });
    }
  };
  return (
    <>
      <h1 className="textoAlumnos"> Alumnos</h1>
      <ModalRegistro />

      <Table
        striped
        bordered
        hover
        variant="light"
        style={{ borderCollapse: "collapse", border: "2px solid black" }}
      >
        <thead className="bold">
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Curso</th>
            <th>Situación Cuota</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {cargarAlumnos.map((alumno) => (
            <tr key={alumno._id}>
              <td>{alumno.nombre}</td>
              <td>{alumno.apellido}</td>
              <td>{alumno.curso}</td>
              <td style={{ color: alumno.situacionCuota ? "green" : "red" }}>
                {alumno.situacionCuota ? "Pago al día" : "Pendiente de pago"}
              </td>
              <td>
                <button style={{ backgroundColor: "green", color: "black" }}>
                  <Link
                    to={`/alumnos/${alumno._id}`}
                    onClick={() => localStorage.setItem("alumnoId", alumno._id)}
                  >
                    Mostrar Más
                  </Link>{" "}
                </button>
                <button
                  style={{ backgroundColor: "red", color: "black" }}
                  onClick={() => handleEliminarClick(alumno._id)}
                >
                  &#10060;
                </button>
                <button
                  style={{ backgroundColor: "yellow", color: "black" }}
                  onClick={() => editarAlumno(alumno)}
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showEditar} onHide={() => setShowEditar(false)}>
        <Form onSubmit={editarAlumnoDB}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={alumnoEditar.nombre}
                onChange={(e) => handleChangeEditar("nombre", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMateria">
              <Form.Label>Materia</Form.Label>
              <Form.Control
                type="text"
                value={alumnoEditar.materia}
                onChange={(e) => handleChangeEditar("materia", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMateria">
              <Form.Label>Curso</Form.Label>
              <Form.Control
                type="text"
                value={alumnoEditar.curso}
                onChange={(e) => handleChangeEditar("curso", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMateria">
              <Form.Label>Situacion Cuota</Form.Label>
              <Form.Control
                type="text"
                value={alumnoEditar.situacionCuota}
                onChange={(e) =>
                  handleChangeEditar("SituacionCuota", e.target.value)
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNota">
              <Form.Label>Nota</Form.Label>
              <Form.Control
                type="number"
                value={alumnoEditar.nota}
                onChange={(e) => handleChangeEditar("nota", e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowEditar(false)}>
              Cancelar
            </Button>
            <Button type="submit">Guardar Cambios</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
