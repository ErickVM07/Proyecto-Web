console.log("***********************************");
console.log("Programa 1");
let nombre = prompt("¿Cuál es tu nombre?");
console.log("Tu nombre es " + nombre);

console.log("***********************************");
console.log("Programa 2");
let numero1 = parseInt(prompt("Introduzca un numero "));
let numero2 = parseInt(prompt("Introduzca otro numero "));
let sum = numero1 + numero2;
console.log(`La suma de ${numero1} y ${numero2} es igual a ${sum}`);

console.log("***********************************");
console.log("Programa 3");
let numero3 = parseInt(prompt("Introduzca un numero "));
let numero4 = parseInt(prompt("Introduzca otro numero "));
if (numero3 && numero4 > 50) {
    console.log(`${numero3} y ${numero4} son mayores a 50`);
} else {
    console.log(`${numero3} y ${numero4} no son mayores a 50`);
} 

console.log("***********************************");
console.log("Programa 4");
let numero5 = parseInt(prompt("Introduzca un numero "));
let numero6 = parseInt(prompt("Introduzca otro numero "));
if (numero5 > 100 || numero6  > 100) {
    console.log(`${numero5} y ${numero6} son mayores a 100`)
} else  {
    console.log(`${numero5} y ${numero6} no son mayores a 100`)
}

console.log("***********************************");
console.log("Programa 5");
let a = false;
if(!a) {
    console.log("a es falso");
} 

console.log("***********************************");
console.log("Programa 6");
let numero8 = parseInt(prompt("Introduzca un numero entre el 1 y el 10 "));

if (numero8 >= 1 && numero8 <= 10){
    console.log(`El numero ${numero8} se encuentra entre el 1 y el 10`);
} else {
    console.log(`El numero ${numero8} no se encuentra entre el 1 y el 10`);
}

console.log("***********************************");
console.log("Programa 7");
let NumeroRandom = Math.floor(Math.random() * 10) + 1;
let numero9 = parseInt(prompt("Adivinare tu numero, escribe un número del 1 al 10: "));

if (numero9 == NumeroRandom) {	
    console.log("Adivine el numero! :)");
} else {
    console.log("No adivine :(");
}

