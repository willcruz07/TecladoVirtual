const firebird = require('node-firebird');

const options = {};

    options.database = 'C:/Spice/SPICE.GDB';
    options.user = 'SYSDBA';
    options.password = 'masterkey';
    options.lowercase_keys = false;    

function insert (numero) {    
    firebird.attach(options, function(err, db) {            
        if (err)
            throw err;
             
        db.transaction(firebird.ISOLATION_READ_COMMITED, function(err, transaction) {
            transaction.query('INSERT INTO PAINEL_ELETRONICO(NRSENHA, HRSENHA) VALUES(?,?)', [numero, new Date()], function(err, result) {
     
                if (err) {
                    transaction.rollback();
                    console.log(err)
                    return;
                }
     
                transaction.commit(function(err) {                    
                    console.log("insert");
                    if (err)
                        transaction.rollback();
                    else {
                        db.detach();                                              
                    };
                });
            });
        });                 
    });    
};

function update (numero, date) {    
    firebird.attach(options, function(err, db) {            
        if (err)
            throw err;
             
        db.transaction(firebird.ISOLATION_READ_COMMITED, function(err, transaction) {
            transaction.query('UPDATE PAINEL_ELETRONICO SET HRSENHA = ? WHERE NRSENHA = ? AND HRSENHA = ?', 
                [new Date(), numero, date], function(err, result) {
     
                if (err) {
                    transaction.rollback();
                    console.log(err)
                    return;
                }
     
                transaction.commit(function(err) {                    
                    console.log("update");
                    if (err)
                        transaction.rollback();
                    else {
                        db.detach();                                              
                    };
                });
            });
        });                 
    });    
};

function select (numero) {
    firebird.attach(options, function(err, db) {
        console.log("select");
        if (err)
            throw err;     
        
        db.query('SELECT FIRST 1 * FROM PAINEL_ELETRONICO WHERE NRSENHA = ? ORDER BY HRSENHA DESC', [numero], function(err, result) {                       
            db.detach();
        return result;                
        });
    });    
}

module.exports.execute = function (numero) {  
    var ultimoNumero = select(numero);
    // console.log(ultimoNumero);

    if (ultimoNumero == []) 
        insert(numero)  
    // else {
        // update(ultimoNumero.NRSENHA, ultimoNumero.HRSENHA);
    // }
};