import React from 'react'
import { useEffect } from 'react';
import pruebaApi from '../api/pruebaApi';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import "../style/login.css"
import ModalRegistro from './ModalRegistro';

export const Alumnos = () => {
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
    <div>
    <h1 className='textoAlumnos'> Alumnos</h1>
    <ModalRegistro/>
    </div>
    <Table striped bordered hover variant="dark">
			<thead>
				<tr>
					<th>#ID</th>
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
							<td style={{ fontSize: "smaller" }}>{alumno._id}</td>
							<td>{alumno.nombre}</td>
							<td>{alumno.apellido}</td>
                            <td>{alumno.curso}</td>
                            <td style={{ color: alumno.situacionCuota ? 'green' : 'red' }}>
                            {alumno.situacionCuota ? 'Pago al día' : 'Pendiente de pago'}
                            </td>
                            <td>
                            <button style={{ backgroundColor:"green", color: 'black' }} onClick={() => handleMostrarMas(alumno._id)}>
                             Mostrar Más
                            </button>
                            {/* Botón para eliminar */}
                            <button style={{ backgroundColor:"red", color: 'black' }} onClick={() => handleEliminarClick(alumno._id)}>
                             &#10060; {/* Icono de cruz */}
                            </button>
              
                            {/* Botón para editar */}
                            <button style={{ backgroundColor:"yellow", color: 'black' }} onClick={() => handleEditarClick(alumno._id)}>
                             Editar
                            </button>
                            </td>
						</tr>
					);
				})}
			</tbody>
		</Table>
    </>
  )
}
