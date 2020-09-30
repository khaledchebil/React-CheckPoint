import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Nav, Navbar, Button, Form, FormControl } from 'react-bootstrap';
// here i add the needed one from bootstrap: Nav, Navbar ===> whatever shown in the error
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function App() {
  return (
<> 
{/* npm install --save bootstrap@3.4.1 */}
{/* npm install --save react-bootstrap-validation */}

<Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">React Check Point</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>

<div className='jumbotron'>
  <h3>Form</h3>
<br></br>
  <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Full Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your full name"></input>
   </div>
 
   <div class="form-group">
    <label for="exampleInputPassword1">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
 
  </div>


  <div class="form-group">
    <label for="exampleFormControlSelect1">Gender</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option></option>
      <option>Male</option>
      <option>Female</option>
    </select>
  </div>

  <Form.Group controlId="formBasicRange">
    <Form.Label>Cours Satisfaction</Form.Label>
    <Form.Control type="range" /> 
  </Form.Group> 


  <div class="form-group">
    <label for="exampleFormControlTextarea1">Enter your comment</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
  </div>

  <button type="button" class="btn btn-primary">Submit</button>
</form>
</div>

<MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="5">
            <h4 className="title">checkpoint Footer</h4>
            <p>
              this project is part of check point footer for GOMYCODE ... using bootstrap for form
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Usefull link</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Go My Code Hub</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Startup Act</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Info</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Other</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>

</>


  );
}

export default App;
