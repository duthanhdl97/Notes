import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import dotenv from 'dotenv'
import schema from './schema'
import { getLogger } from './utils/logger'
dotenv.config()

const DEFAULT_PORT: number = 3000

const PORT = Number(process.env.PORT) || DEFAULT_PORT

export async function runServer ({ portEnv }) {
  const path = '/graphql'
  const app: express.Application = express()

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }));

  app.get('/', (_, res) => {
    res.send('Started...').status(200).end()
  })

  app.use(path, (req, _, next) => {
    next()
  })

  const server = new ApolloServer({
    schema,
    context: ({ req, res }) => {}
  })

  await server.start()

  //Apollo Server automatically configures various middleware (including body parsing, the GraphQL Playground frontend, and CORS support)
  server.applyMiddleware({ app, path })
  
  app.listen(portEnv, () => getLogger('system').info(`Now server is running on port ${portEnv}`))

  return app
}

runServer({ portEnv: PORT })
