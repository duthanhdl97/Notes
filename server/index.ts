import express from 'express'
import next from 'next'
import routes from '../src/routes'

const DEFAULT_PORT = 3000

const port: number = Number.isNaN(Number(process.env.PORT)) ? DEFAULT_PORT : Number(process.env.PORT)
const dev: boolean = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server: express.Express = express()
  
  server.get('*', (req, res) => {
    return handle(req, res)
  })
  
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})
