import { gql, useQuery } from "@apollo/client";
import Table from "react-bootstrap/Table";
import { MdDelete } from "react-icons/md";
import GET_CLIENTS from "../queries/clientQueries";
import ClientRow from "./ClientRow";

export default function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {!loading && !error && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}
