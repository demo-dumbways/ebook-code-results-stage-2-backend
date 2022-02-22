const express = require('express')

const router = express.Router()

const {
    addUsers,
    getUsers,
    getUser
} = require('../controllers/user')

router.post('/user', addUsers)
router.get('/users', getUsers)
router.get('/user/:id', getUser)

module.exports = router