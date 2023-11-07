const express = require("express");
const router = express.Router;

const app = express();

app.get("/boon", (req, res) => {
  console.log("Hello Endpoint");
});

app.listen(3001, () => console.log("Server is Running on Port 3001"));
