import React from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_PROJECT } from "../mutations/projectMutations";
import { GET_CLIENTS } from "../queries/clientQueries";
import { GET_PROJECT, GET_PROJECTS } from "../queries/projectQueries";

export default function AddProject() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [client, setClient] = useState("");
  const { loading, error, data } = useQuery(GET_CLIENTS);
  console.log(data);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, description, status, client);
    AddProject({ name, description, status, client });
    setName("");
    setDescription("");
    setStatus("");
    setClient("");

    setShow(false);
  };

  const [AddProject] = useMutation(ADD_PROJECT, {
    variables: { name, description, status, clientId: client },
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {!loading && !error && (
        <>
          <Button variant="secondary" onClick={handleShow}>
            Add New Project
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add New Project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    id="name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <Form.Label>Description:</Form.Label>
                  <Form.Control
                    type="text area"
                    placeholder="Enter Description"
                    id="description"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                  <Form.Label>Status:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Status"
                    id="status"
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                  />
                  <Form.Label>Client:</Form.Label>
                  <Form.Select
                    type="select"
                    id="client"
                    onChange={(e) => {
                      setClient(e.target.value);
                    }}
                  >
                    <option>Select Client</option>
                    {data.clients.map((client) => (
                      <option key={client.id} value={client.id}>
                        {client.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
}
