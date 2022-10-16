import { Nav } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Nav className="link-container justify-content-center">
      <Nav.Item>
        <Nav.Link className="link" eventKey="link-1">
          ABOUT US
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="link" eventKey="link-2">
          FOR YOU
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="link" eventKey="link-3">
          SERVICES
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="link" eventKey="link-4">
          BLOG
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="link" eventKey="link-5">
          VLOG
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="link" eventKey="link-6">
          CONTACT
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default MyNavbar;
