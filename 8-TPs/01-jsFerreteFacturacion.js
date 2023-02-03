/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let numA,numB,numC,resultado;
	numA = parseInt(txtIdPrecioUno.value);
	numB = parseInt(txtIdPrecioDos.value);
	numC = parseInt(txtIdPrecioTres.value);
	resultado = numA+numB+numC;
	alert("la suma es: " + resultado)
}
function Promedio () 
{
	let numA,numB,numC,resultado;
	numA = parseInt(txtIdPrecioUno.value);
	numB = parseInt(txtIdPrecioDos.value);
	numC = parseInt(txtIdPrecioTres.value);
	resultado = parseFloat((numA+numB+numC)/3);
	alert("el promedio es: " + resultado.toFixed(2));
}
function PrecioFinal () 
{
	let numA,numB,numC,resultado,iva;
	numA = parseInt(txtIdPrecioUno.value);
	numB = parseInt(txtIdPrecioDos.value);
	numC = parseInt(txtIdPrecioTres.value);
	resultado = numA+numB+numC;
	iva = resultado * 0.21;
	alert("la suma es: " + (resultado+iva));
}