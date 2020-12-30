/**
 * Events module
 * https://nodejs.org/api/events.html
 *
 * Instead of user-initiated events, Node will have events handled by events module.
 *
 * Add and remove listeners, on, off, etc.
 */

const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', number => {
    console.log(`started ${number}`)
})

eventEmitter.emit('start', 42)
