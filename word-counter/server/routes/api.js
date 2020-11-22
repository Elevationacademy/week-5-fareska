const express = require('express')
const router = express.Router()

router.get('/sanity', function(req, res){
    res.send(`The server up and running`)
})

let wordCounter = {sasa:4, soso:3, nino:2, namo:66}

router.get('/word/:word', function(req, res){
    if(wordCounter[req.params.word]){
        res.send({count:wordCounter[req.params.word]})
    }else{
        res.send({count:0})
    }
})

router.post(`/word`, function(req, res){
    const theWord = (req.body).word // object {word: one word string}
    if(wordCounter[theWord]){
        wordCounter[theWord]++
    }else{
        wordCounter[theWord] = 1 
    }
    res.send({text: `Added ${theWord}`, currentCount: wordCounter[theWord] })
})

const updateWord = (word)=> {
    if(wordCounter[word]){
        wordCounter[word]++
    }else{
        wordCounter[word] = 1 
    }
}
router.post(`/words`, function(req, res){
    const sentence = req.body.word.split(" ")
    sentence.forEach(w =>updateWord(w)) 
    res.send({text: `Added ${sentence.length} words, ${(wordCounter.length-sentence.length)}
    already existed, currentCount: -1`})
})

module.exports = router
