const express = require('express')

const router = express.Router()

const {
    addUsers,
    getUsers,
    getUser,
    updateUser
} = require('../controllers/user')

router.post('/user', addUsers)
router.get('/users', getUsers)
router.get('/user/:id', getUser)
router.patch('/user/:id', updateUser)

module.exports = router