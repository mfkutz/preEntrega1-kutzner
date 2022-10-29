/* let decimal = 0.91
let redondeado = Math.ceil(decimal)
console.log(redondeado); */

//OBJETO
/* let objeto1 = {nombre: "Martin", edad : 40};

console.log(objeto1);
console.log(objeto1.edad);
console.log(objeto1.nombre);
//asigno elemento altura al objeto
objeto1.altura = "1,8m";
//imprimo nuevamente, comparo con linea 8
console.log(objeto1); */


/*  class Producto{
    constructor(nombre,precio,vencimiento){
        this.nombre = nombre
        this.precio = precio
        this.vencimiento = vencimiento
    }
    iva(){
       this.precio = this.precio * 1.21
    }
    descuento(){
        this.precio = this.precio - this.precio * 0.10
    }
}

const producto1 = new Producto("Arroz", 40, "10/2024" )
const producto2 = new Producto("Papas", 12, "11/2022" )

console.log(producto1);
producto1.peso = 2
console.log(producto1);


producto1.iva()
console.log(producto1.precio);


producto2.descuento()
console.log(producto2.precio); */


class Robot{
    constructor(nombre, funcion, material, precio){
    this.nombre = nombre.toUpperCase()
    this.funcion = funcion
    this.material = material
    this.precio = precio
}
saludar(){
    console.log(`Hola humano, mi nombre es ${this.nombre}`);
}
accion(){
    console.log(`${this.nombre}: Iniciaré la actividad: "${this.funcion}" en 30 segundos`);
}
intereses(){
    this.precio = this.precio * 1.1
}
}

const robot1 = new Robot("rj2", "Volar", "Fibra de carbono", 1200);
const robot2 = new Robot("mk4", "Levantar objetos", "Acero", 1800);


robot1.saludar()
robot1.accion()

robot2.accion()
robot2.saludar()
robot2.intereses()
console.log( Math.trunc ( robot2.precio));



