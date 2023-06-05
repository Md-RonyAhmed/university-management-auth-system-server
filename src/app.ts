import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRoute from '../src/app/modules/user/user.route'

//create app
const app: Application = express()

// use cors
app.use(cors())

// json parser
app.use(express.json())

// url parser
app.use(express.urlencoded({ extended: true }))

//application route
app.get('/api/v1/users', userRoute)

//home route
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to our application')
})

export default app
