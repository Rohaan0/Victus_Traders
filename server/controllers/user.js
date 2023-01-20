const {User} = require('../util/models.js')
const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        try {
            const {username, email, password} = req.body
            const checkUser = await User.findOne({
                where: {username}
            })
            if (checkUser) {
                return res.status(400).send('User already exists!')
            }
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)

            const newUser = await User.create({
                username: username,
                email: email,
                password: hash,
                admin: false
            })
        } catch (err) {
            res.status(400).send(err)
        }
    },
    login: async (req, res) => {
        const {username, password} = req.body
        const checkUser = await User.findOne({
          where: {username}
        })
        if(checkUser) {
          let authenticated = bcrypt.compareSync(password, checkUser.password)
          if(authenticated) {
            delete checkUser.password
            return res.status(200).send(checkUser)
          }
          return res.status(400).send("Password is incorrect")
        }
        return res.status(400).send('Username does not exist')
      }
}