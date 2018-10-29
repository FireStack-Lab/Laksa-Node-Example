import * as laksa from '../services/restful/laksa'

import restfulGenerator from '../utils/restfulGenerator'

const routerTable = [
  {
    method: 'get',
    name: '/isConnected',
    exec: laksa.isConnected
  },
  {
    method: 'get',
    name: '/getBalance',
    exec: laksa.getBalance
  }
]

const routes = restfulGenerator(routerTable)

export default routes
