import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const IP = () => {
  useEffect(() => {
    const socket = io("http://localhost:3001");

    socket.on("m", (data) => {
      console.log(data);
    });
  });

  return <div>Ip Nebula</div>;
};

export default IP;
