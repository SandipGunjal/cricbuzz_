const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()
const Router_players = require('./Api/Routes/players')
// const LiveScore_router = require('./Api/Routes/liveScore')
const { default: mongoose } = require('mongoose')
const liveScore = require('./Api/Model/liveScore')

// uri = 'mongodb+srv://sandipgunjal:qZR3MB4KFBZr4zsp@cluster0.kgz5pfu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect('mongodb://localhost:27017/cricbuzz')


app.use(cors(
    {
        origin : 'http://localhost:4200'
    }
))

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))

app.use('/players',Router_players)
module.exports = app

