import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Contenedor from './elementos/Contenedor';


// importar 
import { BrowserRouter,Route,Routes}from 'react-router-dom';

import IniciarSesion from './componentes/IniciarSesion';
import EditarGastos from './componentes/EditarGastos';
import GastosPorCategoria from './componentes/GastosPorCategoria';
import ListaGastos from './componentes/ListaGastos';
import RegistrarUsuario from './componentes/RegistrarUsuario';
import { Helmet } from 'react-helmet';

//icon
import favicon from './imagenes/logo.png';

import Fondo from './elementos/Fondo';
//import RutaProtegida from './componentes/RutasPrivadas';

//*Crear un componente
const Index=()=>{
  return( 
    <>
    
    <Helmet>
      <link ref="shortcut icon" href={favicon} type="image/x-icon"/>
      <title>HH</title>
    </Helmet>

    <BrowserRouter>
    <Contenedor>
      
      <Routes>
    
      <Route path='/editar-gastos' element={<EditarGastos/>}/>
{/**
 *   <RutaProtegida path="/categoria">
      <GastosPorCategoria>
      </GastosPorCategoria>
      </RutaProtegida>
 */}
    
      
      
      <Route path='/gastos-categoria' element={<GastosPorCategoria/>}/>
      
      
      <Route path='/iniciar-sesion' element={<IniciarSesion/>}/>
      <Route path='/lista-gastos' element={<ListaGastos/>}/>
      <Route path='/registrar-usuario' element={<RegistrarUsuario/>}/>
      <Route path='/registrar-usuario' element={<App/>}/>

      </Routes>
      
    </Contenedor>
    </BrowserRouter>

    <Fondo/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

