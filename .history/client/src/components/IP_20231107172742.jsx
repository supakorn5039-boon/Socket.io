import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const IP = () => {
  useEffect(() => {
    const socket = io("http://localhost:3001");
  }, []);

  return <div>Ip Nebula</div>;
};

export default IP;
