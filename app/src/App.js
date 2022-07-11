import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Clients from "./components/Clients";
import AddClient from "./components/AddClient";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Container className="p-3">
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </Container>
      </ApolloProvider>
    </>
  );
}

export default App;
