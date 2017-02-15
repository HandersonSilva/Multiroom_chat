module.exports.viewChat = function(application,req,res){
        res.render('index',{validacao:{}});
}

module.exports.dadosChat = function(application,req,res){
        var dadosForm = req.body;
      req.assert('apelido','Nome é obrigatorio').notEmpty();//não pode ser vazio
      req.assert('apelido','Nome deve conter entre 3 a 15 caracteres').len(3,15);//limitando o numero de caracteres
      var erros = req.validationErrors();
      if(erros){
              res.render('index',{validacao:erros});
              return;
      }
      //Enviando dados para o usuario via socket.io
      application.get('io').emit(
              'msgParaClient',//evento
              {apelido:dadosForm.apelido,mensagem:'conectou-se ao chat'}//dados a serem passados
                                  );
        console.log(dadosForm);
        //renderizando a view
        res.render('chat',{dadosForm:dadosForm});
    
}