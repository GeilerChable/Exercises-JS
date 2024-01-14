

var number = parseInt(prompt("Ingresa un número entero: "))
var msg = '';

    for (let i = 0; i<number; i++) {
    if (i<number-1) {
    msg += (number - i) + ", "}
    //console.log(`Se agrego lo siguiente: ${msg}`)
    if (i===4) {
    msg += (number - i);
    }
    if (i+1===number) {
        console.log(msg)
    }
};




/*
let contar, max, msg='';
max = parseInt(prompt("Teclear un número entero"));
for(contar = max; contar > 0;  contar--)
{
msg += contar + ", ";
}
msg += contar;   //Evita la coma al final
alert(msg); */