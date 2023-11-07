const express = require("express");
const socketIO = require("socket.io");

const http = require("http");

const app = express();

app.get("/boon", (req, res) => {
  console.log("Hello Endpoint");
  res.send("Hello  DEV");
});

app.listen(3001, () => console.log("Server is Running on Port 3001"));
