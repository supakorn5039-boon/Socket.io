const express = require("express"); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3

const http = require("http").server(app);

const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", (socket) => {
  console.log("A User is Connect");
  socket.on("disconnect", () => {
    console.log("User is Disconnect");
  });
  socket.emit("m", "5555");
});

app.get("/boon", (req, res) => {
  console.log("Hello Endpoint");
  res.send("Hello  DEV");
});

server.listen(3001, () => console.log("Server is Running on Port 3001"));
