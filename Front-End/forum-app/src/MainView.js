import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Thread from "./Components/Thread";

function MainView() {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Forum</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
      <Container>
        <Thread></Thread>
        <Thread></Thread>
        <Thread></Thread>
        <Thread></Thread>
      </Container>
    </Container>
  );
}

export default MainView;
