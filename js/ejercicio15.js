// 15- Realiza un script que cuente el número de vocales que tiene un texto.

let frase = prompt('Ingrese una frase');
let vocales =0;
let contA=0; let contE=0; let contI=0; let contO=0; let contU=0;

frase = frase.toLowerCase();

for (let i = 0; i < frase.length; i++) {
  let letra = frase.charAt(i);
  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    vocales++;
    if(letra === 'a'){
        contA++;
    }else if (letra === 'e' ){
        contE++;
    }else if (letra === 'i' ){
        contI++;
    }else if (letra === 'o' ){
        contO++;
    }else{
        contU++;
    }
  } 
}
document.write('Las vocales de la frase son:' + vocales);
document.write('</br>||A||: '+contA);
document.write('</br>||E||: '+contE);
document.write('</br>||I||: '+contI);
document.write('</br>||O||: '+contO);
document.write('</br>||U||: '+contU);