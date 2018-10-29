# Laksa-Node-Example

## Usage

1. `git clone`
2. `yarn install && yarn watch:hot`
3. open browser and access:
   `http://localhost:3000/laksa/isConnected`
4. or you can `curl` in your bash command

```bash
$bash curl http://localhost:3000/laksa/isConnected
true #if return ture, your local node server is connected to Zilliqa
```

## Edit your restful API

There are 2 places you need to edit.

1. `/src/services/restful/laksa.js`
2. `/src/router/restful.js`

If you are familiar with laksa, you can see `laksa.js` is pretty simple

```javascript
export const isConnected = async () => {
  const result = await laksa.isConnected()
  return result
}

export const getBalance = async req => {
  const { query } = req
  const result = await laksa.zil.getBalance({ address: query.address })
  return result
}

// try to add this

export const getNetworkId = async () => {
  const result = await laksa.zil.getNetworkId()
  return result
}
```

Then , in the `resful.js`

```javascript
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
  },

  // add this
  {
    method: 'get',
    name: '/getNetworkId',
    exec: laksa.getNetworkId
  }
]
```

Save both files, and the server will build rebuild itself

then you can see if the restful API works:

```bash
$bash curl http://localhost:3000/laksa/getNetworkId

TestNet # if the api works, it will return the result
```
