const express = require('express')

const routerAuth = express.Router()

// Controller
const { addUsers, getUsers, getUser, updateUser, deleteUser } = require('../controllers/auth-and-multer/user')
const { getProduct, addProduct } = require('../controllers/auth-and-multer/product')
const { getTransactions, addTransaction } = require('../controllers/auth-and-multer/transaction')
const { register, login } = require('../controllers/auth-and-multer/auth')

// Middleware
const { auth } = require('../middlewares/auth')
const { uploadFile } = require('../middlewares/uploadFile')

// Route
routerAuth.post('/user', addUsers)
routerAuth.get('/users', getUsers)
routerAuth.get('/user/:id', getUser)
routerAuth.patch('/user/:id', updateUser)
routerAuth.delete('/user/:id', deleteUser)

routerAuth.get('/products', getProduct)
routerAuth.post('/product', auth, uploadFile("image"), addProduct)

routerAuth.get('/transactions', getTransactions)
routerAuth.post('/transaction', auth, addTransaction)

routerAuth.post('/register', register)
routerAuth.post('/login', login)

module.exports = routerAuth