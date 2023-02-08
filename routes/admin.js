const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render("admin/index")
});

router.get('/posts', (req, res) => {
    res.send("Página de posts")
}); 

router.get('/Categorias', (req, res) => {
    res.send("Página de categorias")
});

router.get('/teste', (req, res) => {
    res.send("isso é um teste!!!")
});

//export do "router"(final do arquivo)
module.exports = router