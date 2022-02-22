const express = require('express')

const router = express.Router()

const {
    addUsers,
    getUsers
} = require('../controllers/user')

router.post('/user', addUsers)
router.get('/users', getUsers)

module.exports = router