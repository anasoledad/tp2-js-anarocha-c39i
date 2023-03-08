// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir,
// si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let texto = prompt("Escribe un texto:");
let cadenaReves = "";
for (let i = 0; i < texto.length; i++) {
    let letra = texto.charAt(i);    //recupera el caracter i del string.
    cadenaReves = letra + cadenaReves;
}
document.write(cadenaReves);