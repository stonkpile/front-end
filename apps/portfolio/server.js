const Koa = require('koa')
const app = new Koa()
const serve = require('koa-static-server')
const port = parseInt(process.env.PORT, 10)

app.use(serve({
  rootDir: 'src',
  rootPath: '/portfolio'
}))

app.listen(port)

console.log(`listening on port ${port}`)
