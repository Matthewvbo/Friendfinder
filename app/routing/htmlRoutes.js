let path = require('path')

module.exports = function(app) {

    app.get('/survey.js', function(req, res){
        res.sendFile(path.join(_dirname + '/../public/survey.html'))
    })

    app.use(function(req, res){
        res.sendFile(path.join(_dirname + '/../public.home.html'))
    })

}