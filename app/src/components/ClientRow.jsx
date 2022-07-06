import React from "react";
import { MdDelete } from "react-icons/md";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientQueries";

export default function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    refetchQueries: [{ query: GET_CLIENTS }],
  });
  return (
    <>
      <tr key={client.id}>
        <td>{client.id}</td>
        <td>{client.name}</td>
        <td>{client.email}</td>
        <td>{client.phone}</td>
        <td>
          {" "}
          <button onClick={deleteClient}>
            <MdDelete />
          </button>{" "}
        </td>
      </tr>
    </>
  );
}
