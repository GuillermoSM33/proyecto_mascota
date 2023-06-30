import React from "react";
import Encabezado from "../componentes/Encabezado";
import Mascota from "../componentes/Mascota";

function Categorias(){
    return(
        <>
        <Encabezado></Encabezado>
        <div className="Container">
            <h1>Bienvenidos a Categorias</h1>
            <Mascota></Mascota>
        </div>
        </>
    );
}

export default Categorias;