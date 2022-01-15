const express = require('express');
const app = express();

// PORT
const PORT = process.env.PORT || 8080;

// routes
const indexRoute = require('./routes');
app.use('/', indexRoute);

// listen
app.listen(PORT,()=>{
    console.log(`${PORT} Server is Running…`);
});

