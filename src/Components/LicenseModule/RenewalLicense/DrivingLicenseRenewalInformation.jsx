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
import { useTranslation, initReactI18next } from "react-i18next";

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
  const {t, il8n}= useTranslation();
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
    <h1 id='DLR'>{t('REDL')}</h1>
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
  {t('re1')}<br/>
  {t('re2')} <br/>
  {t('re3')}
</p>
</div>
<TableContainer  className="tableee"  >
      <Table sx={{ minWidth: 300 }} className="tableee" aria-label="simple table">
      <TableHead>
          <TableRow>
          <TableCell> {t('TH1')}</TableCell>
            <TableCell align="right"> {t('TH3')}</TableCell>
            <TableCell align="right">{t('fine1')}</TableCell>
            <TableCell align="right">{t('fine2')}</TableCell>
            <TableCell align="right">{t('fine3')}</TableCell>
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
        <br/><h6 id='rS' onClick={() => navigate('/about') } style={{cursor:'pointer'}}>{t('Q2')}</h6>
        <br/><h6 id='rS' style={{cursor:'pointer'}}>{t('Q1')}</h6><br/>
        <br/><h6><a  href="https://rasta.punjab.gov.pk/rasta_public/" target="_blank">{t('Q3')}</a></h6>
        <br/><h6><a  href="https://dlims.punjab.gov.pk/track/" target="_blank">{t('Q4')}</a></h6>
     

       </Container>
    </Container>
    </>
   );
}
 
export default DrivingLicenseRenewalInformation;
