/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número
que indique el usuario (no mayor de 50) de la siguiente forma : (suponiendo que
indica 30).
303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1*/

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
    for (let i = numero; i > 0; i--) {
        
        for (let j = i; j > 0; j--) {
            document.write(i)
        }
        document.write('<br>');
    }
}
