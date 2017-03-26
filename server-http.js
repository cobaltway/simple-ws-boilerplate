/*
    This is the express server that handles http requests
    The only thing it does is to serve files located in the folder /public
*/

const express = require('express');

const httpServer = express(); // Create the http server

httpServer.use(express.static('public')); // Serve the files

httpServer.listen(3000, function() { // Make it listen for incoming http requests
    console.log('Http server is listening on port 3000!');
});
