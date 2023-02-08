const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const admin = require("./routes/admin")
const path = require("path")
//const mongoose = require('mongoose');

//configurações
    //Body Parser
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    //handlebars
    app.engine('handlebars',handlebars.engine({defaulyLayout:'main'}));
    app.set('view engine', 'handlebars');
    //mongoose
        //
    //public
    app.use(express.static(path.join(__dirname, "public")));
//rotas
   /* app.use('/', (req, res) => {
        res.send('Rota principal')
    });

    app.get('/posts', (req, res) => {
        res.send("Lista Posts")
    });
    */
    app.use('/admin', admin);

//outros
const PORTA = 8081;
app.listen(PORTA, () => {
    console.log("Servidor Rodando na porta: (http://localhost:8081)" )
});