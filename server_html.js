var http = require("http");
var fs = require("fs");

//creamos un servidor 
http.createServer(function(request, response){

//se da la direccion del archivo a leer    
 fs.readFile("./index.html", function(error, html){

    //encabezado, menciona los tipos de datos que se le esta mandando al navegador, y el estatuscode
    response.writeHead(200, {"Content-Type":"application/json"});
    //response.writeHead(200, {"Content-Type":"text/html"});

    //  esta respuesta manda el contenido html que se encuentra en el archivo index
    //response.write(html);

    //mandamos los datos de tipo json
    response.write(JSON.stringify({nombre:"Carlos", apellidos:"Ramirez Hernandez"}));

    //fin de la respuesta
    response.end();
 });
}).listen(8080);
