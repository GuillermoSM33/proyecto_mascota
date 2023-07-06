import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Encabezado from "../componentes/Encabezado";
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    const [campos, setCampos] = useState({
        correo_electronico: '',
        contrasenia: ''
    });

    const navegacion = useNavigate();

    const [error, setError] = useState('');
    function checaEmail(valor){
        if(valor.includes('ruiz')){
            setCampos({...campos, correo_electronico:valor})
        }
    }

    const autenticar = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:8082/acceso', campos)
        .then(respuesta => {
            if (respuesta.data.Estatus === 'CORRECTO'){
                localStorage.setItem('usuario', respuesta.data);
                navegacion('/');
            }else{
                setError(respuesta.data.Error);
            }
        })
        .catch(error => console.log(error));
    }

    return (
        <>
        <Encabezado></Encabezado>
            <div className="container-fluid w-75 p-3 text-center">
                <h1 className="py-4">Acceso</h1>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="p-3 rounded w-25">
                    <div className="text-danger">
                        {error && error}
                    </div>
                    <form onSubmit={autenticar}>
                        <div className="mb-3">
                            <input type="email" placeholder="Correo Electrónico" name="correo_electronico"
                                onChange={e => checaEmail(e.target.value)} className="form-control rounded-21" autoComplete="">
                            </input>
                        </div>
                        <div className="mb-3">
                            <input type="password" placeholder="Contraseña" name="contrasenia"
                                onChange={e => setCampos({ ...campos, contrasenia: e.target.value })} className="form">
                            </input>
                        </div>
                        <button type="submit" className="btn bg-marino w-100 rounded-10 text-white">Ingresar</button>
                    </form>
                </div>
            </div>
        </div>
    </>
);
    
}

export default Login;











