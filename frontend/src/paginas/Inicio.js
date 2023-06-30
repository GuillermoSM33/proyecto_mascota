import React from "react";
import Encabezado from "../componentes/Encabezado";

function Inicio(){
    return(
        <>
        <Encabezado></Encabezado>
        <div className="Container">
            <h1>Bienvenidos a nuestro portal</h1>
        </div>
        </>
    );
}

export default Inicio;