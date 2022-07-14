const mongoose = require('mongoose')
//const url = 'mongodb://localhost/cars'
const url = 'mongodb://friends_usr:yoon@node10645-spucars.us.reclaim.cloud/friends'

mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true})
const db = mongoose.connection
db.once('open', () => {
    console.log('Database Successful Connection')
})
db.on('error', (error) => {
    console.error('Database error: ', error)
})

module.exports = db