//Preguntar por un número y determinar si el número es par o impar

const number =parseInt(prompt("Ingresa un número: "));

var result = number % 2;
var par = result == 0;
console.log("¿Es par?: " + par)