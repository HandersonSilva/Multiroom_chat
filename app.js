/*importar as configurações do servidor*/
var app = require('./config/server');

/*parametrizar a porta de escuta*/
var server = app.listen(8080,function(){
    console.log("Servidor ON");
})

//incluir o socket.io
//criar a conexão por websocket
var io =require('socket.io').listen(server);
io.on('connection',function(socket){
    console.log("Usuario conectou");

    /*socket.on('disconnect',function(){
        console.log("Usuario desconectou");
    })*/
});
