const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const cors = require("cors")
const middlewares = jsonServer.defaults()
const PORT =  process.env.PORT || 5000

const corsObj = {
  origin : "http://localhost:3000",
  credentials:true
}

server.use(cors(corsObj))
server.use(middlewares)
server.use(router)
server.listen(PORT, () => {
  console.log('JSON Server is running')
})