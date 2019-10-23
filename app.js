/*
* Создание приложения express
* добавление движка handlebars
*/
const express = require("express");
const app = express();


app.use("/rest/main",function(request,response){
    response.send("Hello from REST main");
});
app.use("/rest/paws", function(request, response){    
    response.send("Hello from REST paws");
});
app.use("/rest/feed", function(request, response){     
    response.send("Hello from REST feed");
});
app.use("/rest/cats", function(request, response){      
    response.send("Hello from REST cats");
});

app.use("/rest",function(request, response){
    response.send("Hello from REST");
});



/*
* Все файлы из папки sources отдаются номинально
* тут лежат css,js,img
*/
app.use("/sources", express.static(__dirname + "/sources"));



const expressHbs = require("express-handlebars");
const hbs = require("hbs");

app.set("view engine", "hbs");


// устанавливаем настройки для файлов layout
app.engine("hbs", expressHbs(
    {
        layoutsDir: "views/layouts", 
        defaultLayout: "layout",
        extname: "hbs"
    }
));

app.set("view engine","hbs");
/*
* Добавление кусочных представлений
*/ 
hbs.registerPartials(__dirname + "/views/partials");


app.use("/", function(request, response){      
    response.render("main.hbs",{
        title: "Велюровая страничка"
    });
});

/*
*Запуск сервера
*/
app.listen(80);
  
 