// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
// Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.


// let pedirNumero = true;
// while (pedirNumero) {
//   let numero = prompt("Ingrese un número:");
//   let suma = 0;
//   if (numero === null) {
//     pedirNumero = false;
//   }else if (isNaN(numero)){
//      alert("Debe ingresar un número válido");
// }else{
//     suma += parsenInt(numero);
// }
// }
// alert(`La suma total de los números ingresados es: ${suma}`);
// let suma = 0;
// let seguirIngresandoNumeros = true;

// while (seguirIngresandoNumeros) {
//   let numeroIngresado = prompt("Ingrese un número:");

//   if (numeroIngresado === null) {
//     seguirIngresandoNumeros = false;
//   } else if (isNaN(numeroIngresado)) {
//     alert("Debe ingresar un número válido");
//   } else {
//     suma += parseFloat(numeroIngresado);
//   }
// }

// alert("La suma total de los números ingresados es: " + suma);

//   if (isNaN(numero)) {
//     alert("Debe ingresar un número válido");
//     continue; 
//   }

//   suma += parseInt(numero);
// }

// alert(`La suma total de los números ingresados es: ${suma}`);


// let suma=0;
// let numero = parseInt(prompt("Ingrese un número:"));
// while(isNaN(numero)){
//   alert("Debe ingresar un número válido");
//   numero = parseInt(prompt("Ingrese un número válido"));
//   if (numero === null) {
//     break;
//   }
//   suma += numero;
// }
// alert(`La suma total de los números ingresados es: ${suma}`);

// let suma = 0;

// do {
//   let numero = parseInt(prompt("Introduce un número:"));
//   if (numero !== null && isNaN(numero)) {
//     alert("No has introducido un número válido.");
//   } else if (numero !== null) {
//     suma =suma+ numero;
//   }
// } while (numero !== null);

// alert(`La suma total de los números introducidos es: ${suma}`);

// let suma = 0;

// do {

//     let numero = prompt("Introduce un numero");
//     if (Number(numero) == numero) {

//         numero = Number(numero);

//         suma = suma + numero;
//     }

//     else {
 
//         if (numero != undefined) {
//             alert(numero + " No es un numero");
//         }
//     }

// } while (numero != undefined);

// document.write(suma);


// let suma = 0;
// let numero;
// while (true) {
//   numero = prompt("Introduce un número:");

//   if (numero === null) {
//     break; // Salir del bucle si se pulsa cancelar
//   }

//   if (isNaN(numero)) { // Comprobar si no es un número
//     alert("Introduce solo números");
//     continue; // Continuar el bucle sin sumar
//   }

//   suma += parsenInt(numero);
// }

// alert(`La suma total es: ${suma}`);

let suma = 0;
let continuar = true;

while (continuar) {
  let numero = prompt("Introduce un número:");

  if (numero === null) {
    break; 
  }

  let entero = parseInt(numero);

  if (isNaN(entero)) {
    alert("No has introducido un número válido.");
    continue; 
  }

  suma += entero;

  continuar = confirm("¿Quieres introducir otro número?");
}

alert(`La suma total de los números introducidos es: ${suma}`);