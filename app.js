/*
* Создание приложения express
* добавление движка handlebars
*/
const express = require("express");
const hbs = require("hbs");
const app = express();

app.set("view engine", "hbs");
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
 
app.use("/", function(request, response){      
    response.render("main.hbs");
});

app.use("/*",function(request, response){
    response.send("Чатыряста чятыря.<br/> мб найдётся попоже");
});


/*
*Запуск сервера
*/
app.listen(80);
  
 