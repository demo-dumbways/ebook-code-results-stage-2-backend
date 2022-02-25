const express = require('express')

const router = express.Router()

// Controller
const { addUsers, getUsers, getUser, updateUser, deleteUser, getUserProducts } = require('../controllers/orm/user')
const { getProduct, addProduct } = require('../controllers/orm/product')
const { getTransactions, addTransaction } = require('../controllers/orm/transaction')

// Route
router.post('/user', addUsers)
router.get('/users', getUsers)
router.get('/user/:id', getUser)
router.patch('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)

router.get('/user-products', getUserProducts)

router.get('/products', getProduct)
router.post('/product', addProduct)

router.get('/transactions', getTransactions)
router.post('/transaction', addTransaction)

module.exports = router