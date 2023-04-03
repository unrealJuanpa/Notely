import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/notas/'

const CompEditNotas = () => {
    const[titulo, setTitulo] = useState('')
    const[fecha, setFecha] = useState('')
    const[contenido, setContenido] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
            titulo: titulo,
            fecha: fecha,
            contenido: contenido
        })
        window.history.go(-1)
    }

    useEffect( () => 
        { getNotasByid() }, 
        []
    )

    const getNotasByid = async () => {
        const res = await axios.get(URI + id)
            setTitulo(res.data.titulo)
            setFecha(res.data.fecha)
            setContenido(res.data.contenido)
    }

    return (
        <div className='container text-left'>
            <div class="card-header">
                <h5>Edit New Notas</h5>
            </div>

            <div class="card-body">
                <h5>Notas Data</h5>
                <div class="row">
                    <div class="col-md-8">
                        <form onSubmit={update}>
                            <div class="form-group">
                                <label>Titulo</label>
                                <input value={titulo} onChange={ (e) => setTitulo(e.target.value) } type="text" class="form-control" placeholder="Enter Titulo"></input>
                            </div>
                            <div class="form-group">
                                <label>Fecha</label>
                                <input value={fecha} onChange={ (e) => setFecha(e.target.value) } type="date" class="form-control" placeholder="Enter Fecha" readOnly></input>
                            </div>
                            <div class="form-group">
                                <label>Contenido</label>
                                <input value={contenido} onChange={ (e) => setContenido(e.target.value) } type="text" class="form-control" placeholder="Enter Contenido"></input>
                            </div>
                            <button type="submit" class="btn btn-primary">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompEditNotas
