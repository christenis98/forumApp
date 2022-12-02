import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const DefaultContainer = (props) => {
  const classes = "card" + props.className;

  return (
    <Container className="d-flex flex-column gap-3">
      <Navbar bg="light" expand="lg">
        <Container>
          <Link>
            <Navbar.Brand to={`/`}>Forum</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
      <Container className="d-flex flex-column gap-3">
        <div className={classes}>{props.children}</div>
      </Container>
    </Container>
  );
};

export default DefaultContainer;
