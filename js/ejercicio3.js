// 3- Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
// salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un
// guión -.
// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp




let cadenas = [];
let agregar = true;
while (agregar) {
  let texto = prompt("Escriba un texto");

  if (texto === null) { 
    agregar = confirm("¿Está seguro que desea cancelar?");
    if(agregar=true){
      break;
    }
  }else{
    cadenas.push(texto);
    
  }
}

alert(cadenas);



// alert(cadenas); 