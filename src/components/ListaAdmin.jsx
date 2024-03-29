import { useEffect } from "react";
import pruebaApi from "../api/pruebaApi";
import { useState } from "react";
import { Table } from "react-bootstrap";
import "../style/login.css";

export const ListaAdmin = () => {
  const [cargarAdmin, setCargarAdmin] = useState([]);
  const ListaAdmin = async () => {
    try {
      const resp = await pruebaApi.get("/admin/listaadmin");
      setCargarAdmin(resp.data.listaAdmin);
      console.log(cargarAdmin);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    ListaAdmin();
  }, [cargarAdmin]);

  return (
    <>
      <h1 className="textoAlumnos"> Administradores</h1>
      
      <Table
        striped
        bordered
        hover
        variant="ligth"
        style={{ borderCollapse: "collapse", border: "2px solid black" }}
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
                  {/* <button
                    style={{ backgroundColor: "red", color: "black" }}
                    onClick={() => handleEliminarClick(alumno._id)}
                  >
                    &#10060; 
                  </button> */}
                  
                  
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};