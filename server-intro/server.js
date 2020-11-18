
const express = require('express')

const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

///////serve files
const data = {
    8112: {
        title: "Name of the Wind",
        author: "Patrick Rothfuss"
    },
    9121: {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger"
    },
    1081: {
        title: "The Giver",
        author: "Lois Lowry"
    }
}

app.get('/book/:bookId', (req, res) => {
    const id = req.params.bookId
    res.send(data[id])
})


/*
// console.log(__dirname)


///// routes
app.get('/', function (request, response) {
    console.log("Someone has come into the server. Brace yourselves.")
    response.send("Ending the cycle, thanks for nodemon, that's awesome")
})

app.get('/maps', function (request, response) {
    response.send("Here's some stuff related to maps")
})

app.get('/shoobi', function (request, response) {
    response.send("This here is the shoobi *route*")
})

app.get('/life', function(req, res){
    res.send("This is your life, coding!")
})

//// params 
app.get('/landing/:username', function(req, res){
    res.send(`Hi there, ${req.params.username}`)
})
//// spot check

const users = {
    tilda: "You've done a wonderful job",
    riva: "You need to improve your form, but good perseverance",
    jeremy: "You're incredible"
}
app.get('/users/:userId', function(req, res){

    res.send(users[req.params.userId] )    
})

//////optional params
app.get('/routeWithOptionalParameters', (request, response) => {
    let params = request.query
    response.send(params)
})

///// spot check
app.get(`/details`, (req, res)=>{
    let params = req.query
    console.log(params.city)
    res.send(params)
})
*/


//listener
const port = 3001
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})
