// Crear el arreglo que contenga la información de las laptops de la Tabla 1.
var table1 = [pt1 = {nombre: "Lenovo Ideapad 330S", procesador: "Corei7", pantalla: 14, RAM: 8,
    disco: "HD 1 TB", precio: 17999},
    pt2 = {nombre: "Dell 15 5000", procesador: "Corei5", pantalla: 15.6, RAM: 8,
    disco: "HD 1 TB", precio: 14900},
    pt3 = {nombre: "Gamer ASUS FX503", procesador: "Corei5", pantalla: 15.6, RAM: 8,
    disco: "HD 1 TB", precio: 14900},
    pt4 = {nombre: "Gamer Dell G3-15", procesador: "Corei5", pantalla: 15.6, RAM: 8,
    disco: "HD 1 TB", precio: 21999},
    pt5 = {nombre: "HP ENVY 13-AH0002la", procesador: "Corei5", pantalla: 13.3, RAM: 8,
    disco: "SSD 256 GB", precio: 16999},
    pt6 = {nombre: "Macbook Air Apple", procesador: "Corei5", pantalla: 13.3, RAM: 8,
    disco: "SSD 128 GB", precio: 22999},
    pt7 = {nombre: "HP 15-DA0009LA", procesador: "Corei3", pantalla: 15.6, RAM: 8,
    disco: "HD 1 TB", precio: 11699}
]

var table2 = [p1 = {nombre: "Dell Inspiron 15 5570", procesador: "Corei3", pantalla: 15.6, RAM: 4,
    disco: "HD 1 TB", precio: 12999},
    p2 = {nombre: "Macbook Air Apple", procesador: "Corei7", pantalla: 13.3, RAM: 8,
    disco: "SSD 128 GB", precio: 28999},
    p3 = {nombre: "Gamer Dell G7", procesador: "Corei7", pantalla: 15.6, RAM: 16,
    disco: "HD 1 TB", precio: 27999},
    p4 = {nombre: "Lenovo Ideapad 520s", procesador: "Corei5", pantalla: 14, RAM: 8,
    pantalla: 14 , disco: "HD 1 TB", precio: 15999}
]

table1.push(table2[0])
table1.push(table2[1])
table1.push(table2[2])
table1.push(table2[3])

var menor = 0;
var mayor = 10000000;
for (let i = 0; i < table1.length; i++) {
    if(table1[i].precio > menor){
        menor = table1[i].precio;
    }
    if(table1[i].precio < mayor){
        mayor = table1[i].precio;
    }
}
for (let i = 0; i < table1.length; i++) {
    if(table1[i].precio == menor)
        document.write('<tr class="menor">');
    else if(table1[i].precio == mayor)
        document.write('<tr class="mayor">');
    else
    document.write("<tr>");
    document.write("<td>"+table1[i].nombre+"</td>");
    document.write("<td>"+table1[i].procesador+"</td>");
    document.write("<td>"+table1[i].pantalla+" pulg.</td>");
    document.write("<td>"+table1[i].RAM+"</td>");
    document.write("<td>"+table1[i].disco+"</td>");
    document.write("<td>"+table1[i].precio+"</td>");
    document.write("</tr>");
}


/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
/* 
Tabla 1. Listado de laptops más vendidas

Lenovo Ideapad 330S	Corei7	14 Pulg.	8 GB	HD 1 TB		17999
Dell 15 5000		Corei5	15.6 Pulg.	8 GB	HD 1 TB		14900
Gamer ASUS FX503 	Corei5	15.6 Pulg.	8 GB	HD 1 TB		23999
Gamer Dell G3-15	Corei5	15.6 Pulg.	8 GB	HD 1 TB		21999
HP ENVY 13-AH0002la	Corei5	13.3 Pulg.	8 GB	SSD 256 GB	16999
Macbook Air Apple	Corei5	13.3 Pulg.	8 GB	SSD 128 GB	22999
HP 15-DA0009LA		Corei3	15.6 Pulg.	8 GB	HD 1 TB		11699

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
Tabla 2. Listado de laptops con repunte en ventas

Dell Inspiron 15 5570 	Corei3	15.6 Pulg.	4 GB	HD 1 TB		12999
Macbook Air Apple		Corei7	13.3 Pulg.	8 GB	SSD 128 GB	28999
Gamer Dell G7			Corei7	15.6 Pulg.	16 GB	HD 1 TB		27999
Lenovo Ideapad 520s		Corei5	14 Pulg.	8 GB	HD 1 TB		15999
*/