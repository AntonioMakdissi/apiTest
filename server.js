const express = require('express')
const app = express()
const PORT = process.env.PORT || 3030;
app.get('/', function (req, res) {
  res.send('Hello World')
})
//ok
app.listen(PORT)