﻿module.exports = function(application){
        application.get('/',function(req,res){
        application.app.controllers.index.indexHome(application,req,res);
            
        });
};