import React from 'react';
import {Container} from 'react-bootstrap';
import Button from '@mui/material/Button';
import form from '../../Images/form.png';
import { useNavigate } from 'react-router-dom';


const InternationalDrivingLicenseInformation = () => {
  const navigate = useNavigate();
  const onButtonClick = () => {
    fetch('International License Form.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'International License Form.pdf';
            alink.click();
        })
    })
}
  return ( 
    <>
    <h1 id='ID'> International Driving License</h1>
    <Container id="infocontainer" fluid style={{ width:"100%"}}>
       <Container id='infoL' style={{width:"70%"}}>
       <h2 id='stps'>Steps:</h2>
        <div id='steps' >
<p id='stps'>
 1. Book slot in your nearest traffic center.<br/>
 2. For booking, you can use RASTA App or you can call on 042-99030130 for appointments.<br/>
 3. If above steps doesn't apply then you can sipmly go to your nearest traffic center at 08 am.<br/>
 &nbsp;&nbsp;&nbsp; (for Test Centers Click_Here)<br/>
 4. Visit traffic center on given date and time<br/>
</p>
<h5 id='stps'>Note: Don't forget to carry documents which are mentioned below.</h5>   
  </div>
  <h2 id='stps'>Required Documents:</h2>
  <div id='docs'>
  <p id='stps'>
 1. A copy of Orignal ID Card.<br/>
 2. 2 passport size (45mm x 35mm) photographs with blue background.<br/>
 3. Valid Passport (Minium expiry should be more than a year). <br/>
 4. Deposit slip of 450 Rupees submitted in any HBL branch.<br/>
 &nbsp;&nbsp;&nbsp; (Account Number: 01270017338803) <br/> 
 &nbsp;&nbsp;&nbsp; (Account Title: International License Fee) <br/>
 5. Rs. 66 Court Fee Ticket (To be accuried from the Finance Branch of Zilla Kachhari) <br/>
 6. Valid Driving License (Must be of Lahore and minium expiry should be more than a year) <br/>
 7. International Driving License Form (Click the Button below to downlaod).
</p>
</div>
          <Button  variant='default' id='form' onClick={onButtonClick}> <img  id='formpic' className="img-responsive" src={form}  alt="logo" />
                   Form 
                </Button>
       </Container>
       <Container id='infoR'style={{width:"30%"}}>
        <h2>
          Related Searches
        </h2>
        <br/><h6 id='rS' onClick={() => navigate('/InternationDrivingLicense') } style={{cursor:'pointer'}}>International Driving License</h6> <br/>
        <h6 id='rS' onClick={() => navigate('/DuplicateDrivingLicense') } style={{cursor:'pointer'}}>Duplicate Driving License </h6><br/>
        <h6 id='rS' onClick={() => navigate('/Sign') } style={{cursor:'pointer'}}>Signs</h6><br/>
        <h3 >
          Frequently Asked Questions 
        </h3>
        <br/><h6 id='rS' style={{cursor:'pointer'}}>How can I locate my test center? </h6><br/>
        <h6 id='rS' onClick={() => navigate('/about') } style={{cursor:'pointer'}}>How can I contact you? </h6>
        <br/><h6><a  href="https://dlims.punjab.gov.pk/track/" target="_blank"> How can I check my license status? </a></h6>
       </Container>
    </Container>
    </>
   );
}
 
export default InternationalDrivingLicenseInformation;
