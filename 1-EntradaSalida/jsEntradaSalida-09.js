/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
/*Josue Moises Alvarez Guzman  Grupo: 1 DNI: 94742057*/

function mostrarAumento()
{
	let numA,aumento;
	numA = parseFloat(txtIdSueldo.value);
	aumento = numA * 0.1
	numA = numA + aumento;
	txtIdResultado.value = numA.toFixed(2);
}
