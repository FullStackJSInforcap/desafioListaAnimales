import Conejo from "./conejo.js";
import Gato from "./gato.js";
import Perro from "./perro.js";
import Propietario from "./propietario.js";

let propietarios = [];
let btnAgregar = document.querySelector('.btn');
btnAgregar.addEventListener('click', (event) => {
    event.preventDefault();
    let cadenaResultado = '';
    let txtPropietario = document.querySelector('#propietario');
    let txtTelefono = document.querySelector('#telefono');
    let txtDireccion = document.querySelector('#direccion');
    let txtNombreMascota = document.querySelector('#nombreMascota');
    let txtTipo = document.querySelector('#tipo');
    let txtEnfermedad = document.querySelector('#enfermedad');
    let resultado = document.querySelector('#resultado');
    if (txtTipo.value === 'perro') {
        let perro = new Perro(txtNombreMascota.value, txtEnfermedad.value);
        let propietario = new Propietario(txtPropietario.value, txtDireccion.value, txtTelefono.value, perro);
        propietarios.push(propietario);    
    } else if (txtTipo.value === 'gato') {
        let gato = new Gato(txtNombreMascota.value, txtEnfermedad.value);
        let propietario = new Propietario(txtPropietario.value, txtDireccion.value, txtTelefono.value, gato);
        propietarios.push(propietario);
    } else {
        let conejo = new Conejo(txtNombreMascota.value, txtEnfermedad.value);
        let propietario = new Propietario(txtPropietario.value, txtDireccion.value, txtTelefono.value, conejo);
        propietarios.push(propietario);
    }
    propietarios.forEach((propietarioTemporal) => {
        cadenaResultado = cadenaResultado + `<li>${propietarioTemporal.datosPropietario()}</li>`;
    });
    resultado.children[0].innerHTML = cadenaResultado;
});


