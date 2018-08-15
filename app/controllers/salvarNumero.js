module.exports.salvar = function (express, req, res) { 
    var numero = req.body;
    express.app.models.tecladoDAO.execute(numero.campo);
    res.redirect('/');    
};