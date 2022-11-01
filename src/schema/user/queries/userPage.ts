import { IUserInstance } from '~/models/user'
import { User } from '../../../models'

export default async (): Promise<IUserInstance> => {
  const users = await User.findAll()
  return users
}
