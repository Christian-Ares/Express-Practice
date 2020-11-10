

//1
const express = require("express");

//Extra
const chalk = require('chalk');
const { response, request } = require("express");
const port = 3000;


//2
const app = express();

//6
app.use(express.static('public'));

//4
app.get('/', (request, response, next) => {
//     response.send(`  
//      <!doctype html>
//     <html>
//       <head>
//         <meta charset="utf-8">
//         <title>Home Page</title>
//         <link rel="stylesheet" href="/stylesheets/style.css" />
//       </head>
//       <body>
//         <h1>Home Page</h1>
//       </body>
//     </html>
//   `);
response.sendFile(`${__dirname}/views/home.html`)
});



//5
app.get('/about', (request, response, next)=>{
  //  response.send('<h1>Esta es la pagina de about</h1>');
  response.sendFile(`${__dirname}/views/about.html`)
});

//Extra
app.get('/gato', (request, response, next)=>{
    //response.send('<img src="/images/cool-cat.jpg"></img>');
    response.sendFile(`${__dirname}/views/cat.html`)
});
//Extra
app.get('*', (request, response, next)=>{
    response.send('<h1>404 pagina no encontrada</h1>')
})

//3
app.listen(port, () => console.log(chalk.green.inverse.bold(`Servidor activo y escuchandose en el puerto ${port}!`)));































