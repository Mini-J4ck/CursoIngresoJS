/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
/*Josue Moises Alvarez Guzman  Grupo: 1 DNI: 94742057*/
 
function sumar()
{	
	let numA, numB;
	numA = parseInt(txtIdNumeroUno.value);
	numB = parseInt(txtIdNumeroDos.value);	
	alert("La Suma es " + (numA+numB));
}

function restar()
{
	let numA, numB;
	numA = parseInt(txtIdNumeroUno.value);
	numB = parseInt(txtIdNumeroDos.value);	
	alert("La Resta es " + (numA-numB));
}

function multiplicar()
{ 
	let numA, numB;
	numA = parseInt(txtIdNumeroUno.value);
	numB = parseInt(txtIdNumeroDos.value);	
	alert("La Multiplicacion es " + (numA*numB));
}

function dividir()
{
	let numA, numB;
	numA = parseInt(txtIdNumeroUno.value);
	numB = parseInt(txtIdNumeroDos.value);	
	alert("La Division es " + (numA/numB));
}

