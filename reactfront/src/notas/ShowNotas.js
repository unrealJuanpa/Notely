import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = 'http://localhost:8000/notas/'

const CompShowNotas = () => {
    const[notas, setNotas] = useState([])
    useEffect(() => {
            getNotas()
        },[]
    )

    const getNotas = async () => {
        const res = await axios.get(URI)
        setNotas(res.data)
    }

    const deleteNotas = async (id) => {
        await axios.delete(`${URI}${id}`)
        getNotas()
    }

    return (
        <div className='container'>
            <div className="card-header text-left">
                <h5>Notas Controll</h5>
                <span className="d-block m-t-5">Use the different action buttons to manage Notas!</span>
                <br></br>
                <Link to="/notas/create" type="button" className="btn btn-info" data-toggle="tooltip">Create new Register</Link>
            </div>

            <div class="card-block table-border-style">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Titulo</th>
                                <th>Fecha</th>
                                <th>Contenido</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                notas.map(
                                    (dtyo) => (
                                        <tr key={dtyo.id}>
                                            <th scope="row">{dtyo.id}</th>
                                            <td>{dtyo.titulo}</td>
                                            <td>{dtyo.fecha}</td>
                                            <td>{dtyo.contenido}</td>
                                            <td>
                                                <Link to={`/notas/edit/${dtyo.id}`} className='btn btn-info'>Edit</Link>
                                                <button onClick={ () => deleteNotas(dtyo.id) } type="button" class="btn btn-danger" data-toggle="tooltip">Delete</button>
                                            </td>
                                        </tr>
                                    )
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowNotas

