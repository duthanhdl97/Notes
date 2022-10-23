import typeDefs from './typeDefs'

import userPage from './queries/userPage'

const resolvers = {
  Query: {
    userPage,
  },
  Mutation: {

  },
}


const schema = {
  typeDefs,
  resolvers,
}

export default schema
