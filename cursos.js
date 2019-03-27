
const express = require('express')
const app = express()

const cursos = "Cursos Disponibles:";

let curso1=(id,nombre,duracion,valor)=>{

	curso1 = ('<br>' +'Id del curso: ' + id + '<br>' + 
		'Nombre: ' + nombre + '<br>' +
		'Duración: ' + duracion + '<br>' +
	 	'Valor: ' + valor + '<br>');
}
	
let curso2=(id,nombre,duracion,valor)=>{


	curso2 = ('Id del curso: ' + id + '<br>' + 
		'Nombre: ' + nombre + '<br>' +
		'Duración: ' + duracion + '<br>' +
	 	'Valor: ' + valor + '<br>');
}

let curso3=(id,nombre,duracion,valor)=>{

	curso3 = ('Id del curso: ' + id + '<br>' + 
		'Nombre: ' + nombre + '<br>' +
		'Duración: ' + duracion + '<br>' +
	 	'Valor: ' + valor + '<br>');
}

let curso4=(id,nombre,duracion,valor)=>{

	curso4 = ('Id del curso: ' + id + '<br>' + 
		'Nombre: ' + nombre + '<br>' +
		'Duración: ' + duracion + '<br>' +
	 	'Valor: ' + valor + '<br>');
}

let curso5=(id,nombre,duracion,valor)=>{

	curso5 = ('Id del curso: ' + id + '<br>' + 
		'Nombre: ' + nombre + '<br>' +
		'Duración: ' + duracion + '<br>' +
	 	'Valor: ' + valor + '<br>');
}

	curso1(1001,'Fundamentos de programación','25 horas', '400.000',);
	curso2(2002,'Cálculo integral','32 horas', '250.000',);
	curso3(3003,'Redes neuronales','45 horas', '700.000',);
	curso4(4004,'Inglés','19 horas', '250.000',);
	curso5(5005,'Bases de datos','50 horas', '980.000',);

 
app.get('/', function (req, res) {
  res.send(cursos +  "<br>"  + "<br>"  + curso1 +  "<br>"  + curso2 +  "<br>"  + curso3 +  "<br>"  + curso4 +  "<br>"  + curso5)
})
 
app.listen(3000)