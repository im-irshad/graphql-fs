import React from "react";
import AddClient from "../components/AddClient";
import Clients from "../components/Clients";

export default function Home() {
  return (
    <div>
      <AddClient />
      <Clients />
    </div>
  );
}
