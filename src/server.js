// const express = require('express')
import express from 'express'
import userRouter from './routers/useRouter.js'
import productRouter from './routers/productRouter.js'
import { PORT, HOST, ENVIRONMENT } from './config.js'

const app = express()
const port = PORT

app.use('/user', userRouter)
app.use('/product', productRouter)

app.listen(PORT, () => {
  console.log(`Example app listening on environment ${ENVIRONMENT} ${ ENVIRONMENT == 'production' ? HOST : HOST+':'+PORT}`)
}) 