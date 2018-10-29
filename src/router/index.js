import restful from './restful'

const router = app => {
  app.use('/laksa', restful)
  app.use((err, req, res) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send({ err: 'invalid token...' })
    }
  })
}

export default router
