// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *
// Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

let nombre1= prompt('1- Nombre');
let edad1= parseInt(prompt('1- Edad'));

let nombre2= prompt('2- Nombre');
let edad2= parseInt(prompt('2- Edad'));

let nombre3= prompt('3- Nombre');
let edad3= parseInt(prompt('3- Edad'));

let edadMayor = Math.max(edad1, edad2, edad3);

    if (edadMayor === edad1) {
        document.write("El mayor es: " + nombre1);
    }
    if (edadMayor === edad2) {
        document.write("El mayor es: " + nombre2);
    }
    if (edadMayor === edad3) {
        document.write("El mayor es: " + nombre3);
    }