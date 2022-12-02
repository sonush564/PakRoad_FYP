import React from 'react';
import {Container} from 'react-bootstrap';



const DrivingLicenseRenewalInformation = () => {
  return ( 
    <>
    <h1 id='DLR'> Driving License Renewal</h1>
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
 
export default DrivingLicenseRenewalInformation;
