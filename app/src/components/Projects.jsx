import { gql, useQuery } from "@apollo/client";
import Table from "react-bootstrap/Table";
import { MdDelete } from "react-icons/md";
import { GET_PROJECTS } from "../queries/projectQueries";
import ProjectRow from "./ProjectRow";

export default function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

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
              <th>Description</th>
              <th>Client</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.projects.map((project) => (
              <ProjectRow key={project.id} project={project} />
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}
