import * as React from 'react';
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import {NavDropdown} from 'react-bootstrap'
import {Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useTranslation, initReactI18next } from "react-i18next";


const Menubar = () => {
  const navigate = useNavigate();
  const {t, il8n}= useTranslation();
  const [multiD, setMultiD] = React.useState('');
  
  let url = "https://dlims.punjab.gov.pk/track/"
 
    return (
         <Container fluid id='mainmenu'>
        <Navbar expand="lg" className="border-0 "style={{fontSize:"20px", width:"100%"}}>
        <Navbar.Toggle aria-controls='respnsive-navbar-nav'/>
        <Navbar.Collapse id='respnsive-navbar-nav'>
        <Nav className='m-auto'>

        <Container id='menu' >       
         <NavDropdown title={t('DrivingLicenceInformation')}  id="navbarScrollingDropdown" >
        <NavDropdown.Item onClick={() => navigate('/LearnerPermit')}>{t('Learner')}</NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate('/RegularDrivingLicense')} >{t('RDL')} </NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate('/InternationDrivingLicense')}>{t('IDL')}</NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate('/DrivingLicenseRenewal')}>{t('REDL')}</NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate('/DuplicateDrivingLicense')}>{t('DDL')}</NavDropdown.Item>
        <NavDropdown.Item onClick={() => { window.location.href = url; } } >{t('TDL')} </NavDropdown.Item>  
        
   
       </NavDropdown>   
        </Container>
        <div class="vl"></div>
      <Container id='menu' >
        <NavDropdown title={t('DrivingTestPractice')}    id="navbarScrollingDropdown">
        <NavDropdown.Item onClick={() => navigate('/Quiz')} >{t('ST')}</NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate('/Practical')}> {t('PT')}</NavDropdown.Item>
        
        </NavDropdown>   
        </Container>
        <div class="vl"></div>
        <Container id='menu' >
        <NavDropdown title={t('TrafficRuless')} onClick={() =>{{setMultiD('')}}} id="navbarScrollingDropdown"> 
        <NavDropdown onClick={() =>{{setMultiD('impDiv')}}} title={t('signs')}  >
          <div className='multiDrop'>
        <NavDropdown.Item onClick={() =>{ navigate('/Sign')}} >{t('Wsigns')}</NavDropdown.Item>
        <NavDropdown.Item onClick={() =>{ navigate('/regulatorysigns')}} >{t('Rsigns')}</NavDropdown.Item>
        <NavDropdown.Item onClick={() =>{ navigate('/cumpulsorysigns')}} >{t('Csigns')}</NavDropdown.Item>
        <NavDropdown.Item onClick={() =>{ navigate('/informatorysigns')}} >{t('Isigns')}</NavDropdown.Item>
        </div>
        </NavDropdown>      
        <NavDropdown.Item className={multiD} onClick={() =>{ navigate('/ImportantInformation')}} >{t('impinfo')}</NavDropdown.Item>
        </NavDropdown>        
        </Container>
       
        <div class="vl"></div>
        <Container id='menu' >
        <NavDropdown title={t('NeedShareRide')}    id="navbarScrollingDropdown">
        <NavDropdown.Item onClick={() => navigate('/NeedRide')}>{t('Need')}</NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate('/ShareRide')} >{t('Share')}</NavDropdown.Item>
      
        </NavDropdown>   
        </Container>
        <div class="vl"></div>
        <Container id='menu' >
        <h1 id="abs" style={{fontSize:"20px", fontWeight:"bold", marginTop:"10px"}} onClick={() => navigate('/about')}> {t('About')}</h1>
        </Container>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
    </Container>




     
    
      )
        
    };
export default Menubar;



