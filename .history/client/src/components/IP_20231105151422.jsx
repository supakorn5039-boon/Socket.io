import React, { useEffect, useState } from "react";
import io from "socket.io-client";

export default function IP() {
  useEffect(() => {
    const socket = io('http://localhost:3001");
  }, []);
  return <div>IP</div>;
}
