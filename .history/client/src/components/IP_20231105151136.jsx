import React, { useEffect, useState } from "react";
import io from "socket.io-client";

export default function IP() {
  const socket = io("http://localhost:3001");

  useEffect(() => {}, []);
  return <div>IP</div>;
}
