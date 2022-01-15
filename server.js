const express = require("express");
const app = express();
const http = require("http");
const expressServer = http.createServer(app);

// soket configure
const { Server } = require("socket.io");
const io = new Server(expressServer);

io.on("connection", (socket) => {
  console.log("New User Connected");
  socket.on("disconnect", () => {
    console.log("User Disconnected");
  });
});

// PORT
const PORT = process.env.PORT || 8080;

// routes
const indexRoute = require("./routes");
app.use("/", indexRoute);

// listen
expressServer.listen(PORT, () => {
  console.log(`${PORT} Server is Running…`);
});
