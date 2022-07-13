import React from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Alert variant="danger" align="center">
        <div>NotFound</div>
        <h1>NotFound</h1>
        <p>Sorry, this page does not exist</p>
        <Link to="/">Go to Home</Link>
      </Alert>
    </>
  );
}
