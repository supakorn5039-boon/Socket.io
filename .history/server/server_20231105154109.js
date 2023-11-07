const express = require("express");
const socketIO = require("socket.io");
const cors = require("cors");

const http = require("http");
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(
  cors({
    origin: "http://localhost:3000", // Update this to match your React app's URL
  })
);

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
