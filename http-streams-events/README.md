# Vanilla NodeJS API development: http, events, and Streams

> What:

- API in in vanilla NodeJS using the http module and streams (and events).

> Why:

- Learn NodeJS without a framework

> Sources:
- https://nodejs.dev/learn/nodejs-streams
- https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/

> Tactics

- We are focusing on one functionality at a time, so we aren't concerned about routes, extensibility etc...

- Some error handling is used including signals and differentiating between sleep-y `server.close()` and `process.exit` kill.

- [ ] TODO subscribe to a server's socket connection to gracefully shut down only that service w `.server.close()`... see https://stackoverflow.com/questions/14626636/how-do-i-shutdown-a-node-js-https-server-immediately

- [ ] TODO chunking and streaming with larger files ...

## Chunking, Streaming, Pipes

### Streams

> Streams are nothing new.

Streams have been around in operating systems/bash/languages as `pipes` and streams, reading files from file descriptors, etc.

- See: https://nodejs.dev/learn/nodejs-streams
- To clarify this, read the code comments in [server](http-streams.js) and [client](client.js)

> Types of Streams in NodeJS (half duplex or full)

- `Readable`: half duplex; can pipe `from` but not `to` (can read via pipe but can't write).
- `Writable streams`: single duplex; can pipe `in/to` but not `from` (can write via pipe, can't read).
- `Duplex/Transform`: Full-duplex streams.
- See: https://nodejs.dev/learn/nodejs-streams#different-types-of-streams

### Chunks (Buffers)

- The `chunk` emitted in each `data event`, is a `Buffer` ([Buffers API](https://nodejs.org/api/buffer.html))
- Concatenate the incoming Buffer and return results (probably could use a reducer here)
- You can also use npm's [concat-stream](https://www.npmjs.com/package/concat-stream) or [body](https://www.npmjs.com/package/body)

### Pipes

> Pipes: pipe a source into a destination.

- See: https://nodejs.dev/learn/nodejs-streams#pipe

> Readable Streams : two modes (paused, flowing)

- [All Readable streams begin in paused mode but can be switched to flowing mode](https://nodejs.org/dist/latest-v8.x/docs/api/stream.html#stream_two_modes) in one of the following ways:
     * - Adding a 'data' event handler.
     * - Other stuff.
     
- [IncomingMessage](https://nodejs.org/dist/latest-v8.x/docs/api/http.html#http_class_http_incomingmessage) implements the Readable Stream Interface.

### Streams Error Handling: can't use just 'try/catch'!

- See: https://nodejs.org/api/errors.html

> "The use of the 'error' event mechanism is most common for stream-based and event emitter-based APIs, which themselves represent a series of asynchronous operations over time (as opposed to a single operation that may pass or fail) ... Errors generated in this way cannot be intercepted using try…catch as they are thrown after the calling code has already exited."


### Chunking and Streaming: Use Cases

> Use case: for POST method, you need to send a body in the request, and server needs to read it.

- See: [http-streams.bodies.js](http-streams.js)
- To extract JSON data sent in response body, you have to use `body-parser` (for Express), and a little extra stuff for vanilla NodeJS, including, working directly with Streams!

> Use case: Reading files. Instead of traditional approach (writing entire file into memory and then processing it), you can stream the file, in chunks:
> * faster! Start sooner.
> * Less memory intensive
> * Spatial and temporal complexity hence much better.

