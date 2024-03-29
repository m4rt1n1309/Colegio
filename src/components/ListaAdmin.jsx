import { useEffect } from "react";
import pruebaApi from "../api/pruebaApi";
import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import "../style/login.css";
import Swal from "sweetalert2";
import "../style/ppprincipal.css"
import { RegistroScreen } from "./RegistroScreen";
import { Link, Navigate } from "react-router-dom";

export const ListaAdmin = () => {
  const [cargarAdmin, setCargarAdmin] = useState([]);
  const ListaAdmin = async () => {
    try {
      const resp = await pruebaApi.get("/admin/listaadmins");
      setCargarAdmin(resp.data.listaAdmin);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    ListaAdmin();
  }, [cargarAdmin]);

  const handleEliminarClick = async (id) => {
    // Primero, verifica si el ID del administrador que se está intentando eliminar es el ID del superadmin
    if (id === "65ff7cde8fcef532a189ff7d") {
      // Si es el superadmin, muestra un mensaje de advertencia indicando que no se puede eliminar
      Swal.fire({
        icon: "warning",
        title: "No se puede eliminar al superadmin",
        text: "El superadmin no puede ser eliminado",
      });
      return; // Sale de la función sin continuar con la eliminación
    }
  
    // Si no es el superadmin, muestra una ventana emergente de confirmación para eliminar el administrador
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
            `/admin/eliminaradmin/${id}`
          );

          // Verifica si la solicitud se completó con éxito (código de estado 200)
          if (response.status === 200) {
            // Muestra un mensaje de éxito utilizando SweetAlert u otra biblioteca de notificación
            Swal.fire({
              icon: "success",
              title: "Administrador eliminado correctamente",
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
          console.error("Error al eliminar el administrador:", error);
          // Muestra un mensaje de error utilizando SweetAlert u otra biblioteca de notificación
          Swal.fire({
            icon: "error",
            title: "Error al eliminar el administrador",
            text: "Por favor, inténtalo de nuevo más tarde",
          });
        }
      }
    });
  };

  return (
    <>
    <div className="wrapper">
      <h1 className="textoAlumnos"> Administradores</h1>
      <Link to="/registro">
        <Button variant="primary">
          Registrar
        </Button>
      </Link>
      <Table
        striped
        bordered
        hover
        variant="ligth"
        style={{ 
          maxWidth: "700px", // Establece el ancho máximo de la tabla
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
            <th>Email</th>
            <th>Telefono</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {cargarAdmin.map((admin) => {
            return (
              <tr key={admin._id}>
                {/* <td style={{ fontSize: "smaller" }}>{alumno._id}</td> */}
                <td>{admin.nombre}</td>
                <td>{admin.apellido}</td>
                <td>{admin.email}</td>
                <td>{admin.telefono}</td>                
                <td>
                  {/* Botón para eliminar */}
                  <button
                    style={{ backgroundColor: "red", color: "black" }}
                    onClick={() => handleEliminarClick(admin._id)}
                  >
                    &#10060; 
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