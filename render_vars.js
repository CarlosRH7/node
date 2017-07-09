var http = require("http");
var fs = require("fs");

// se crea un nuevo servidor
http.createServer(function(request, response){

    // se extrae un archivo de tipo html
    fs.readFile("./render_vasr_html.html", function(error, html){

        // se declara el archivo html como una cadena 
        var html_string=html.toString();
        var variables = html_string.match(/[^\{\}]+(?=\})/g);

        // se declara una variable la cual se mostrara en el servidor 
        var nombre = "Hola Mundo!";
        // se buscan los continidos que se encuntran  dentro del array del body
        for (var i = variables.length - 1; i >= 0; i--){
            var value=eval(variables[i]);
            html_string=html_string.replace("{"+variables[i]+"}", value);
        };
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write(html_string);
        response.end();
    });
}).listen(8080);
