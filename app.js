/*importar as configurações do servidor*/
var app = require('./config/server');

/*parametrizar a porta de escuta*/
var server = app.listen(8080,function(){
    console.log("Servidor ON");
})

//incluir o socket.io
//criar a conexão por websocket
var io =require('socket.io').listen(server);
app.set('io',io);//adicionando o socket io ao server tornando uma variavel global

//gerencia quando o usuario conecta e desconecta
io.on('connection',function(socket){
    console.log("Usuario conectou");

    socket.on('disconnect',function(){
        console.log("Usuario desconectou");
       //gerencia a troca de mensagens entre usuarios
        
    });
    socket.on('msgParaServidor',function(data){
       
        //enviando mensagem para um Usuario
        socket.emit(
            'msgParaClient',
            {apelido:data.apelido,
            mensagem:data.mensagem}
            );

         //enviando mensagem para um todos os Usuarios
        socket.broadcast.emit(
            'msgParaClient',
            {apelido:data.apelido,
            mensagem:data.mensagem}
            );
            //condição para atualizar alista
        if(parseInt(data.contParticipante) == 0){
            
              //atualizando participantes para um usuario
               socket.emit(
                    'listaParticipantes',
                     {apelido:data.apelido}
                 );

                //atualizando participantes para todos os usuarios 
                socket.broadcast.emit(
                     'listaParticipantes',
                      {apelido:data.apelido}
                  );
        }
     });
});
