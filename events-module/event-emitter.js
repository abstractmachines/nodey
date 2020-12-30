/**
 * Events module
 * https://nodejs.org/api/events.html
 */

const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', number => {
    console.log(`started ${number}`)
})

eventEmitter.emit('start', 42)
