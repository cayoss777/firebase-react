import React from "react";
import { Helmet } from "react-helmet";
import { Header, Titulo } from "../elementos/Header";
import BtnRegresar from "../elementos/BtnRegresar";

const GastosPorCategoria = () => {
    return ( 
        <>

        <Helmet>
            <title>ff</title>
        </Helmet>
        <Header>
            <BtnRegresar>
                
            </BtnRegresar>
            <Titulo>Gastos por día </Titulo>
        </Header>
            
        </>
     );
}
 
export default GastosPorCategoria;