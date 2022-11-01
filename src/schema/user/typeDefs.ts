import { gql } from 'apollo-server-express'

const typeDefs = gql`
### UserPage

type UserPage {
  id: String
  name: String
  email: String
  created_at: Date
}

### Query

type Query {
  userPage(id: ID): [UserPage]
}

### Mutation

### type Mutation {}

### Schema

schema {
  query: Query
}
`

export default typeDefs
