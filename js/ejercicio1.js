//1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

let edad = parseInt(prompt('Ingrese su edad'));

while(isNaN(edad)){
    alert('El valor ingresado no es un número');
    edad = prompt('Ingresa una edad válida');
}

if (edad>=18 && edad<=100){
    alert('Si puedes conducir');
}else{
    alert('No puedes conducir');
}    
