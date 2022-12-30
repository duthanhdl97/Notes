import { User } from '../../../models'

export default async () => {
  const users = await User.findAll()
  return users
}
