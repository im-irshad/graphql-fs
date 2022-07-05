import React from "react";
import { MdDelete } from "react-icons/md";

export default function ClientRow({ client }) {
  return (
    <>
      <tr key={client.id}>
        <td>{client.id}</td>
        <td>{client.name}</td>
        <td>{client.email}</td>
        <td>{client.phone}</td>
        <td>
          {" "}
          <MdDelete />{" "}
        </td>
      </tr>
    </>
  );
}
