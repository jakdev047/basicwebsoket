const express = require("express");
const app = express();
const http = require("http");
const expressServer = http.createServer(app);

// PORT
const PORT = process.env.PORT || 8080;

// routes
const indexRoute = require("./routes");
app.use("/", indexRoute);

// soket configure
const { Server } = require("socket.io");
const io = new Server(expressServer);

io.on("connection", (socket) => {
  console.log("New User Connected");

  /*
    // reserve event
    setTimeout( function() {
        socket.send('Data Transfer server to client');
    },500000);

    // custom event
    setTimeout( function() {
      socket.emit('customEvent','This is Custom Event');
    },500000);

    // data receive from client
    setTimeout( function() {
      socket.on('message',function(msg){
        console.log(msg)
      });
    },1000);
  */
    // data receive from client
    socket.on('customEvent',function(msg){
      // data send to Client
      io.emit('chattingDataShow',msg)
    });

  socket.on("disconnect", () => {
    console.log("User Disconnected");
  });
});

// listen
expressServer.listen(PORT, () => {
  console.log(`${PORT} Server is Running…`);
});
