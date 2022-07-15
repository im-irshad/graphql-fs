import { gql } from "@apollo/client";

export const ADD_PROJECT = gql`
  mutation AddProject(
    $name: String!
    $description: String!
    $status: String!
    $client: ID!
  ) {
    addProject(
      name: $name
      description: $description
      status: $status
      client: $client
    ) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;
