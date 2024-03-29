import { useEffect } from "react";
import pruebaApi from "../api/pruebaApi";
import { useState } from "react";
import { Table } from "react-bootstrap";
import "../style/login.css";
import ModalRegistro from "./ModalRegistro";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import "../style/ppprincipal.css"

export const Alumnos = () => {
  const [cargarAlumnos, setCargarAlumnos] = useState([]);

  const listaAlumnos = async () => {
    try {
      const resp = await pruebaApi.get("/admin/listaalumnos");
      setCargarAlumnos(resp.data.listaAlumnos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listaAlumnos();
  }, [cargarAlumnos]);

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

  const handleEditarClick = async (id) => {
    try {
      // Realiza la solicitud PUT para editar el alumno con el ID especificado
      const resp = await pruebaApi.put(`/admin/editaralumno/${id}`);

      // Verifica si la solicitud se completó con éxito (código de estado 200)
      if (resp.status === 200) {
        // Muestra un mensaje de éxito utilizando SweetAlert u otra biblioteca de notificación
        Swal.fire({
          icon: "success",
          title: "Datos del alumno actualizados correctamente",
          showConfirmButton: false,
          timer: 1500,
        });

        // Aquí puedes realizar cualquier otra acción necesaria, como recargar la lista de alumnos
        listaAlumnos();
      } else {
        // Si la solicitud no se completó con éxito, muestra un mensaje de error
        throw new Error("No se pudieron actualizar los datos del alumno");
      }
    } catch (error) {
      // Captura y maneja cualquier error que pueda ocurrir durante el proceso
      console.error("Error al actualizar los datos del alumno:", error);
      // Muestra un mensaje de error utilizando SweetAlert u otra biblioteca de notificación
      Swal.fire({
        icon: "error",
        title: "Error al actualizar los datos del alumno",
        text: "Por favor, inténtalo de nuevo más tarde",
      });
    }
  };

  return (
    <>
    <div className="wrapper">
      <h1 className="textoAlumnos"> Alumnos</h1>
      <div className="d-flex justify-content-center">
      <ModalRegistro />
      </div>

      <Table
        striped
        bordered
        hover
        variant="ligth"
        style={{ 
          maxWidth: "1000px", // Establece el ancho máximo de la tabla
          margin: "0 auto", // Centra la tabla horizontalmente
          borderCollapse: "collapse", 
          border: "2px solid black"
         }}
      >
        <thead className="bold">
          <tr>
            {/* <th>#ID</th> */}
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Curso</th>
            <th>Situacion Cuota</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {cargarAlumnos.map((alumno) => {
            return (
              <tr key={alumno._id}>
                {/* <td style={{ fontSize: "smaller" }}>{alumno._id}</td> */}
                <td>{alumno.nombre}</td>
                <td>{alumno.apellido}</td>
                <td>{alumno.curso}</td>
                <td style={{ color: alumno.situacionCuota ? "green" : "red" }}>
                  {alumno.situacionCuota ? "Pago al día" : "Pendiente de pago"}
                </td>
                <td>
                  <button style={{ backgroundColor: "green", color: "white" }}>
                    <Link
                      to={`/alumnos/${alumno._id}`}
                      onClick={() =>
                        localStorage.setItem("alumnoId", alumno._id)
                      }
                    >
                      Mostrar Más
                    </Link>
                  </button>
                  {/* Botón para eliminar */}
                  <button
                    style={{ backgroundColor: "red", color: "black" }}
                    onClick={() => handleEliminarClick(alumno._id)}
                  >
                    &#10060; {/* Icono de cruz */}
                  </button>
                  
                  
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      </div>
    </>
  );
};
