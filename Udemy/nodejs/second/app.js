const http = require("http");

const routes = require('./routes');

const server = http.createServer(routes.handler);

server.listen(3000);

/* 
CORE MODULES
o http
o https
o fs
o path
o os
*/
