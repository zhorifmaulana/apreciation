import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

import { Navbar, Nav, NavDropdown, Form,  FormControl, Button, Table} from 'react-bootstrap';
function Home() {
  return (
    <div className="Home">
      <header>
        <Navbar expand="lg" variant="dark" bg="dark">
          <Navbar.Brand href="#home">Appreciation</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                //<Link to = '/Intro'>
                  <Nav.Link href="#home">Home</Nav.Link>
                //</Link>
                  <NavDropdown title="Events" id="basic-nav-dropdown">
                    < NavDropdown.Item>Life in General</NavDropdown.Item>
                    < NavDropdown.Item>Organization/Committee</NavDropdown.Item>
                    <NavDropdown.Item>Sidang Skripsi</NavDropdown.Item>
                    <NavDropdown.Item>Sidang Proposal</NavDropdown.Item>
                    < NavDropdown.Item>Fit and Proper Test</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Other</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="I'd like to search..." className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <div className="container">
        <div className="row mt-5">
            <div className="col-lg-4 mb-4 grid-margin">
              <div className="card h-100">
                  <h4 className="card-header">Card Title</h4>
                  <div className="card-body">
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                  </div>
                  <div className="card-footer">
                    <Link to = '/Afeksi'>
                    <Button variant="btn btn-primary">Learn More</Button>
                    </Link>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 grid-margin">
              <div className="card h-100">
                  <h4 className="card-header">Card Title</h4>
                  <div className="card-body">
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ipsam eos, nam perspiciatis natus commodi similique totam consectetur praesentium molestiae atque exercitationem ut consequuntur, sed eveniet, magni nostrum sint fuga.</p>
                  </div>
                  <div className="card-footer">
                    <Button variant="btn btn-primary">Learn More</Button>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 grid-margin">
              <div className="card h-100">
                  <h4 className="card-header">Card Title</h4>
                  <div className="card-body">
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                  </div>
                  <div className="card-footer">
                    <Button variant="btn btn-primary">Learn More</Button>
                  </div>
              </div>
            </div>
        </div>
        <div className="row mb-4">
          <div className="col-sm-12 grid-margin">
            <div className="card h-100">
              <h4 className="card-header">Table</h4>
              <div className="card-body">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td colSpan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
