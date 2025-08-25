import React from "react";
import { Helmet } from "react-helmet";
import { ContenedorHeader, Header, Titulo } from "../elementos/Header";
import Boton from "../elementos/Boton";
import { ContenedorBoton, Formulario, Input } from "../elementos/ElementosDeFormulario";

const IniciarSesion = () => {
    return ( 
        <>
          
          <Helmet>
            <title> Iniciar sesion</title>
          </Helmet>
           
            <Header>
                <ContenedorHeader>
                    <Titulo>Iniciar ses</Titulo>
                    <div>
                       <Boton to="/registrar-usuario">Registrar Usuario</Boton>
                    </div>
                </ContenedorHeader>
            </Header>
            <Formulario>
                
                <Input                 
                type="email"
                name="email"
                placeholder="correo electronico">
                </Input>

                  <Input                 
                type="password"
                name="password"
                placeholder="Contraseña">
                </Input>


                <ContenedorBoton>
                    <Boton as="butoon" primario type="submit">
                    Iniciar Sesión
                    </Boton>
                </ContenedorBoton>

            </Formulario>
         </>
        
     );
}
 
export default IniciarSesion;