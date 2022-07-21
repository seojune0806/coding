var http = require("http");  
var fs = require('fs');
var url =require('url')

var app = http.createServer(function(request , response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query; // ?id= name
    pathname = url.parse(_url,true).pathname
    var title = queryData.id
    if(pathname === '/'){

    fs.readFile(`./data/${title}`, 'utf8' , (err, data) => {

        let list = 0
        var dataFolder = "./data";
        fs.readdir(dataFolder , function(error , filelist){
            list = filelist
            var ul = "<ul>"
                for(var i = 0 ; i < 3 ; i++)
                {
                    ul += `<li><a href=/?id=${list[i]}> ${list[i]} </a></li>`
                }
            ul += "</ul>"
        templeate = 
        `
        <html>
        <head>
            <meta charset="utf-8">
    
        </head>
        <body>
            <h1> ${title} </h1>
            <p>
                ${ul}
                ${data}
            </p>
            </body>
        </html>
        ` 
        response.writeHead(200);
        response.end(templeate)
        })
      })
    }
    else{
        response.writeHead(404);
        response.end(" not found")
    }
});
app.listen(3000);