import React from "react";
import { Helmet } from "react-helmet";
import { ContenedorHeader, Header, Titulo } from "../elementos/Header";
import Boton from "../elementos/Boton";
import { ContenedorBoton, Formulario, Input } from "../elementos/ElementosDeFormulario";


const RegistrarUsuario = () => {
    return (  
        <>
          <Helmet>
            <title> Crear cuentas</title>
          </Helmet>
           
            <Header>
                <ContenedorHeader>
                    <Titulo>Crear Cuenta</Titulo>
                    <div>
                        <Boton to="/iniciar-sesion"> Iniciar Sesión</Boton>
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

                      <Input                 
                type="password"
                name="password2"
                placeholder="Repetir Contraseña">
                </Input>
                <ContenedorBoton>
                    <Boton as="butoon" primario type="submit">
                    Crear Cuenta
                    </Boton>
                </ContenedorBoton>

            </Formulario>
        </>
    );
}
 
export default RegistrarUsuario;