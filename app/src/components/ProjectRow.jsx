import React from "react";
import { MdDelete } from "react-icons/md";
import { useMutation } from "@apollo/client";
import { DELETE_PROJECT } from "../mutations/projectMutations";
import { GET_PROJECTS } from "../queries/projectQueries";

export default function ProjectRow({ project }) {
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: project.id },
    refetchQueries: [{ query: GET_PROJECTS }],
  });
  return (
    <>
      <tr key={project.id}>
        <td>{project.id}</td>
        <td>{project.name}</td>
        <td>{project.description}</td>
        <td>{project.clientId}</td>
        <td>
          {" "}
          <button onClick={deleteProject}>
            <MdDelete />
          </button>{" "}
        </td>
      </tr>
    </>
  );
}
