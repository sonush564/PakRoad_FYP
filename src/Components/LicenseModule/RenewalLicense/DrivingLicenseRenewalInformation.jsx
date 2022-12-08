import React from 'react';
import {Container} from 'react-bootstrap';
import Button from '@mui/material/Button';
import Table from 'react-bootstrap/Table'
import form from '../../Images/form.png';
import { useNavigate } from 'react-router-dom';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Bike', '500 Rupees','50 Rupees','100 Rupees','250 Rupees', 2022),
  createData('Bike,Car,LTV', '750 Rupees' ,'75 Rupees','150 Rupees','375 Rupees', 2022),
  createData('PSV+HTV', '1000 Rupees','100 Rupees','200 Rupees','500 Rupees', 2022),
];
const DrivingLicenseRenewalInformation = () => {
  const navigate = useNavigate();
  const onButtonClick = () => {
    fetch('Driving License Renewal Form.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Driving License Renewal Form.pdf';
            alink.click();
        })
    })
}
  return ( 
    <>
    <h1 id='DLR'> Driving License Renewal</h1>
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
 3. Orignal Driving License <br/>
 4. Form E (Click the Button below to downlaod). <br/>
 5. Post office Tickes as given below.
</p>
</div>
<TableContainer  className="tableee"  >
      <Table sx={{ minWidth: 300 }} className="tableee" aria-label="simple table">
      <TableHead>
          <TableRow>
          <TableCell>Vehcile Type</TableCell>
            <TableCell align="right">Renewal Ticket Price</TableCell>
            <TableCell align="right">Fine 1-3 months</TableCell>
            <TableCell align="right">Fine 3-12 months</TableCell>
            <TableCell align="right">Fine 1 year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell  >
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
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
 
export default DrivingLicenseRenewalInformation;
