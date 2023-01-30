import React from 'react';
import {Container} from 'react-bootstrap';
import Button from '@mui/material/Button';
import form from '../../Images/form.png'
import Table from 'react-bootstrap/Table'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import { useTranslation, initReactI18next } from "react-i18next";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Bike', '60 Rupees ticket for test, if passed then 500 Rupees ticket', 2022),
  createData('Car/LTV', '150 Rupees ticket for test, if passed then 750 Rupees ticket' , 2022),
  createData('Bike+Car', '200 Rupees ticket for test, if passed then 750 Rupees ticket', 2022),
  createData('Bike+LTV', '200 Rupees ticket for test, if passed then 750 Rupees ticket' , 2022),
];


const RegularDrivingLicenseInformation = () => {
  const navigate = useNavigate();
  const {t, il8n}= useTranslation();
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
    <h1 id='RD'>{t('RDL')}</h1>
    <Container id="infocontainer" fluid style={{ width:"100%"}}>
       <Container id='infoL' style={{width:"70%"}}>
       <h2 id='stps'>{t('LH2')} </h2>
        <div id='steps' >
<p id='stps'>
{t('L1')} <br/>
{t('L2')}<br/>
{t('L3')}<br/>
{t('L4')}<br/>
</p>
<h5 id='stps'>{t('L5')}</h5>     
  </div>
  <h2 id='stps'>{t('LH1')}</h2>
  <div id='docs'>
  <p id='stps'>
  {t('R1')}<br/>
  {t('R2')}<br/>
  {t('R3')}<br/>
  {t('R4')}<br/>
 &nbsp;&nbsp;&nbsp; {t('R5')}<br/> 
 &nbsp;&nbsp;&nbsp; {t('R6')}<br/>
 {t('R7')}<br/>
 {t('R8')}
</p>
<TableContainer  className="tableee"  >
      <Table sx={{ minWidth: 300 }} className="tableee" aria-label="simple table">
      <TableHead>
          <TableRow>
            <TableCell>{t('TH1')}</TableCell>
            <TableCell align="center">{t('TH3')}</TableCell>
            <TableCell align="right">{t('TH4')}</TableCell>
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
  {t('form')}
                </Button>
        
       </Container>
       <Container id='infoR'style={{width:"30%"}}>
        <h2>
        {t('LH3')}
        </h2>
        <br/><h6 id='rS' onClick={() => navigate('/InternationDrivingLicense') } style={{cursor:'pointer'}}>{t('IDL')}</h6> <br/>
        <h6 id='rS' onClick={() => navigate('/DuplicateDrivingLicense') } style={{cursor:'pointer'}}>{t('DDL')}</h6><br/>
        <h6 id='rS' onClick={() => navigate('/Sign') } style={{cursor:'pointer'}}>{t('signs')}</h6><br/>
        <h3 >
        {t('LH4')}
        </h3>
        <br/><h6 id='rS' style={{cursor:'pointer'}}>{t('Q1')}</h6><br/>
        <br/><h6><a  href="https://rasta.punjab.gov.pk/rasta_public/" target="_blank">{t('Q3')}</a></h6>
        <br/><h6><a  href="https://dlims.punjab.gov.pk/track/" target="_blank">{t('Q4')}</a></h6>
        <h6 id='rS' onClick={() => navigate('/about') } style={{cursor:'pointer'}}>{t('Q2')}</h6>

       </Container>
    </Container>
    </>
   );
}
 
export default RegularDrivingLicenseInformation;
