const serverConfig = (httpType, serverPort) => ({
  httpType,
  port: serverPort || 3000,
  options: httpType === 'https' ? require('./serverCert') : null
})

const env = process.env.NODE_ENV

module.exports = {
  serverConfig,
  env
}
