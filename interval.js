/*
    This function call server-ws with a random message at a regular interval
    This message should be transmited to all clients
*/

const broadcastToAllClient = require('./server-ws.js').broadcastToAllClient;

setInterval(function() {
    let message = Math.random(); // A random number whatever
    console.log('The message "' + message + '" is emited');
    broadcastToAllClient(message); //
}, 3000); // Executed each 3s
