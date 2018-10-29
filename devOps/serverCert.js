const fs = require('fs')
const path = require('path')

module.exports = {
  key: fs.readFileSync(
    path.resolve(__dirname, '../resource/encrypt/privatekey.pem')
  ),
  cert: fs.readFileSync(
    path.resolve(__dirname, '../resource/encrypt/certificate.pem')
  )
}
