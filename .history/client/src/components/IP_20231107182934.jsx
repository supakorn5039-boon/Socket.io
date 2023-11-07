import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const IP = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const socket = io.connect("http://localhost:3001");
    socket.on("nodeStatus", ({ id, status, ip, label }) => {
      setData((prevData) => ({
        ...prevData,
        [id]: { id, label, status, ip },
      }));
    });
  }, []);

  console.log(data);

  if (data === null || data === undefined) {
    return <h1>...Loading</h1>;
  }

  const tableRows = Object.values(data).map((node) => (
    <tr key={node.id}>
      <td>{node.id}</td>
      <td>{node.status}</td>
      <td>{node.label}</td>
      <td>{node.ip}</td>
      <td>
        <span
          className={`status-circle ${node.status === "up" ? "up" : "down"}`}
        />
      </td>
    </tr>
  ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>status</th>
            <th>label</th>
            <th>ip</th>
            <td>color</td>
          </tr>
        </thead>
        {tableRows}
      </table>
    </div>
  );
};

export default IP;
