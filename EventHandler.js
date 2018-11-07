var events = require('events'); // call the event module
var eventEmitter = new events.EventEmitter(); // call eventEmiter to use the prop and method of the event mod

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');