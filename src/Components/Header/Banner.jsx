import React from 'react';
import {Container, Navbar} from 'react-bootstrap';
import logo from '../Images/logo.png';
import { MDBCol, MDBInput, MDBIcon } from "mdbreact";
const Banner = () => {
    return ( 
        <> 
        <Container fluid id='bg' >
        <Navbar.Brand>
          <img width="60px"
            height="60px"
            style={{ float: "left", marginTop: "15px" }}
            className="img-responsive"
            src={logo}
            alt="logo" />
        </Navbar.Brand>
        <MDBCol md="3" style={{ float: "right", marginTop: "20px" }}>
          <MDBInput hint="Search" type="text" containerClass="active-pink active-pink-2 mt-0" />
        </MDBCol>
        </Container>
        </>
     );
}
 
export default Banner ;