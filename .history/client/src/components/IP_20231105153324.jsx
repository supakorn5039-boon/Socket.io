import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const IP = () => {
  useEffect(() => {
    const socket = io("http://localhost:3001");

    socket.on("m", (data) => {
      console.log(data);
    });
  });

  return <div>Ip</div>;
};

export default IP;

// This displays message that the server is running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get("/express_backend", (req, res) => {
  //Line 9
  console.log("printing from the server f3f134g");
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" }); //Line 10
}); //Line 11
