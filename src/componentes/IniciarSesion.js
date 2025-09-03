import React, {useState} from "react";

import { Helmet } from "react-helmet";
import { ContenedorHeader, Header, Titulo } from "../elementos/Header";
import Boton from "../elementos/Boton";
import { ContenedorBoton, Formulario, Input } from "../elementos/ElementosDeFormulario";

import {useNavigate} from 'react-router-dom';

import {ReactComponent as SvgLogin} from './../imagenes/registro.svg';

import Alerta from "./../elementos/Alerta";
//import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

import styled from 'styled-components';
//import { auth } from "../firebaseConfig"; // 👈 Ajusta la ruta según tu proyecto
import {auth} from './../firebase/firebaseConfig';
const Svg = styled(SvgLogin)`
	width: 100%;
	max-height: 6.25rem; /* 100px */
	margin-bottom: 1.25rem; /* 20px */
`;

const IniciarSesion = () => {
const navigate = useNavigate();
	const [correo, establecerCorreo] = useState('');
	const [password, establecerPassword] = useState('');
	const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
	const [alerta, cambiarAlerta] = useState({});

	const handleChange = (e) => {
		if(e.target.name === 'email'){
			establecerCorreo(e.target.value);
		} else if (e.target.name === 'password'){
			establecerPassword(e.target.value);
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		cambiarEstadoAlerta(false);
		cambiarAlerta({});

		// Comprobamos del lado del cliente que el correo sea valido.
		const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
		if( !expresionRegular.test(correo) ){
			cambiarEstadoAlerta(true);
			cambiarAlerta({
				tipo: 'error',
				mensaje: 'Por ingresa un correo electrónico valido'
			});
			return;
		}

		if(correo === '' || password === ''){
			cambiarEstadoAlerta(true);
			cambiarAlerta({
				tipo: 'error',
				mensaje: 'Por favor rellena todos los datos'
			});
			return;
		}

		try {
			await signInWithEmailAndPassword(auth, correo, password);
			navigate('/');
		} catch(error) {
			console.log(error)
			cambiarEstadoAlerta(true);
			let mensaje;
			switch(error.code){
				case 'auth/wrong-password':
					mensaje = 'La contraseña no es correcta.'
					break;
				case 'auth/user-not-found':
					mensaje = 'No se encontro ninguna cuenta con este correo electrónico.'
					break;
				default:
					mensaje = 'Hubo un error al intentar iniciar sesión.'
				break;
			}

			cambiarAlerta({tipo: 'error', mensaje: mensaje});
		}
	}

	return (
		<>
			<Helmet>
				<title>Iniciar Sesión</title>
			</Helmet>

			<Header>
				<ContenedorHeader>
					<Titulo>Iniciar Sesión</Titulo>
					<div>
						<Boton to="/crear-cuenta">Registrarse</Boton>
					</div>
				</ContenedorHeader>
			</Header>

			<Formulario onSubmit={handleSubmit}>
				<Svg />
				<Input 
					type="email"
					name="email"
					placeholder="Correo Electrónico"
					value={correo}
					onChange={handleChange}
				/>
				<Input 
					type="password"
					name="password"
					placeholder="Contraseña"
					value={password}
					onChange={handleChange}
				/>
				<ContenedorBoton>
					<Boton as="button" primario type="submit">Iniciar Sesión</Boton>
				</ContenedorBoton>
			</Formulario>

			<Alerta 
				tipo={alerta.tipo}
				mensaje={alerta.mensaje}
				estadoAlerta={estadoAlerta}
				cambiarEstadoAlerta={cambiarEstadoAlerta}
			/>
		</>
	);
}
 
export default IniciarSesion;