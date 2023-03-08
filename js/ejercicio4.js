// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
// Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

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