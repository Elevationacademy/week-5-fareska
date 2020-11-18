
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
//    let urlInput = req.params.item
    for (let i in store){
        if (store[i].name == req.params.item){
            res.send(`the price is:${store[i].price}`)
        }else {res.send(`the price is:null`)}
    } 
})







// app.get(`/priceCheck/:name`, (req, res) => {
//     const itemName = req.params.name
//     for (let i in store){
//         if (store[i].name == itemName ){
//             res.send(`the price is`)
//          }else {res.send(`the price is:null`)}
//     }
// })

const port = 3000
app.listen(port, ()=>console.log(`Running server on port ${port}`))