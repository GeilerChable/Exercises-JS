

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B',
'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

const num = prompt("Escribe un número mayor o igual que 23, pero menor o igual que 99999999");

function calcular_letra (num) {
    if ( num >= 0 && num <= 99999999) {
        const result = num % 23  
        console.log(`El resultado del modulo de ${num} con 23 es ${result}`);
        letras[result];
        console.log("La letra que te toca es: ");
        console.log(letras[result]);
    } else {
        console.log("El número no cumple con lo solicitado");
    }
 };

 calcular_letra(num);



