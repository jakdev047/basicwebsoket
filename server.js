const express = require('express');
const app = express();
const  http= require('http');
const expressServer = http.createServer(app);


// PORT
const PORT = process.env.PORT || 8080;

// routes
const indexRoute = require('./routes');
app.use('/', indexRoute);

// listen
expressServer.listen(PORT,()=>{
    console.log(`${PORT} Server is Running…`);
});

