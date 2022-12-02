import React from 'react';
import {Button, Container} from 'react-bootstrap';
import form from '../../Images/form.png';


const InternationalDrivingLicenseInformation = () => {

  const onButtonClick = () => {
    fetch('CNIC.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'CNIC.pdf';
            alink.click();
        })
    })
}
  return ( 
    <>
    <h1 id='ID'> International Driving License</h1>
    <Container id="infocontainer" fluid style={{ width:"100%"}}>
       <Container id='infoL' style={{width:"65%"}}>
       <h2 id='stps'>Steps:</h2>
        <div id='steps' >
<p id='stps'>
 1. Book slot in your nearest traffic center.<br/>
 2. For booking, you can use RASTA App or you can call on 042-99030130 for appointments.<br/>
 3. If above steps doesn't apply then you can sipmly go to your nearest traffic center at 08:am.<br/>
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
 3. Valid learner permit <br/>
 4. Deposit slip of 100 Rupees submitted in any HBL branch.<br/>
 &nbsp;&nbsp;&nbsp; (Account Number: 01277901547301) <br/> 
 &nbsp;&nbsp;&nbsp; (Account Title: CTO Driving License Fee) <br/>
 5. International Driving License Form (Click the Button below to downlaod).
</p>
</div>
          <Button  variant='default' id='form' onClick={onButtonClick}> <img  id='formpic' className="img-responsive" src={form}  alt="logo" />
                   Form 
                </Button>
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
 
export default InternationalDrivingLicenseInformation;
