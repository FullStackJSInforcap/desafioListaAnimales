export default class Animal{

    constructor(nombre, enfermedad){
        this._nombre = nombre;
        this._enfermedad = enfermedad;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get enfermedad(){
        return this._enfermedad;
    }

    set enfermedad(enfermedad){
        this._enfermedad = enfermedad;
    }

    datosAnimal(){
        return `Nombre: ${this._nombre}, Enfermedad: ${this._enfermedad}`;
    }

}