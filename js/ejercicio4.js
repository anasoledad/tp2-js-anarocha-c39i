// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
// Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let suma = 0;

while (true) {
  let numero = prompt("Ingrese un número:");

  if (numero === null) {
    break;
  }


  if (isNaN(numero)) {
    alert("Debe ingresar un número válido");
    continue; 
  }

  suma += parseInt(numero);
}

alert(`La suma total de los números ingresados es: ${suma}`);


