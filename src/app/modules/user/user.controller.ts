import { Request, Response } from 'express'
import userService from './user.service'

const createUser = async (req: Request, res: Response) => {
  const { user } = req.body
  const data = await userService.createUserToDB(user)
  try {
    res.status(200).send({
      success: true,
      user: data,
    })
  } catch (err) {
    res.status(400).send({
      success: false,
      message: 'Failed to creating user!',
    })
  }
}

export { createUser }
