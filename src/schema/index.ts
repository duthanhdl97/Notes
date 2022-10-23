import { buildSubgraphSchema } from '@apollo/federation'
import { ApolloError } from 'apollo-server-express'
import { generateUlid } from '../utils/ulid'
import { getLogger } from '../utils/logger'
import userSchema from './user'

const serviceSchemas = [
  {
    typeDefs: userSchema.typeDefs,
    resolvers: userSchema.resolvers,
  }
]

// const errorHandler = (err, operation) => {
//   if (err instanceof ApolloError) {
//     getLogger('access').warn((err && err.stack) || err)
//     return err
//   }
//   const errId = generateUlid()
//   err.message = `${err.message}: ${errId}`
//   getLogger('access').error((err && err.stack) || err)

//   // For mysql error
//   if (err.original) {
//     getLogger('access').error(err.original)
//   }

//   err.message = `Internal Error: ${errId}`
//   return err
// }

// const extendResolvers = (resolvers) => {
//   Object.keys(resolvers).forEach((queryType) => {
//     Object.keys(resolvers[queryType]).forEach((operation) => {
//       const resolver = resolvers[queryType][operation]
//       resolvers[queryType][operation] = async (root, args, context, info) => {
//         if (queryType === 'Query' || queryType === 'Mutation') {
//           try {
//             const output = await resolver(root, args, context, info)
//             return output
//           } catch (e) {
//             throw errorHandler(e, operation)
//           }
//         } else {
//           try {
//             const output = await resolver(root, args, context, info)
//             return output
//           } catch (e) {
//             throw errorHandler(e, operation)
//           }
//         }
//       }
//     })
//   })
// }


// serviceSchemas.forEach((serviceSchema) => {
//   if (serviceSchema.resolvers) {
//     extendResolvers(serviceSchema.resolvers)
//   }
// })

const schema = buildSubgraphSchema(serviceSchemas)

export default schema
