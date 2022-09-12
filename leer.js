const fs=require('fs')
//extraigo el nombre de todas las carpetas contenidas en ./fotos
var files = fs.readdirSync("./fotos");
 //console.log(files)
 
 //leo cada carpeta de ./fotos y extraigo los nombres de las fotos en cada una
 //declaro lista
const listaFotos = [] 
//recorro cada carpeta contenida en files, el conteo será hasta files.lenght
for(let cnt=0; cnt<files.length;cnt++)
{
    let arch= fs.readdirSync( `./fotos/${files [cnt]}` ) //ingreso a cada carpeta
    listaFotos.push( arch ); //guardo en una lista el contenido de cada carpeta
}
 
 console.log(listaFotos[2].length)

 //vamos a colocar en una lista unica todas las fotos
 let registroFotos=[]
 for(let x=0;x<listaFotos.length;x++){
    for(let y=0;y<listaFotos[x].length;y++){
        registroFotos.push(listaFotos[x][y])
    }
 }

 console.log(registroFotos.length)