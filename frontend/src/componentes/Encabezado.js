import react from 'react';
import { Link } from 'react-router-dom';

function Encabezado() {
    return (
<>
<nav>
  <ul>
    <li>
      <img src="IMG/icon_eyelash.png" className="photo" alt="Logo" />
    </li>
    <li className="photo_and_name_of_company">
      {" "}
      <Link to="Index.html">Marings</Link>
    </li>
    <li>
      <Link to="Index.html">Inicio</Link> 
    </li>
    <li>
      <Link to="lista_pro.html">Productos</Link>
    </li>
    <li>
      <Link to="compras.html">Compras</Link>
    </li>
    <li>
      <Link to="nosotros.html">Nosotros</Link>
    </li>
    <li>
      <Link to="categorys.html">Categorías</Link>
    </li>
    <li>
      <Link to="contactos.html">Contactos</Link>
    </li>
  </ul>
</nav>
</>

    );
}

export default Encabezado;