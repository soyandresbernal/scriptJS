/* Prototype
Todos los objetos en JavaScript
provienen de Object; 
todos los objetos heredan 
métodos y propiedades de Object.prototype
 */

/* //FUNCION :constructora

function Animal(nombre, genero) {
  //atributos:
  this.nombre;
  this.genero;
}

// Es conveniente separa metodos de  propiedades del constructor

//Metodo
Animal.prototype.ruido = function () {
  console.log("Haciendo ruido");
};

//Creacion de  Objeto
const diosDeLaDestruccion = new Animal("Bills", "Felino");
console.log(diosDeLaDestruccion);
 */
//------------------------------

//CLASES

/* class Animal {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }
  //metoodos
  ruido() {
    console.log("Haciendo ruido");
  }
}

const diosDeLaDestruccion = new Animal("Bills", "Felino");
console.log(diosDeLaDestruccion); */

//-----------------------------------
//THIS
console.log(this);
