const User = require('../models/User')

class UserController {
  async index( req, res ) {
    const user = await User.find()
    return res.json(user)
  }

  async store( req, res ) {
    const { email } = req.body

    let user = await User.findOne({ email })

    if(!user) {
      user = await User.create({ email })
    }

    return res.json(user)
  }

  async update( req, res ) {
    const { email } = req.body
    const { user_id } = req.headers 

    const user = await User.updateOne({ _id: user_id }, { email })
    return res.json(user)
  }
}

module.exports = new UserController()