
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const db = require('./database')

const friendsRouter = require('./routes/friend')

app.use(bodyParser.urlencoded({extended: true}))
app.use('/api/friends', friendsRouter)

app.listen(8001, () => {
    console.log('Listening on 8001')
})