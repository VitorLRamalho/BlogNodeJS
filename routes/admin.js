const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send("Página principal do painel ADM")
});

router.get('/posts', (req, res) => {
    res.send("Página de posts")
}); 

router.get("/Categorias", (req, res) => {
    res.send("Página de categorias")
});


//export do "router"(final do arquivo)
module.exports = router