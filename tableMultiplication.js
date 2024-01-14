
var number = parseInt(prompt("¿Qué número deseas obtener su tabla de multilpicación?"))

var msg = ``

for (let i=1; i<11; i++) {
    let result = number * i;
    msg += `${i} x ${number} = ${result}` + "\n"; 
    console.log(`${i} x ${number} = ${result}`);
}

alert(msg);