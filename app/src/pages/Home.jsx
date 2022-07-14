import React from "react";
import AddClient from "../components/AddClient";
import AddProject from "../components/AddProject";
import Clients from "../components/Clients";

export default function Home() {
  return (
    <div>
      <AddClient />
      <AddProject />
      <Clients />
    </div>
  );
}
