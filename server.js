const express = require('express')
const app = express()
const PORT = process.env.PORT || 3030;
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/data', function (req, res) {
    var data= [
        {id:17,name:'Omar'},
        {id:58,name:'por'},
        {id:23,name:'Omi'},
    ]
  res.send(data)
})

app.listen(PORT)