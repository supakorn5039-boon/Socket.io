const express = require("express");
const router = express.Router;

const app = express();

app.get("/boon", (req, res) => {
  console.log("Hello Endpoint");
  res.send("Hello END DEV");
});

app.listen(3001, () => console.log("Server is Running on Port 3001"));
