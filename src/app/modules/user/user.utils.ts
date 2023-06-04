import { User } from './user.model'

export const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: -1 })
    .sort({ createdAt: -1 })
    .lean()

  return lastUser.id
}

export const generateUserId = async () => {
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0') //00000
  //increment by 1
  const incrementedId = (Number(currentId) + 1).toString().padStart(5, '0') //00001
  return incrementedId
}
