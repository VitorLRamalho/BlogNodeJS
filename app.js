const express = require('express');
const handlebars = require('handlebars');
const bodyParser = require('body-parser');
const app = express();
const admin = require("./routes/admin")
//const mongoose = require('mongoose');

//configurações
    //Body Parser
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    //handlebars
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    //mongoose

//rotas
    app.use('/admin', admin)

//outros
const PORTA = 8081;
app.listen(PORTA, () => {
    console.log("Servidor Rodando na porta: (http://8081)" )
});