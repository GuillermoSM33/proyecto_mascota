import React, { useState } from "react";
import axios from 'axios';
import Encabezado from "../componentes/Encabezado";
import Mascota from "../componentes/Mascota";
import { useNavigate } from "react-router-dom";

function Acceso(){
    const [campos, setCampos]=useState({
        correo_electronico:"",
        contrasenia:""
    });

    const[error,setError]=useState();
    const navegacion = useNavigate();

    const acceder = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:8082/acceso', campos)
        .then(respuesta =>{
            if(respuesta.data.Estatus==="CORRECTO"){
                localStorage.setItem('usuario', respuesta.data);
                navegacion('/')
            }else{
                setError(respuesta.data.Error);
            }
        })
        .catch(error=>console.log(error));
 
    }

    return(
        <>
        <form onSubmit={acceder}> 
            <input	type="email" placeholder="Email" name="correo_electronico"
            onChange={(e)=>setCampos({...campos,correo_electronico:e.target.value})} />
            <input	type="password" placeholder="contraseña" name="contrasenia"
            onChange={(e)=>setCampos({...campos,contrasenia:e.target.value})} />
            <button type="submit" >Ingresar</button>
        </form>
        </>
    );
}

export default Acceso;