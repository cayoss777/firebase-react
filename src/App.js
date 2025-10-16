import React from "react";
import { Helmet } from "react-helmet";
import { ContenedorBotones, ContenedorHeader, Header, Titulo } from "./elementos/Header";
import Boton from "./elementos/Boton";
import BotonCerrarSesion from "./elementos/BotonCerrarSesion";

const App = () => {
  return (
    
    <>
      <Helmet>
        <title>
            Agregar Gastos
          </title>
      </Helmet>
  
      <Header>

      <ContenedorHeader>
        <Titulo>
          Agregar gasto diario
        </Titulo>
        <ContenedorBotones>
          <Boton to="/gastos-categoria">
            categoria
          </Boton >
          <Boton to="/lista-gastos">
            Lista
          </Boton>
          <BotonCerrarSesion>
            Sal
          </BotonCerrarSesion>
        </ContenedorBotones>
      </ContenedorHeader>
    </Header>
    </>
    );
}
 
export default App;

