const express = require('express')
const path = require("path")
const app = express()
const port = 3000

// app.use(express.static('js'))
app.use('/js', express.static(path.join(__dirname, 'js')))

// app.use(express.static('js'))
app.use('/assets', express.static(path.join(__dirname, 'assets')))


//  app.use(express.static('index.html"))
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})