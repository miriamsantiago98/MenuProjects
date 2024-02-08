var personas = [
    ['Carlos García', 'cargarcia@tec.mx','T', '1985', 'C. Básicas',   'AGVR600509R6T','-'],	
    ['Cristy Zerweck','cristyz@tecma.mx','E', '2014', 'IGE', '--', '96'],
    ['Jorge Martínez','majorge@tecma.mx','E', '2015', 'ISC', '--', '98'],
    ['Jesús Valdés',  'jesusvald@tec.mx','T', '2001', 'Mantenimiento','EVCU801125UY7','-'],	
    ['Maky Guajardo', 'mguajar@tecma.mx','E', '2013', 'ISC', '--', '97'],
    ['Nohemí Gámez',  'luisa.gam@tec.mx','T', '2000', 'Financieros',  'OGME790413HG3','-'],	
    ['Sergio Salazar','sergiosal@tec.mx','T', '1990', 'Planeación',   'ESRA701230Q23','-'],	
    ['Víctor Luévano','vluevanos@tec.mx','T', '1996', 'Gestión Tec.', 'ILVI720809MWE','-'],	
    ['Vita Torres',   'vtorres@tecma.mx','E', '2014', 'ITIC','--', '94'],
    ['Zulema Gómez',  'zulemag@tecma.mx','E', '2016', 'ITIC','--', '97']];
    
    var apersonas=[];
    
    function Persona (nombre, email, tipo, anio, area, rfc, prom) { // prototype
        this.nombre = nombre;
        this.correo = email;
        this.tipo   = tipo;
        this.ingreso= anio;
        this.antiguedad= (new Date().getFullYear() - this.ingreso);
        this.area = area;
        this.rfc = rfc;
        this.promedio=prom;
    }
            
    function creaPersonas(arreglo){
        for (var i = 0; i < arreglo.length; i++) {
            nombre=arreglo[i][0];	email =arreglo[i][1];
            tipo  =arreglo[i][2];	anio  =arreglo[i][3];
            area  =arreglo[i][4];	rfc   =arreglo[i][5];
            prom  =arreglo[i][6];
            apersonas.push(new Persona(nombre, email, tipo, anio, area, rfc, prom));
        }
        return;
    }
    creaPersonas(personas)
    
    // generaLista(arregloObjeto) crea la lista desplegable a partir del arreglo de objetos.
    // El valor para el atributo value debe ser la propiedad del correo electrónico. 
    // La propiedad nombre debe mostrarse en el elemento de la lista. 

    function generaLista(arregloObjeto) {
       $('#seleccionar').append("<option disabled=\"disabled\" selected>Selecciona uno</option>")
    for (var i = 0; i<apersonas.length; i++) {
        $('#seleccionar').append("<option value= \""+apersonas[i].correo+"\">"+apersonas[i].nombre+"</option>")
    }
}
generaLista(apersonas)

    // accionClick() busca en el arreglo de objetos a la persona elegida de la lista desplegable.
    // Muestra los datos del Trabajador dependiendo su tipo.
    // El acceso al DOM debe hacerse con jQuery. 

    function accionClick() {
        var selected = $('#seleccionar').val()
    for (var i = 0; i < apersonas.length; i++) {
        if (apersonas[i].correo == selected){
            var indice = i
        }
    }

    if (apersonas[indice].tipo == 'T') {
      $('#dnombre').html(apersonas[indice].nombre+" (Trabajador)")  
      $('#dmail').html(apersonas[indice].correo)
      $('#trfc').html("R.F.C.: ")
      $('#drfc').html(apersonas[indice].rfc)
      $('#tarea').html("Depto.: ")
      $('#darea').html(apersonas[indice].area)
      $('#dingreso').html(apersonas[indice].ingreso)
      $('#dantigue').html(apersonas[indice].antiguedad)
      $('#tprom').html("")
      $('#dprom').html("")
    }
    if (apersonas[indice].tipo == 'E') {
      $('#dnombre').html(apersonas[indice].nombre+" (Estudiante)")
      $('#dmail').html(apersonas[indice].correo)
      $('#drfc').html("")
      $('#trfc').html("")
      $('#tarea').html("Carrera: ")
      $('#darea').html(apersonas[indice].area)
      $('#dingreso').html(apersonas[indice].ingreso)
      $('#dantigue').html(apersonas[indice].antiguedad)
      $('#dprom').html(apersonas[indice].promedio)
      $('#tprom').html("Promedio")
    }
}

$('#seleccionar').change(accionClick)