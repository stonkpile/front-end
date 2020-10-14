const Koa = require('koa')
const app = new Koa()
const serve = require('koa-static-server')
const port = Number(process.env.PORT)

app.use(serve({
  rootDir: 'src',
  rootPath: '/sidebar'
}))

app.listen(port)

console.log(`listening on port ${port}`)
