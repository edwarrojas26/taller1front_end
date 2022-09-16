const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresionesRegulares = {
    TipoDoc: /^[a-zA-Z]{2,20}$/,
    NDoc:/^[0-9]{8,11}$/,
	nombre: /^[a-zA-Z\s]{4,20}$/, 
    apellido: /^[a-zA-Z0-9\s\_\-]{4,16}$/, 
    fecha: /^(0[0-9]|1[0-9])\/(0[0-9]|1[1-9])\/(0[0-9]|1[0-9]|2[0-9]|3[0-9])$/ ,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	contraseña: /^.{4,12}$/, 
    contraseña1: /^.{4,12}$/, 
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
	TipoDoc: false,
	NDoc: false,
	nombre: false,
    apellido: false,
	fecha: false,
	correo: false,
    contraseña:false,
    contraseña1:false,
    terminos:false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
        case "TipoDoc":
			validarCampo(expresionesRegulares.TipoDoc, e.target, 'TipoDoc');
		break;

        case "NDoc":
			validarCampo(expresionesRegulares.NDoc, e.target, 'NDoc');
		break;
        
		case "nombre":
			validarCampo(expresionesRegulares.nombre, e.target, 'nombre');
		break;
		case "apellido":
			validarCampo(expresionesRegulares.apellido, e.target, 'apellido');
		break;
		case "fecha":
			validarCampo(expresionesRegulares.fecha, e.target, 'fecha');
			validarPassword2();
		break;

        case "correo":
			validarCampo(expresionesRegulares.correo, e.target, 'correo')
		break;

		case "contraseña":
            validarCampo(expresionesRegulares.contraseña, e.target, 'contraseña')
			validarPassword2();
		break;
		case "contraseña1":
			validarCampo(expresionesRegulares.contraseña1, e.target, 'contraseña1');
		break;
		case "terminos":
			validarCampo(expresionesRegulares.terminos, e.target, 'terminos');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('grupo-correcto');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('contraseña');
	const inputPassword2 = document.getElementById('contraseña1');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});