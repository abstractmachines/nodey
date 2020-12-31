# Vanilla NodeJS API development: http, events, and Streams

We're implementing API calls here in vanilla NodeJS using the http module and streams (and events).

## Streams

> Streams are nothing new.

Streams have been around in operating systems/bash/languages as `pipes` and streams, reading files from file descriptors, etc.

- See: https://nodejs.dev/learn/nodejs-streams
- To clarify this, read the code comments in [server](http-streams-bodies.js) and [client](api-calls-consume-server.js)

> Types of Streams in NodeJS (half duplex or full)

- `Readable`: half duplex; can pipe `from` but not `to` (can read via pipe but can't write).
- `Writable streams`: single duplex; can pipe `in/to` but not `from` (can write via pipe, can't read).
- `Duplex/Transform`: Full-duplex streams.
- See: https://nodejs.dev/learn/nodejs-streams#different-types-of-streams

> Pipes: pipe a source into a destination.

- See: https://nodejs.dev/learn/nodejs-streams#pipe

> Readable Streams : two modes (paused, flowing)

- [All Readable streams begin in paused mode but can be switched to flowing mode](https://nodejs.org/dist/latest-v8.x/docs/api/stream.html#stream_two_modes) in one of the following ways:
     * - Adding a 'data' event handler.
     * - Other stuff.
     
- [IncomingMessage](https://nodejs.org/dist/latest-v8.x/docs/api/http.html#http_class_http_incomingmessage) implements the Readable Stream Interface. 


### Why do we care about Streams? Think about body-parser in Express.

> for POST method, you need to send a body in the request, and server needs to read it.

- See: [http-streams.bodies.js](http-streams-bodies.js)
- To extract JSON data sent in response body, you have to use `body-parser` (for Express), and a little extra stuff for vanilla NodeJS, including, working directly with Streams!

### Chunking and Streaming

> Use case: Reading files. Instead of traditional approach (writing entire file into memory and then processing it), you can stream the file, in chunks:
> * faster! Start sooner.
> * Less memory intensive
> * Spatial and temporal complexity hence much better.
