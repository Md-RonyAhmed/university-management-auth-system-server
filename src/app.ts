import express, { Application, Response } from 'express'
const app: Application = express()
import cors from 'cors'

// use cors
app.use(cors())

// json parser
app.use(express.json())

// url parser
app.use(express.urlencoded({ extended: true }))

//user route

//application route
app.get('/', (req: any, res: Response) => {
  res.send('Welcome to our application')
})

export default app
