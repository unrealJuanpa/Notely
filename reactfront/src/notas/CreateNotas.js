import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:8000/notas/'

const CompCreateNotas = () => {
    let ff = '';
    const[titulo, setTitulo] = useState('')
    const[fecha, setFecha] = useState('')
    const[contenido, setContenido] = useState('')
    const navigate = useNavigate()

    function f() {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
        const day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
        ff = `${year}-${month}-${day}`;
        return ff;
    }

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {titulo:titulo,fecha:ff,contenido:contenido})
        window.history.go(-1)
    }

    return (
        <div className='container text-left'>
            <div class="card-header">
                <h5>Create New Notas</h5>
            </div>

            <div class="card-body">
                <h5>Notas Data</h5>
                <div class="row">
                    <div class="col-md-8">
                        <form onSubmit={store}>
                            <div class="form-group">
                                <label>Titulo</label>
                                <input value={titulo} onChange={ (e) => setTitulo(e.target.value) } type="text" class="form-control" placeholder="Enter Titulo"></input>
                            </div>
                            <div class="form-group">
                                <label>Fecha</label>
                                <input value={f()} onChange={ (e) => setFecha(e.target.value) } type="date" class="form-control" placeholder="Enter Fecha" readOnly></input>
                            </div>
                            <div class="form-group">
                                <label>Contenido</label>
                                <input value={contenido} onChange={ (e) => setContenido(e.target.value) } type="text" class="form-control" placeholder="Enter Contenido"></input>
                            </div>
                            <button type="submit" class="btn btn-primary">Store</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompCreateNotas
