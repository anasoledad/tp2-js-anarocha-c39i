// 8- Crea script para generar pirámide siguiente con los números del 1 al número
// que indique el usuario (no mayor de 50)
// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……

let numero = parseInt(prompt('Ingrese un número menor o igual a 50'));

while(isNaN(numero)||numero>50){
    if(isNaN(numero)){
        alert('El valor ingresado no es un número');
        numero = prompt('Ingrese un valor numerico menor o igual a 50');
    }else if(numero>50){
        alert('El valor ingresado es mayor a 50');
    numero = prompt('Ingrese un número que sea menor o igual a 50');
    }
}
if(numero<=50){
    for (let i = 1; i <= numero; i++) {
        
        for (let j = 1; j <= i; j++) {
            document.write(j);
        }
        document.write('<br>');
    }
}