import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_PROJECT } from "../queries/projectQueries";

export default function Project() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      {!loading && !error && (
        <div>
          <h3>{data.project.name}</h3>
          <p>{data.project.description}</p>
        </div>
      )}{" "}
    </div>
  );
}
