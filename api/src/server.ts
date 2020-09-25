import 'reflect-metadata'
import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'

import cors from 'cors'
import './config/typeorm'
import routes from './routes'
import AppError from './errors/AppError'

const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.status_code).json({
      status: 'error',
      message: err.message
    })
  }
  console.log(err)

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
})

app.listen(3333, () => {
  console.log(
    '-------------------Server is running on port 3333-------------------'
  )
})
