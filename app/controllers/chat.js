module.exports.viewChat = function(application,req,res){
      

        res.render('chat');
    
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
        res.render('chat');
    
}