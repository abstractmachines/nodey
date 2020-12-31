# API calls: client and server

We're implementing API calls here in vanilla NodeJS using the http module and streams.

## Streams (see code comments)

- See: https://nodejs.dev/learn/nodejs-streams
- To clarify this, read the code comments in [server](http-streams-bodies.js) and [client](api-calls-consume-server.js)
- All Streams are instance of EventEmitter
- Recall that EventEmitter is NodeJS's eventing system to create, trigger (`.on`) and consume events.


### Why do we care about Streams? Think about body-parser in Express.

> for POST method, you need to send a body in the request, and server needs to read it.

- See: [http-streams.bodies.js](http-streams-bodies.js)
- To extract JSON data sent in response body, you have to use `body-parser` (for Express), and a little extra stuff for vanilla NodeJS, including, working directly with Streams!

### Chunking and Streaming

> Use case: Reading files. Instead of traditional approach (writing entire file into memory and then processing it), you can stream the file, in chunks:
> * faster! Start sooner.
> * Less memory intensive
> * Spatial and temporal complexity hence much better.
