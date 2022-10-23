import { gql } from 'apollo-server-express'

const typeDefs = gql`

### UserPage

type UserPage {
  id: String
}

### Query

type Query {
  userPage(id: ID): String
}

### Mutation

### type Mutation {}

### Schema

schema {
  query: Query
}
`

export default typeDefs
