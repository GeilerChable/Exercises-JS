
/* 
Este ejercicio es todo un clásico si lo haces a la primera y sin tardar mucho, 
puedes estar seguro: entiendes las variables.
Teiens que escribir un prograa que intercambie el valor de dos variables. 
Al final la primera variable debe terner el valor de la sgudna y 
la segunda el valor de la primera */

var value_1 = prompt("Ingresa el valor 1: ")
var value_2 = prompt("Ingresa el valor 2: ")

function intercambie(value_1,value_2){
    console.log("Los valores 1 y 2 son: ");
    console.log("Valor 1: ", value_1);
    console.log("Valor 2: ", value_2);
    var temp = value_1;
    value_1 = value_2;
    value_2 = temp;
    console.log("los valores se intercambiaron, ahora son: ")
    console.log("Valor 1: ", value_1);
    console.log("Valor 2: ", value_2);
}

console.log(intercambie(value_1, value_2))