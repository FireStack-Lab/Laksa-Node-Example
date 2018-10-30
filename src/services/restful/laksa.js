import Laksa from 'laksa'

const laksa = new Laksa()
const provider = new laksa.Modules.HttpProvider(
  'https://scilla-test-api.aws.z7a.xyz'
)

laksa.setProvider(provider)

export const isConnected = async () => {
  const result = await laksa.isConnected()
  return result
}

export const getBalance = async req => {
  const { query } = req
  const result = await laksa.zil.getBalance({ address: query.address })
  return result
}
