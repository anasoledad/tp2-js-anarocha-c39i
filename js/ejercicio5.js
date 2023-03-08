/* 5- Realizar una página con un script que calcule el valor de la letra de un número
de DNI (Documento nacional de identidad).
El algoritmo para calcular la letra del dni es el siguiente :
El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes: (T, R,
W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
Si lo introducido no es un número deberá indicarse con un alert y volver a
preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar». */

let dni = prompt("Introduce tu número de DNI:");
while(isNaN(dni) || dni<0 || dni>99999999){
    if(isNaN(dni)){
        alert('El valor ingresado no es un número');
        dni = prompt('Ingrese nuevamente su dni');
    }else if(dni<0 || dni>99999999){
        alert('Valor inválido');
        dni = prompt('Ingrese nuevamente su dni');
    }
}

const letrasDNI = 'TRWAGMYFPDXBNJZSQVHLCKE';
let resto = dni % 23;
let letra = letrasDNI.charAt(resto);
    if(dni!=null){
        alert(`DNI: ${dni}${letra}`);
    }