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
    }
}