import React from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default function AddClient() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Client
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Client</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
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
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Form.Label>Phone:</Form.Label>
              <Form.Control
                type="Number"
                placeholder="Enter Phone"
                id="phone"
                onChange={(e) => {
                  setPhone(e.target.value);
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
