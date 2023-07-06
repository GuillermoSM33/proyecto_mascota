import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Routes, BrowserRouter} from 'react-router-dom';
import Inicio from './paginas/Inicio';
import Nosotros from './paginas/Nosotros';
import Categorias from './paginas/Categorias';
import Contacto from './paginas/Contacto';
import Registro from './paginas/Registro';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Inicio/>}></Route>
      <Route path='/nosotros' element={<Nosotros/>}></Route>
      <Route path='/categorias' element={<Categorias/>}></Route>
      <Route path='/contacto' element={<Contacto/>}></Route>
      <Route path='/registro' element={<Registro/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
