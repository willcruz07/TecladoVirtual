const express = require('./config/server');

express.listen(3000, (req, res)=>{
    console.log("Servidor rodando...")
});
