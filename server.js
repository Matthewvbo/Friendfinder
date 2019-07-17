const express = require('express')
const path = require('path')
const path = require('path')

let app = express()
let port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.text())
app.use(bodyParser.json({type:'application/vnd.api+json'}))

require('./app/routing/apiRoutes.js')(app)
require('./app/routing/htmlRoutes.js')(app)

app.listen(PORT, function() {
console.log("Ping!"+ PORT)
}) 