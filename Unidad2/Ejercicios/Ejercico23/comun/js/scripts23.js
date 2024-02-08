var personas = [
	['Carlos García', 'cargarcia@tec.mx','T', '1985', 'C. Básics',   'AGVR600509R6T','-'],	
	['Cristy Zerweck','cristyz@tecma.mx','E', '2014', 'IGE', '--', '96'],
	['Jorge Martínez','majorge@tecma.mx','E', '2015', 'ISC', '--', '98'],
	['Jesús Valdés',  'jesusvald@tec.mx','T', '2001', 'Maintenance','EVCU801125UY7','-'],	
	['Maky Guajardo', 'mguajar@tecma.mx','E', '2013', 'ISC', '--', '97'],
	['Nohemí Gámez',  'luisa.gam@tec.mx','T', '2000', 'Financial',  'OGME790413HG3','-'],	
	['Sergio Salazar','sergiosal@tec.mx','T', '1990', 'Planning',   'ESRA701230Q23','-'],	
	['Víctor Luévano','vluevanos@tec.mx','T', '1996', 'Tec Management.', 'ILVI720809MWE','-'],	
	['Vita Torres',   'vtorres@tecma.mx','E', '2014', 'ITIC','--', '94'],
	['Zulema Gómez',  'zulemag@tecma.mx','E', '2016', 'ITIC','--', '97']
];

function Personas (nombre, correo, ingreso) { 
	this.nombre = nombre;
	this.correo = correo;
	this.ingreso = ingreso;
	var date = new Date();
	var actual = date.getFullYear();
	this.antiguedad = function(){
		return actual - ingreso;
	}
}

function Trabajador (nombre, correo, ingreso, antiguedad, departamento, rfc) { 
	this.__proto__ = new Personas(nombre, correo, ingreso)
	this.departamento = departamento;
	this.rfc = rfc;
}


function Estudiante (nombre, correo, ingreso, carrera, promedio) { 
	this.__proto__ = new Personas(nombre, correo, ingreso)
	this.carrera = carrera;
	this.promedio = promedio;
}


var arrTra = []
for (var i = 0; i < personas.length; i++) {
	if(personas[i][2]=='T'){
		arrTra.push(new Trabajador(personas[i][0], personas[i][1], 
			personas[i][3], 0, personas[i][4], personas[i][5]))
	}
}
var arrEst = []
for (let i = 0; i < personas.length; i++) {
	if(personas[i][2]=='E'){
		arrEst.push(new Estudiante(personas[i][0], personas[i][1], 
			personas[i][3], personas[i][4], personas[i][6], 0))
	}
}
// 5) Crear las funciones para para dibujar las tablas HTML
function Tabtrabajador() {
	for (var i = 0; i < arrTra.length; i++) {
		document.write("<tr>");
    	document.write("<td>"+arrTra[i].nombre+"</td>");
    	document.write("<td>"+arrTra[i].departamento+"</td>");
		document.write("<td>"+arrTra[i].ingreso+"</td>");
		document.write("<td>"+arrTra[i].antiguedad()+"</td>");
		document.write("<td>"+arrTra[i].correo+"</td>");
		document.write("<td>"+arrTra[i].rfc+"</td>");
    	document.write("</tr>");		
	}
}
function tabestudiante() {
	for (var i = 0; i < arrEst.length; i++) {
		document.write("<tr>");
    	document.write("<td>"+arrEst[i].nombre+"</td>");
    	document.write("<td>"+arrEst[i].promedio+"</td>");
		document.write("<td>"+arrEst[i].carrera+"</td>");
		document.write("<td>"+arrEst[i].correo+"</td>");
		document.write("<td>"+arrEst[i].ingreso+"</td>");
		document.write("<td>"+arrEst[i].antiguedad()+"</td>");
    	document.write("</tr>");		
	}
}