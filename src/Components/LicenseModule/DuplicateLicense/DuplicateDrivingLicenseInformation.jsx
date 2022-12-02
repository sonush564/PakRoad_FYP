import React from 'react';
import {Button, Container} from 'react-bootstrap';




const DuplicateDrivingLicenseInformation = () => {
  return ( 
    <>
    <h1 id='DD'> Duplicate Driving License </h1>
    <Container id="infocontainer" fluid style={{ width:"100%"}}>
       <Container id='infoL' style={{width:"65%"}}>
        <h1>
          Container Left
          </h1>
        
       
       </Container>
       <Container id='infoR'style={{width:"35%"}}>
        <h1>
          Container Right
        </h1>
       </Container>
    </Container>
    </>
   );
}
 
export default DuplicateDrivingLicenseInformation;
