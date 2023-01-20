const express = require('express')
const cors = require('cors')
const db = require('./util/database')
const {Card, Photo, Cart, User} = require('./util/models')
const seed = require('./util/seed')
const {getAllCards, getCard, createCard} = require('./controllers/card')
const {register, login} = require('./controllers/user')

const server = express()
server.use(express.json())
server.use(cors())

Card.hasMany(Photo)
Photo.belongsTo(Card)

User.hasMany(Cart)
Cart.belongsTo(User)

Card.hasMany(Cart)
Cart.belongsTo(Card)





// endpoints
server.get('/api/allCards', getAllCards)
server.get('/api/card/:id', getCard)

server.post('/auth/signup', register)
server.post('/auth/login', login)
server.post('/createCard/:user', createCard)



db
    // .sync({force: true})
    // .then(() => seed())

server.listen(4000, () => console.log('Up on 4000'))