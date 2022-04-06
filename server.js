const jsonServer = require('json-server')
const server = jsonServer.create()

const path = require('path')

const router = jsonServer.router(path.join(__dirname,'db.json'))

const middlewares = jsonServer.defaults()

const port = process.env.PORT || 3000;


// 미들웨어 설정 
server.use(middlewares)

// json-server 라우트 
server.use(router)

server.listen(port, () => {
  console.log('JSON Server is running')
})