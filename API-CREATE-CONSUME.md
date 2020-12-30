# API: Create and Consume

## Runbook: Create and Consume an API using raw NodeJS http module

1. `node ./server-http-basic.js` to run server/API we consume, on port 3000
2. `node ./server-consume.js` to separate server to consume our API.

> [API, Create](./server-http-basic.js)


> [API, Consume](./server-consume.js)


- To extract JSON data sent in response body, you have to use `body-parser`