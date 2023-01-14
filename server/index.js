const express = require('express')
const cors = require('cors')
const db = require('./util/database')
const {Card, Photo} = require('./util/models')
const seed = require('./util/seed')
const {getAllCards, getCard} = require('./controllers/card')

const server = express()
server.use(express.json())
server.use(cors())

Card.hasMany(Photo)
Photo.belongsTo(Card)


// endpoints
server.get('/api/allCards', getAllCards)
server.get('/api/card/:id', getCard)



db
    .sync({force: true})
    .then(() => seed())

server.listen(4000, () => console.log('Up on 4000'))