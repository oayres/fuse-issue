import path from 'path'
import expressStaticGzip from 'express-static-gzip'
const oneDay = 86400000

const staticResources = (app, express) => {
  app.use('/assets', expressStaticGzip(path.join(process.argv[1], '../..', 'assets'), {
    maxAge: oneDay * 1,
    enableBrotli: true,
    setHeaders: (res) => {
      res.setHeader('Expires', new Date(Date.now() + 2592000000).toUTCString())
    }
  }))

  return (req, res, next) => {
    next()
  }
}

export default staticResources
