// 17- Realiza un script que muestre la posición de la primera vocal de un texto
// introducido por teclado.

let texto = prompt("Ingrese un texto");
texto= texto.toLowerCase();
let vocales = "aeiou";

for (let i = 0; i < texto.length; i++) {
  if (vocales.includes(texto[i])) {
    document.write("La primera vocal se encuentra en la posición " + (i+1));
    break;
  }
}