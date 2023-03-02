/*2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el 
mensaje “Introduce un número válido”.*/

let nota = parseInt(prompt('Ingrese una nota del 0 al 10'));

while(isNaN(nota) || nota>10){
    if(isNaN(nota)){
        alert('El valor ingresado no es un número');
        nota = prompt('Ingresa una nota válida');
    }else{
        alert('Número erroneo');
        nota = prompt('Ingresa una nota válida');
    }  
}

switch(true){
    case nota>=0 && nota<=2:
        alert(`Nota ${nota} : Muy deficiente`);
        break;
    case nota<=4:
        alert(`Nota ${nota} : Insuficiente`);
        break;
    case nota<=6:
        alert(`Nota ${nota} : Suficiente`);
        break;
    case 7:
        alert(`Nota ${nota} : Bien`);
        break;
    case nota<=9:
        alert(`Nota ${nota} : Notable`);
        break;
    default:
        alert(`Nota ${nota} : Sobresaliente`);
        break;
}
