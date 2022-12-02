import React from 'react';
import {Button, Container} from 'react-bootstrap';
import form from '../../Images/form.png'
import Table from 'react-bootstrap/Table'


const RegularDrivingLicenseInformation = () => {

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
    <h1 id='RD'> Regular Driving License</h1>
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
 5. Form A (Click the Button below to downlaod).
</p>
<Table bordered size='sm' style={{marginRight:"30px", width:"90%", border:"solid 2px"}}>
  <thead>
    <tr>
      <th width="20%" >Vehical Type</th>
      <th >Ticket Price</th>
      <th >Validity Year</th>
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <td>Bike</td>
      <td>60 Rupees ticket for test, if passed then 500 Rupees ticket</td>
      <td>2022</td>
    </tr>
    <tr>
      <td>Car / LTV</td>
      <td>150 Rupees ticket for test, if passed then 750 Rupees ticket</td>
      <td>2022</td>
    </tr>
    <tr>
      <td>Bike + Car</td>
      <td>200 Rupees ticket for test, if passed then 750 Rupees ticket</td>
      <td>2022</td>
 
    </tr>
    <tr>
      <td>Bike + LTV</td>
      <td>200 Rupees ticket for test, if passed then 750 Rupees ticket</td>
      <td>2022</td>
 
    </tr> 
  </tbody>
</Table>
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
 
export default RegularDrivingLicenseInformation;
