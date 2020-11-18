
const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, `dist`)))
app.use(express.static(path.join(__dirname, `node_modules`)))

///////Exercise 1
// app.get('/', function(req, res) {
//     res.send("Server is running up smoothly")
// })

///////Exercise 2
const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

app.get(`/priceCheck/:item`, (req, res) => {
    for (let i in store){
        if (store[i].name === req.params.item){
            res.send(store[i])
        }else {res.send(`the price is:null`)}
    } 
})

app.get(`/buy/:name`, (req, res) => {
    for (let i in store){
        if (store[i].name === req.params.name){
            if(store[i].inventory>1){
                store[i].inventory--
                res.send(store[i])
            } else {res.send(`The item out of stock`)}
        }else {res.send(`The item dose not exist`)}
    } 
})




const port = 3000
app.listen(port, ()=>console.log(`Running server on port ${port}`))