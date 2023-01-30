import React from 'react';
import {Container} from 'react-bootstrap';
import Button from '@mui/material/Button';
import form from '../../Images/form.png';
import { useNavigate } from 'react-router-dom';
import { useTranslation, initReactI18next } from "react-i18next";


const InternationalDrivingLicenseInformation = () => {
  const navigate = useNavigate();
  const {t, il8n}= useTranslation();
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
    <h1 id='ID'>{t('IDL')}</h1>
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
  {t('I1')}<br/>
  {t('I2')}<br/>
 &nbsp;&nbsp;&nbsp; {t('I3')}<br/> 
 &nbsp;&nbsp;&nbsp; {t('I4')}<br/>
 {t('I5')} <br/>
 {t('I6')} <br/>
 {t('I7')}
</p>
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
 
export default InternationalDrivingLicenseInformation;
