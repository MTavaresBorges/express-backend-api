import express from 'express'
import userList from '../controllers/user/userList.js'
import createUser from '../controllers/user/createUser.js'
import deleteUser from '../controllers/user/deleteUser.js'
import editUser from '../controllers/user/editUser.js'
import editNameUser from '../controllers/user/editNameUser.js'
import userById from '../controllers/user/userById.js'

const router = express.Router()

router.get('/list', userList)
router.get('/', userById)
router.post('/', createUser)
router.delete('/', deleteUser)
router.put('/', editUser)
router.patch('/', editNameUser)

export default router