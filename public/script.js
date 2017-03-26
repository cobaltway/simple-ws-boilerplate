/*
    This is the client!
    Modern browsers have the websocket protocol built-in so no need for any library
*/

const ws = new WebSocket('ws://localhost:8080'); // Connect to our local ws server

ws.onmessage = function(event) { // Executed each time a new message is received
    let data = event.data;
    document.getElementById('message_container').innerHTML = data; // Just put the data into the DOM
};
