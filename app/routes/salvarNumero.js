module.exports = function(express) {
    express.post('/salvarNumero', function(req, res){
        express.app.controllers.salvarNumero.salvar(express, req, res);
    });
};