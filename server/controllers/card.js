const {Card, Photo} = require('../util/models')

module.exports = {
    getAllCards: async(req, res) => {
        try {
            let cards = await Card.findAll({
                include: [Photo]
            })
            res.status(200).send(cards)
        } catch (error) {
               res.status(400).send(error)
        }
    },
    getCard: async(req, res) => {
        try {
            let card = await Card.findOne({
                where: {id: req.params.id},
                include: [Photo]
            })
            res.status(200).send(card)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    createCard: async (req, res) => {
        try {
            const {name, types, cardText, pt, expansion, rarity, artist, rating, price, cardId, url, primaryPhoto} = req.body
            let card = await Card.findOne({
                where: {id: req.params.id},
                include: Photo
            })
            if (card){
                res.status(400).send('card already exists')
            } else {
                const newCard = await Card.create({
                    name: name,
                    types: types,
                     cardText: cardText,
                    pt: pt,
                    expansion: expansion,
                    rarity: rarity,
                    artist: artist,
                    rating: rating,
                    price: price
                })

                const newPhoto = await Photo.create({
                    cardId: cardId,
                    url: url,
                    primaryPhoto: primaryPhoto
                })

                res.status(200).send(newCard, newPhoto)
            }
        } catch (err) {
            res.status(400).send(err)
        }
    } 
}