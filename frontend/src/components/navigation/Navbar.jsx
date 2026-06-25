import { NavLink } from "react-router-dom";
import useUiStore from "../../stores/useUiStore";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";

export default function AppNavbar() {
  const { toggleSidebar } = useUiStore();

  return (
    <Navbar
      bg="dark"
      expand="lg"
      className="px-2 border-bottom border-body"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Button
          variant="outline-light"
          className="me-2 d-none d-md-inline-block"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          ☰
        </Button>
        <Navbar.Brand as={NavLink} to="/dashboard">
          NotesApp
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/dashboard">
              Dashboard
            </Nav.Link>
            <Nav.Link as={NavLink} to="/settings">
              Settings
            </Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/profile">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/security">
                Security
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/logout">
                Logout
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#" disabled>
              Disabled
            </Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
