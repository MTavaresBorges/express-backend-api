// const express = require('express')
import express from 'express'
import userRouter from './routers/useRouter.js'
import productRouter from './routers/productRouter.js'

const app = express()
const port = 3000

app.use('/user', userRouter)
app.use('/product', productRouter)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})