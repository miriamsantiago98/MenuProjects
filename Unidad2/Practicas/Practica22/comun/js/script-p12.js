// Genera el prototipo con las propiedades nombre, correo, rfc, año de ingreso, año nacimiento 
function Propiedades(nombre, correo, rfc, ingreso, nacimiento, antiguedad,edad){
	this.nombre = nombre;
	this.correo = correo;
	this.rfc = rfc;
	this.ingreso = ingreso;
	this.nacimiento = nacimiento;
	var date = new Date();
	var actual = date.getFullYear();
	this.antiguedad = function(){
		return actual - ingreso;
		this.edad = function(){
}		return actual - nacimiento;

// El evento asociado al botón debe realizar 2 acciones:
// 1) Recuperar los datos del formulario y guárdalos en el objeto
// 2) Guardar el objeto en el localStorage mediante JSON

function accionClick() {
	var Nombre = document.getElementById('nombre');
	var Correo = document.getElementById('correo');
	var RFC = document.getElementById('rfc');
	var Ingreso = document.getElementById('ingreso');
	var Nacimiento = document.getElementById('nacimiento');

	 var registro = new Propiedades(
	 	Nombre.value, 
	 	Correo.value, 
	 	RFC.value, 
	 	Ingreso.value, 
	 	Nacimiento.value
	 	antiguedad,
	 	edad)

     localStorage.setItem('propiedades', JSON.stringify(registro));
	  
}

// Para la página mostrar.html crea la función que:
// 1) Recupere el objeto del localStorage mediante JSON
// 2) Muestre cada propiedad del objeto en el documento HTML

function mostrarDatos(){
	 var recupera = JSON.parse(localStorage.registrolocal);
	 document.write(
	 	"Nombre: "+recupera.Nombre + "<br>" +
	 	"Correo: "+recupera.Correo + "<br>" +
	 	"RFC: "+recupera.RFC + "<br>" +
	 	"Ingreso: "+recupera.Ingreso + "<br>" +
	 	"Nacimiento: "+recupera.Nacimiento + "<br>" +
	 	"Antiguedad: "+recupera.antiguedad + "<br>" +
	 	"edad: "+recupera.edad +"<br>" +
	 	)
    
}


// Crea la escucha para el botón (el evento y la acción)

function accion(){
	var almacenar = document.getElementById('guardar');
	almacenar.addEventListener('click',accionClick);


}
