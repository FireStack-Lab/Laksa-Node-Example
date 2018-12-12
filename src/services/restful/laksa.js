import Laksa from 'laksa'

const laksa = new Laksa()
const nodeProvider = new laksa.Modules.HttpProvider(
  'https://api-scilla.zilliqa.com'
)
const scillaProvider = new laksa.Modules.HttpProvider(
  'https://scilla-runner.zilliqa.com'
)

laksa.setNodeProvider(nodeProvider)
laksa.setScillaProvider(scillaProvider)

export const isConnected = async () => {
  const result = await laksa.isConnected()
  return result
}

export const getBalance = async req => {
  const { query } = req
  const result = await laksa.zil.getBalance({ address: query.address })
  return result
}
