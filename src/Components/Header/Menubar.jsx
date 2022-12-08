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
        <NavDropdown.Item onClick={() => navigate('/LearnerPermit')}>Learner Permit</NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate('/RegularDrivingLicense')} >Regular Driving License </NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate('/InternationDrivingLicense')}>International Driving License</NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate('/DrivingLicenseRenewal')}>Driving License Renewal</NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate('/DuplicateDrivingLicense')}>Duplicate Driving License</NavDropdown.Item>
        <NavDropdown.Item onClick={() => { window.location.href = url; } } >   Track License Status</NavDropdown.Item>  
        
   
       </NavDropdown>   
        </Container>
        <div class="vl"></div>
      <Container id='menu' >
        <NavDropdown title={t('DrivingTestPractice')}    id="navbarScrollingDropdown">
        <NavDropdown.Item onClick={() => navigate('/Quiz')} >Sign Test</NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate('/Practical')}>Practical Test</NavDropdown.Item>
        
        </NavDropdown>   
        </Container>
        <div class="vl"></div>
        <Container id='menu' >
        <NavDropdown title={t('TrafficRuless')} onClick={() =>{{setMultiD('')}}} id="navbarScrollingDropdown"> 
        <NavDropdown onClick={() =>{{setMultiD('impDiv')}}} title='Signs'  >
          <div className='multiDrop'>
        <NavDropdown.Item onClick={() =>{ navigate('/Sign')}} >Warning Signs</NavDropdown.Item>
        <NavDropdown.Item onClick={() =>{ navigate('/ImportantInformation')}} >Regulatory Signs</NavDropdown.Item>
        <NavDropdown.Item onClick={() =>{ navigate('/ImportantInformation')}} >Mandatory Signs</NavDropdown.Item>
        <NavDropdown.Item onClick={() =>{ navigate('/ImportantInformation')}} >Important Signs</NavDropdown.Item>
        </div>
        </NavDropdown>      
        <NavDropdown.Item className={multiD} onClick={() =>{ navigate('/ImportantInformation')}} >Important Information</NavDropdown.Item>
        </NavDropdown>        
        </Container>
       
        <div class="vl"></div>
        <Container id='menu' >
        <NavDropdown title={t('NeedShareRide')}    id="navbarScrollingDropdown">
        <NavDropdown.Item onClick={() => navigate('/NeedRide')}>Need a Ride</NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate('/ShareRide')} >Share a Ride</NavDropdown.Item>
      
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



