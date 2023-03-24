export class persona{
    id?: number; /*con el signo de pregunta dejamos en claro que este campo no es necesario  */
    nombre: String;
    apellido: String;
    img: String;

    constructor(nombre: String, apellido: String, img: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
    }
}