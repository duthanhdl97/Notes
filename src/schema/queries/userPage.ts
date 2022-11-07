import { gql, getClient } from '~/utils/graphql'
import { IUser } from '~/models/user'

export default async function userPage(id?: string): Promise<IUser> {
  const result = await getClient().query<{ userPage: IUser }>({
    query: gql`
      query Query($id: ID) {
        userPage(id: $id) {
          id
          name
          email
          created_at
        }
      }
    `,
    fetchPolicy: 'no-cache',
    variables: {
      id,
    },
  })

  return result.data.userPage
}
