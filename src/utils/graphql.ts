import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'
import { from } from '@apollo/client/link/core'
import createUploadLink from 'apollo-upload-client/public/createUploadLink.js'
import gql from 'graphql-tag'

const isBrowser = typeof window !== 'undefined'

const graphqlEndpoint = 'http://localhost:8000/graphql'

function getGraphqlEndpoint(): string {
  return graphqlEndpoint
}

let apolloClient = null

function createApolloClient() {
  const graphQLUri: string = getGraphqlEndpoint()

  const uploadLink = new createUploadLink({
    uri: graphQLUri,
    credentials: 'same-origin',
  })

  console.log('-------------graphQLUri', graphQLUri)

  const authLink = setContext(async ({ query }, { headers }) => {})

  const isDevelopment: string = process.env.NODE_ENV

  return new ApolloClient({
    uri: graphQLUri,
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser,
    link: from([
      new ApolloLink((operation, forward) => {
        if (isDevelopment) {
          const root = /{\s*(\w+)\s*[\({]/.exec(
            operation.query.loc.source.body
          )[1]
          const definition = operation.query.definitions[0]
          if (definition.kind === 'OperationDefinition') {
            console.info('graphql', Date.now(), definition.operation, root)
          }
        }
        return forward(operation)
      }),
      authLink.concat(uploadLink),
    ]),
    cache: new InMemoryCache(),
  })
}

function getClient(): ApolloClient<NormalizedCacheObject> {
  if (!isBrowser || !apolloClient) {
    apolloClient = createApolloClient()
  }
  return apolloClient
}

export { gql, getClient }
