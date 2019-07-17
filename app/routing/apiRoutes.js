let friends = require('../data/friend')

module.exports = function(app) {
    app.get('/api/friends', function(req, res){
        res.json(friends)
    })


    app.post('/api/friends', function(req, res){

        let totalDifference = 0

        topMatch = {
            name:"",
            photo:"",
            difference:100
        }

        let userData = req.body
        let userName = userData.name
        let userScore = userData.userScore

        s = userScore.map(function(item){
            return parseInt(item, 10)
        })

        userData = {
            "name": req.body.name,
            "photo": req.body.photo,
            "score": s
        }


        //Below here I would put in some console logs 
        //to see the difference in scores and from here I would also 

    })
}