import React from 'react';
import {Container} from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
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
  createData('Bike', '18 year', 200 , 2022),
  createData('Car', '18 year', 200 , 2022),
  createData('LTV', '18 year', 200 , 2022),
  createData('HTV', '18 year', 200 , 2022),
];
const LearnerPermitInformation = () => {
  const navigate = useNavigate();
  const {t, il8n}= useTranslation();
  return ( 
    <>
    <h1 id='LP'>{t('Learner')} </h1>
    <Container id="infocontainer" fluid style={{ width:"100%"}}>
       <Container fluid id='infoL' style={{width:"70%"}}>
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
  {t('L6')}<br/>
  {t('L7')}<br/>
</p>
<div >
<TableContainer  className="tableee"  >
      <Table sx={{ minWidth: 300 }} className="tableee" aria-label="simple table">
      <TableHead>
          <TableRow>
            <TableCell> {t('TH1')}</TableCell>
            <TableCell align="right"> {t('TH2')}</TableCell>
            <TableCell align="right">{t('TH3')}</TableCell>
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
  </div>
    
    
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
        <h6 id='rS' onClick={() => navigate('/about') } style={{cursor:'pointer'}}>{t('Q2')}</h6>
        <br/><h6><a  href="https://rasta.punjab.gov.pk/rasta_public/" target="_blank">{t('Q3')}</a></h6>
        <br/><h6><a  href="https://dlims.punjab.gov.pk/track/" target="_blank">{t('Q4')}</a></h6>
        

       </Container>
    </Container>
    </>
   );
}
 
export default LearnerPermitInformation;
