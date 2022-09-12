//requiriendo excel
var xl = require('excel4node');
var wb = new xl.Workbook(); //creando libro
var ws = wb.addWorksheet('Sheet 1');//creando hojas
var ws2 = wb.addWorksheet('Sheet 2');
var style = wb.createStyle({ //estilos
  font: {
    color: '#FF0800',
    size: 12,
  },
  //numberFormat: '$#,##0.00; ($#,##0.00); -',
});

//Leyendo todas las carpetas contenidas en ./fotos
const fs=require('fs')
var files = fs.readdirSync("./fotos");
const listaFotos = [] 
//leyendo cada carpeta del mes
for(let cnt=0; cnt<files.length;cnt++)
{
    let arch= fs.readdirSync( `./fotos/${files [cnt]}` ) 
    listaFotos.push( arch ); 
}
 
 
//console.log(listaFotos[2].length)

 //unificando todas las listas de foto
 let registroFotos=[]
 for(let x=0;x<listaFotos.length;x++){
    for(let y=0;y<listaFotos[x].length;y++){
        registroFotos.push(listaFotos[x][y])
    }
 }


//console.log(registroFotos.length)

//Almacenamos las cedulas en las celdas de excel
for (let cnt=0; cnt<registroFotos.length;cnt++){
    //RegEx para sacar el .JPG de las fotos con replace()
    let cedulaJPG = String(registroFotos[cnt])
    let re= /.JPG/g;
    let cedula = cedulaJPG.replace(re, '');
    ws.cell(cnt+1,1).string(cedula).style(style)//guardamos en las celdas de excel
}

wb.write('Excel.xls');
