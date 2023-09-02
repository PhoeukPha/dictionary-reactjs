import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Layout = () => {
  return (
    <div className="container">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Dictionary</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="">About Us</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="card border-0 mt-3">
        <div className="card-body card-body-custom">
          <div className="row">
            <div className="col-md-3 col-xl-3">
              <div className="flex">
                <Form.Control
                  className="shadow-none"
                  type="text"
                  id="txtSearch"
                  placeholder="Search Word"
                />
                <button type="submit" className="btn btn-sm btn-success ms-2">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
              <div className="word-list mt-3">
                <ul>
                  
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  <li><a href="">ICT</a></li>
                  
                </ul>
              </div>
            </div>
            <div className="col-md-9 col-xl-9">He</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
