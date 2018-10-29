import { isConnected, getBalance } from '../services/restful/laksa'

import restfulGenerator from '../utils/restfulGenerator'

const routerTable = [
  {
    method: 'get',
    name: '/isConnected',
    exec: isConnected
  },
  {
    method: 'get',
    name: '/getBalance',
    exec: getBalance
  }
]

const routes = restfulGenerator(routerTable)

export default routes
