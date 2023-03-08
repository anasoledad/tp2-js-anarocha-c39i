// 3- Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
// salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un
// guión -.
// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

let cadenas = '';
let continuar = true;

while (continuar) {
  let texto = prompt("Escriba un texto");

  if (texto === null) { 
      break; 
  }
  
  cadenas+=texto+'-';

  continuar = confirm("¿Quieres introducir otra cadena?");
}

alert(cadenas);
