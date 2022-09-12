/**
 * Ejemplo simple
 * fuente: https://es.stackoverflow.com/questions/49125/c%C3%B3mo-eliminar-o-reemplazar-todas-las-subcadenas-de-un-string-en-javascript
 */
 var cadena = "232323.JPG";
 var re = /.JPG/g;
 var resultado = cadena.replace(re, '');
 console.log(resultado);