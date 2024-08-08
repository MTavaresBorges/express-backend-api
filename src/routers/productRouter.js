import express from 'express'
import productList from '../controllers/product/productList.js'
import productById from '../controllers/product/productById.js'
import createProduct from '../controllers/product/createProduct.js'
import deleteProduct from '../controllers/product/deleteProduct.js'
import editProduct from '../controllers/product/editProduct.js'
import editNameProduct from '../controllers/product/editNameProduct.js'

const router = express.Router()

router.get('/list', productList)
router.get('/', productById)
router.post('/', createProduct)
router.delete('/', deleteProduct)
router.put('/', editProduct)
router.patch('/', editNameProduct)

export default router