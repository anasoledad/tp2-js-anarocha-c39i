// 10- Realiza un script que pida número de filas y columnas y escriba una tabla.
// Dentro de cada una de las celdas deberá escribirse un número consecutivo en
// orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.


let filas = parseInt(prompt("Ingrese un número de filas"));
while(isNaN(filas)){
    alert('El valor ingresado no es un número');
    filas = parseInt(prompt('Ingrese un valor numerico'));
}
let columnas = parseInt(prompt('Ingrese un número de columnas'));
while(isNaN(columnas)){
    alert('El valor ingresado no es un número');
    columnas = parseInt(prompt('Ingrese un valor numerico'));
}
let elementos = filas * columnas;
document.write("<table border>");
for (let i = 0; i < filas; i++) {
    document.write("<tr>");
    for (let j = 0; j < columnas; j++) {
        document.write("<td>");     
        document.write(elementos);
        elementos--;
        document.write("</td>");
    }
    document.write("</tr>");
}
document.write("</table>");