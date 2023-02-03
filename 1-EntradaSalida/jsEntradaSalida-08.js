/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
/*Josue Moises Alvarez Guzman  Grupo: 1 DNI: 94742057*/

function SacarResto()
{
	let numA, numB;
	numA = parseInt(txtIdNumeroDividendo.value);
	numB = parseInt(txtIdNumeroDivisor.value);	
	alert("El resto es " + (numA%numB));
}
