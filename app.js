const express = require('express')
const userRouters = require('./userrouter')
const PostRouters = require('./postRoute')

var app = express()

app.use('/user', userRouters);
app.use('/post', PostRouters);


app.get('/products/:proid', (req,res) => {
  // console.log(req.params);
  res.send('<h1>Im Watch It ' + req.params.proid )
})


app.get('/', (req, res) => {
  res.send('<h1>Nodejs Server Start</h1>')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is Running On Port ${PORT}`)
})