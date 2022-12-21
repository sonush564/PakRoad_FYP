import React from 'react';
import {Container} from 'react-bootstrap';
import Button from '@mui/material/Button';
import form from '../../Images/form.png';
import Table from 'react-bootstrap/Table';
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
  createData('Bike', '100 Rupees',2022),
  createData('LTV+Bike', '150 Rupees',2022),
  createData('Bike+Car', '150 Rupees',2022),
  createData('HTV+PSV', '200 Rupees', 2022),
];


const DuplicateDrivingLicenseInformation = () => {
  const navigate = useNavigate();
  const onButtonClick = () => {
    fetch('Duplicate Driving License Form.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Duplicate Driving License Form.pdf';
            alink.click();
        })
    })
}
  return ( 
    <>
    <h1 id='DD'> Duplicate Driving License </h1>
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
 3. Original driving license missing report from police station <br/>
 4. Form L.L.D (Click the Button below to downlaod).<br/>
 5. Post office Tickes as given below.
</p>

<TableContainer  className="tableee"  >
      <Table sx={{ minWidth: 300 }} className="tableee" aria-label="simple table">
      <TableHead>
          <TableRow>
          <TableCell>Vehcile Type</TableCell>
            <TableCell align="right">Ticket Price</TableCell>
            <TableCell align="right">Validity year</TableCell>
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
</div>
          <Button  variant='default' id='form' onClick={onButtonClick}> <img  id='formpic' className="img-responsive" src={form}  alt="logo" />
                   Form 
                </Button>
       </Container>
       <Container id='infoR'style={{width:"30%"}}>
        <h2>
          Related Searches
        </h2>
        <br/><h6 id='rS' onClick={() => navigate('/RegularDrivingLicense') } style={{cursor:'pointer'}}>Reqular Driving License </h6>
        <br/><h6 id='rS' onClick={() => navigate('/InternationDrivingLicense') } style={{cursor:'pointer'}}>International Driving License</h6> <br/>
        <h6 id='rS' onClick={() => navigate('/Sign') } style={{cursor:'pointer'}}>Signs</h6><br/>
        <h3 >
          Frequently Asked Questions 
        </h3>
        <br/><h6 id='rS' style={{cursor:'pointer'}}onClick={() => navigate('/testcenters') } >How can I locate my test center? </h6><br/>
        <h6 id='rS' onClick={() => navigate('/about') } style={{cursor:'pointer'}}>How can I contact you? </h6>
        <br/><h6><a  href="https://rasta.punjab.gov.pk/rasta_public/" target="_blank">  From where i can book slot for license? </a></h6>
        <br/><h6><a  href="https://dlims.punjab.gov.pk/track/" target="_blank"> How can I check my license status? </a></h6>
       </Container>
    </Container>
    </>
   );
}
 
export default DuplicateDrivingLicenseInformation;
