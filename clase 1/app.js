/*=============================================
=                   CLASE 1                   =
=============================================*/

/* Nombres de variables */

var nombre = Thiago;
let nombre = Titi;
const nombre2 = Thia; 

/* Tipos de datos */

let myString = "Hola esta es mi string";
let myNumber = 22;

const miVerdad = true;
const miMentira = false;

let sinDato = null;

/* Typeof (permite ver el tipo de dato) */

let suma = "Thiago" + 22;
console.log(typeof suma);

/* Compuestos */

let myObject = {};
console.log(typeof myObject);
let myArray = [];
console.log(typeof myArray);

/* Function */

let myFunction = () => {};

/* Adición */

let numeroD = 5;
console.log(numeroD);
numeroD ++;
console.log(numeroD);

numeroD += 2;
console.log(numeroD);

let numeroE = 5;
console.log(numeroE);
console.log(typeof numeroE);

/* Prompt() */

let nombre = prompt("Ingresa tu nombre");
console.log(nombre);

/* Alert() */

let yourNumber = parseInt(prompt("Ingresa tu primer numero"));
let yourNumber2 = parseInt(prompt("Ingresa tu segundo numero"));

let resultadoComoNumero = yourNumber + yourNumber2;

alert(resultadoComoNumero);
