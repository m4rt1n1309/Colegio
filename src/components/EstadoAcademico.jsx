import React from 'react'
import pruebaApi from '../api/pruebaApi';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';

export const EstadoAcademico = () => {
    const [cargarAlumnos, setCargarAlumnos] = useState ([]);
    const listaAlumnos = async ()=>{
        try {
			const resp = await pruebaApi.get('/admin/listaalumnos');
            setCargarAlumnos(resp.data.listaAlumnos);  
            console.log(cargarAlumnos);
        } catch (error) {
			console.log(error);
		}
    };

    useEffect(() => {
		listaAlumnos();
	}, []);

  return (
    <>
    <h1 className='textoAlumnos'> Alumnos</h1>
   
    <Table striped bordered hover variant="ligth" style={{ borderCollapse: 'collapse', border: '2px solid black' }}>
			<thead className='bold'>
				<tr>
					{/* <th>#ID</th> */}
					<th>Materias</th>
					<th>Nota</th>
				</tr>
			</thead>

			<tbody>
    {cargarAlumnos.map((alumno) => (
      Object.entries(alumno).map(([materia, nota]) => (
        // Solo renderizamos si la propiedad actual es una materia
        (materia !== '_id') &&
        <tr key={materia}>
          <td>{materia}</td>
          <td>{nota}</td>
        </tr>
      ))
    ))}
  </tbody>
		</Table>
        </>
  )
}
