import react from 'react';
import { Link } from 'react-router-dom';

function Encabezado(){
    return(
        <>
        <header>
        <h>OntaMiMascota.com</h>
        </header>
        <nav>
            <Link to='/'>Inicio</Link>
            <Link to='/nosotros'>Nosotros</Link>
            <Link to='/categorias'>Categorías</Link>
            <Link to='/contacto'>Contacto</Link>
        </nav>
        </>
    );
}

export default Encabezado;