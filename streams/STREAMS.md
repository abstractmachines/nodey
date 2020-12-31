# Streams

- See: https://nodejs.dev/learn/nodejs-streams

## instance of EventEmitter 

- Recall that EventEmitter is NodeJS's eventing system to create, trigger (`.on`) and consume events.

## Chunking and Streaming

> Use case: Reading files. Instead of traditional approach (writing entire file into memory and then processing it), you can stream the file, in chunks:
> * faster! Start sooner.
> * Less memory intensive
> * Spatial and temporal complexity hence much better.


