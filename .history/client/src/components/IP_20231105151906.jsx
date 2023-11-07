import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const IP = () => {
  useEffect(() => {
    const socket = io("http://localhost:3001");
  });
  return <div>Ip</div>;
};

export default IP;
