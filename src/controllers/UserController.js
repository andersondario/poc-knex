const db = require('../db/connection')

module.exports = {

    findAll(req, res) {
        db('users').select()
            .then(users => res.send(users))
    },

    findById(req, res) {
        db('users').select().where('id', req.params.id)
            .then(users => res.send(users))
    }
}