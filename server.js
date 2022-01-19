const express = require("express");
const app = express();
const http = require("http");
const expressServer = http.createServer(app);

// PORT
const PORT = process.env.PORT || 8080;

// middleware
app.use(express.static(('routes/client/build')));

// routes
const indexRoute = require("./routes");
app.use("/", indexRoute);

// soket configure
const { Server } = require("socket.io");
const io = new Server(expressServer);

io.on("connection", (socket) => {
  console.log("New User Connected");

  socket.emit('msg','This is message from server');

  socket.on("disconnect", () => {
    console.log("User Disconnected");
  });
});

// listen
expressServer.listen(PORT, () => {
  console.log(`${PORT} Server is Running…`);
});
