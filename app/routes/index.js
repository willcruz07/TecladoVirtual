module.exports = function(express){
    express.get('/', function(req, res){        
        express.app.controllers.index.home(express, req, res);
    });
};