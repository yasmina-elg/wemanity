import express from 'express'
import bodyParser from 'body-parser'
import {systemRouter} from './routes/system'
import cors from 'cors'
import 'reflect-metadata'
import morgan from 'morgan'


export const createExpressApp = () => {

  const app = express()
  app.use(
    cors({
      credentials: true,
      allowedHeaders: ['Content-Type', 'Authorization'],
      exposedHeaders: ['Authorization'],
    })
  )
  // Middlewares
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(morgan('dev'))
  app.use(bodyParser.json())

  // Routes
  app.use('/system', systemRouter())

  return app
}
