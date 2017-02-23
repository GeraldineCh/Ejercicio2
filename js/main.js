var arregloBase = 
[{nombre : "Arabela", apellido : "Rojas", rol : "T.A.", cumple: "23 enero"},
{nombre : "Micelle", apellido : "Seguill", rol : "T.A.", cumple: "25 setiembre"},
{nombre : "Meche", apellido : "Zubieta", rol : "T.A.", cumple: "2 marzo"},
{nombre : "Papu", apellido : "Rivariola", rol : "Psicóloga", cumple: "10 octubre"},
{nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumple: "23 enero"}];

var resultado = "";

function printAll() {
	for (var individuo in arregloBase)
	{resultado += "<li>Nombre: " +arregloBase[individuo].nombre+"<br>"+
			"<li>Apellido: " +arregloBase[individuo].apellido+"<br>"+
			"<li>Rol: " +arregloBase[individuo].rol+"<br>"+
			"<li>Cumple: " +arregloBase[individuo].cumple+"<br><br>";}

document.getElementById('print').innerHTML = resultado;
}