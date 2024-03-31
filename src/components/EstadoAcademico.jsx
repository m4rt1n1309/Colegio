import { useEffect, useState } from "react";
import pruebaApi from "../api/pruebaApi";
import { Table } from "react-bootstrap";
import "../style/ppprincipal.css"
import CargarNotas from "./CargarNotas";


const EstadoAcademico = () => {
  const [alumno, setAlumno] = useState(null);
  const alumnoIdLocalStorage = localStorage.getItem("alumnoId"); // Obtener el ID del alumno del localStorage
 



  useEffect(() => {
    const obtenerAlumno = async () => {
      try {
        if (!alumnoIdLocalStorage) {
          console.error("No se encontró el ID del alumno en el localStorage");
          return;
        }
        // Realizar la solicitud al backend para obtener la lista de alumnos
        const resp = await pruebaApi.get("/admin/listaalumnos/");
        // Obtener la lista de alumnos del backend
        const listaAlumnos = resp.data.listaAlumnos;

        // Buscar el alumno con el ID que coincida con el ID del localStorage
        const alumnoEncontrado = listaAlumnos.find(
          (alumno) => alumno._id === alumnoIdLocalStorage
        );

        if (alumnoEncontrado) {
          // Si se encuentra el alumno, establecer el estado del alumno con los datos encontrados
          setAlumno(alumnoEncontrado);
        } else {
          console.error("No se encontró el alumno con el ID especificado");
        }
      } catch (error) {
        console.error("Error al obtener los datos del alumno:", error);
      }
    };

    obtenerAlumno();
  }, [alumnoIdLocalStorage]); // Se ejecutará cada vez que cambie el ID del alumno en el localStorage

  if (!alumno) {
    return <p>Cargando...</p>; // Muestra un mensaje de carga mientras se obtienen los datos del alumno
  }
  console.log(alumno);

 
  return (
    <>
    <div className="wrapper">
      <h1 className="textoAlumnos"> Estado Académico del Alumno</h1>

      <div className="d-flex justify-content-center">
      <CargarNotas />
      </div>
      
     
      
      <Table
        striped
        bordered
        hover
        variant="ligth"
        style={{ 
          maxWidth: "500px", // Establece el ancho máximo de la tabla
          margin: "0 auto", // Centra la tabla horizontalmente
          borderCollapse: "collapse", 
          border: "2px solid black"
         }}
      >
        <thead className="bold">
          <tr>
            <th>Materias</th>
            <th>Nota</th>
          </tr>
        </thead>
        <tbody>
          {/* Renderizar las materias y notas del alumno */}
          {/* Asegúrate de ajustar esto según la estructura de datos en tu backend */}
          <tr>
            <td>Matemáticas</td>
            <td>{alumno.matematicas}
            </td>


          </tr>
          <tr>
            <td>Lengua y Literatura</td>
            <td>{alumno.lenguaLiteratura}</td>
          </tr>
          <tr>
            <td>Biologia</td>
            <td>{alumno.biologia}</td>
          </tr>
          <tr>
            <td>Física</td>
            <td>{alumno.fisica}</td>
          </tr>
          <tr>
            <td>Quimica</td>
            <td>{alumno.quimica}</td>
          </tr>
          <tr>
            <td>Economía</td>
            <td>{alumno.economia}</td>
          </tr>
          <tr>
            <td>Geografía</td>
            <td>{alumno.geografia}</td>
          </tr>
          <tr>
            <td>Historia</td>
            <td>{alumno.historia}</td>
          </tr>
          <tr>
            <td>Educación Física</td>
            <td>{alumno.educacionFisica}</td>
          </tr>
        </tbody>
      </Table>
      </div>
    </>
  );
};

export default EstadoAcademico;
