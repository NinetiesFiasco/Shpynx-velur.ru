/*
* Создание приложения express
* добавление движка handlebars
*/
const express = require("express");
const expressHbs = require("express-handlebars");
const hbs = require("hbs");
const app = express();

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


/*
* Обработка запросов
*/
app.use("/contact", function(request, response){
      
    response.render("contact", {
        title: "Мои контакты",
        emailsVisible: true,
        emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
        phone: "+1234567890"
    });

}); 

/*
* Все файлы из папки sources отдаются номинально
* тут лежат css,js,img
*/
app.use("/sources", express.static(__dirname + "/sources"));

app.use("/paws", function(request, response){      
    response.render("paws.hbs",{
        title: "Велюровая страничка"
    });
});
app.use("/feed", function(request, response){      
    response.render("feed.hbs",{
        title: "Велюровая страничка"
    });
});
app.use("/cats", function(request, response){      
    response.render("cats.hbs",{
        title: "Велюровая страничка"
    });
});


app.use("/", function(request, response){      
    response.render("main.hbs",{
        title: "Велюровая страничка"
    });
});

app.use("/*",function(request, response){
    response.send("Чатыряста чятыря.<br/> мб найдётся попоже");
});


/*
*Запуск сервера
*/
app.listen(80);
  
 