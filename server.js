/*
    Welcome, this is the entry point
    => Here we just start the two servers that we will use
        server-http: handles http requests with express
        server-ws: handles websockets
    => I also did a dumb interval function that sent random messages throught websocket
*/

require('./server-http.js');
require('./server-ws.js');
require('./interval.js');
