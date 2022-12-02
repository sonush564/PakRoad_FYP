import * as React from 'react';
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import {NavDropdown} from 'react-bootstrap'
import {Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useTranslation, initReactI18next } from "react-i18next";
const HomeMenu = () => {
  const navigate = useNavigate();
  const {t, il8n}= useTranslation();
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
    return (
         <Container fluid id='homemenu'>
        <Navbar expand="lg" className="border-0 "style={{fontSize:"20px", width:"100%"}}>
        <Navbar.Toggle aria-controls='respnsive-navbar-nav'/>
        <Navbar.Collapse id='respnsive-navbar-nav'>
        <Nav className='m-auto'>

        <Container id='hmenu' >       
         <NavDropdown title={t('DrivingLicenceInformation')}  id="hnavbarScrollingDropdown" >
        <NavDropdown.Item onClick={() => navigate('/LearnerPermit')}>Learner Permit</NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate('/RegularDrivingLicense')} >Regular Driving License </NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate('/InternationDrivingLicense')}>International Driving License</NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate('/DrivingLicenseRenewal')}>Driving License Renewal</NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate('/DuplicateDrivingLicense')}>Duplicate Driving License</NavDropdown.Item>      
        <a href="https://dlims.punjab.gov.pk/track/" id='tls' target="_blank">
          Track License Status
        </a>
        
   
       </NavDropdown>   
        </Container>
      
      <Container id='hmenu' >
        <NavDropdown title={t('DrivingTestPractice')}  id="hnavbarScrollingDropdown">
        <NavDropdown.Item onClick={() => navigate('/Quiz')} >Sign Test</NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate('/Practical')}>Practical Test</NavDropdown.Item>
        
        </NavDropdown>   
        </Container>

        <Container id='hmenu' >
        <NavDropdown title={t('TrafficRuless')} id="hnavbarScrollingDropdown">
         
        <NavDropdown.Item onClick={() =>{ navigate('/Sign')}} onMouseEnter={handleMouseOver} onMouseOut={handleMouseOut} >Signs</NavDropdown.Item> 
        {isHovering && (
        <div onMouseOut={handleMouseOut}>
        <NavDropdown.Item >warning signs</NavDropdown.Item>
        <NavDropdown.Item >Important signs</NavDropdown.Item>
        </div>
          )}
        
             
        <NavDropdown.Item onClick={() =>{ navigate('/ImportantInformation')}} >Important Information</NavDropdown.Item>
        </NavDropdown>        
        </Container>
       
      
        <Container id='hmenu' >
        <NavDropdown title={t('NeedShareRide')}  id="hnavbarScrollingDropdown">
        <NavDropdown.Item onClick={() => navigate('/needride')}>Need a Ride</NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate('/shareride')} >Share a Ride</NavDropdown.Item>
      
        </NavDropdown>   
        </Container>
       
        <Container id='hmenu' >
        <h1 id="habs" onClick={() => navigate('/about')}> {t('About')}</h1>
        </Container>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
    </Container>




     
    
      )
        
    };
export default HomeMenu;



