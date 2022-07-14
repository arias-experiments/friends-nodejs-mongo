const express = require('express')
const router = express.Router()
FriendSchema = require('../models/friend')

function HandleError(response, reason, message, code){
    console.log('ERROR: ', reason);
    response.status(code || 500).json({'error': message})
}

router.get('/', (request, response) => {
   FriendSchema.find().exec( (error, friends) => {
       if (error){
           HandleError(response, 'error retrieving data', 'get failed', 500)
       }else{
           response.send(friends)
       }
   })
})

router.post('/', (request, response) => {
    const friendJSON = request.body
    if (!friendJSON.name || !friendJSON.age){
        HandleError(response, 'missing information', 'post data missing', 500)
    }else{
        friend = new FriendSchema({
            name: friendJSON.name,
            age: friendJSON.age,
            good: friendJSON.good || true
        })
        friend.save( (error) => {
            if (error){
                response.send({'error': error})
            }else{
                response.send({'id': friend.id})
            }
        })
    }
})

module.exports = router