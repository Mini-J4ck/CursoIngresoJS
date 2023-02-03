/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
/*Josue Moises Alvarez Guzman  Grupo: 1 DNI: 94742057*/

function mostrarAumento()
{
	let numA,descuento, resultado;
	numA = parseFloat(txtIdImporte.value);
	descuento = numA * 0.25;
	resultado = numA - descuento;
	txtIdResultado.value = resultado.toFixed(2);
}
