/*
    This is the websocket server
*/

const WebSocket = require('ws');

const wsServer = new WebSocket.Server({ port: 8080 }); // Start the ws server

let lastMessage = {}; // We will talk about it later

/*
    We are interested by sending to all connected clients the meta-data each time they change
    So we will just create a function to broadcast to all connected clients a message
    This function can be called each time what we want to serve change
*/
function broadcastToAllClient(message) {
    lastMessage = message; // Just store it for later
    wsServer.clients.forEach(function(client) { // For each client connected to the WS server
        if (client.readyState === WebSocket.OPEN) { // Check if the connection is ready
            client.send(message); // Actually send the message to the client
        }
    });
}

/*
    We also want to serve to a new client the last message that was broadcasted when he connects
    So we listen to the connect event, and send to him the last message
*/
wsServer.on('connection', function(client) { // Executed each time a new client connect
    console.log('A new websocket client is connected!');
    client.send(lastMessage);
});

// Expose publicly the function, so it can be called from anywhere in our program
module.exports = {
    broadcastToAllClient
};
