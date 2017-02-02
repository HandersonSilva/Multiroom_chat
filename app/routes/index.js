module.exports = function(application){
        application.get('/',function(req,res){
            console.log('chamando home');
            res.send("<html><body>SERVIDOR ON</body></html>");
        })
}