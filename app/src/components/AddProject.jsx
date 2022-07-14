import React from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { ADD_PROJECT } from "../mutations/projectMutations";
import { GET_PROJECT, GET_PROJECTS } from "../queries/projectQueries";

export default function AddProject() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [client, setClient] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, description, status, client);
    AddProject({ name, description, status, client });
    setShow(false);
  };

  const [AddProject] = useMutation(ADD_Project, {
    variables: { name, description, status, client },
    refetchQueries: [{ query: GET_PROJECTS }],
  });
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Client
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
              <Form.Control
                type="text"
                placeholder="Choose Client"
                id="client"
                onChange={(e) => {
                  setClient(e.target.value);
                }}
              />
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
  );
}
