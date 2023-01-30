import React, { useState, useEffect } from "react";
import {Container, Navbar} from 'react-bootstrap';
import Button from '@mui/material/Button';
import NewLogo from '../Images/NewLogo.png';
import { MDBCol, MDBInput, MDBIcon } from "mdbreact";
import HomeMenu from'../Header/HomeMenu';
import licence from '../Images/licence.png';
import verification from '../Images/verification.png';
import testcenter from '../Images/testcenter.png';
import Footer from '../Header/Footer';
import { useTranslation, initReactI18next } from "react-i18next";
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { use } from "i18next";
import { ReactNotifications } from 'react-notifications-component'
import { Store } from 'react-notifications-component';



const Home = ({changeLanguage, toggleDark, settoggleDark} ) => {
  const [udShown, setUdShown] = useState(true);
const [engShown, setEngShown] = useState(false);
const [search, setSearch] = useState();
const [search1, setSearch1] = useState();
const [learn, setLearn] = useState('learn');
const [img, setImg] = useState('img1');
  const {t, il8n}= useTranslation();
  const navigate = useNavigate();
  let url = 'https://rasta.punjab.gov.pk/rasta_public/'
 const engClick=()=>{

 setEngShown(false);
 setUdShown(true);
 setLearn('learn');

 }
 const udClick=()=>{
 setEngShown(true);
 setUdShown(false);
 setLearn('learnn');
 setImg('img11')
 console.log(search1)

 }
 const handleModeChange = () => {
  settoggleDark(!toggleDark);
};
const handleChange = (newValue) => {
  const val=newValue.target.value.toLowerCase()
  setSearch(val);
};
const handleChange1 = (event) => {
  if (event.key === 'Enter') {
    const timeout = setTimeout(() => {
      if(search=='learner' || search=='permit'|| search=='learner permit'|| search=='learner permit form'){
           
        navigate('/LearnerPermit')
      }
      else if(search=='regular' || search=='driving lisence'|| search=='lisence'|| search=='regular driving lisence'|| search=='pakistani driving lisence'|| search=='driving lisence form'){
        navigate('/RegularDrivingLicense')
      }
      else if(search=='duplicate' || search=='duplicate driving lisence'|| search=='duplicate pakistani driving lisence'|| search=='dupliacte driving lisence form'){
        navigate('/DuplicateDrivingLicense')
      }
      else if(search=='international' || search=='international driving lisence'|| search=='international pakistani driving lisence'|| search=='international driving lisence form'){
        navigate('/InternationalDrivingLicense')
      }
      else if(search=='renewal' || search=='renewal of driving lisence'||search=='international pakistani driving lisence'|| search=='international driving lisence form'){
        navigate('/DrivingLicenseRenewal')
      }
     else if(search=='quiz' || search=='sign test'|| search=='practice'|| search=='test' || search=='test practice'){
        navigate('/Quiz')
      }
      else if(search=='warning signs' || search=='signs'|| search=='traffic rules'|| search=='traffic signs' || search=='road signs'){
        navigate('/Sign')
      }
      else if(search=='regulatory signs'){
        navigate('/regulatorysigns')
      }
      else if(search=='cumpulsory signs'){
        navigate('/cumpulsorysigns')
      }
      else if(search=='informatory signs'){
        navigate('/informatorysigns')
      }
      else if(search=='info' || search=='important' || search=='important signs'|| search=='important information'|| search=='animation' || search=='animations'|| search=='video animations'){
        navigate('/Sign')
      }
      else if(search=='info' || search=='important signs'|| search=='important information'|| search=='animation' || search=='animations'|| search=='video animations'){
        navigate('/ImportantInformation')
      }
      else if(search=='need' || search=='need ride'|| search=='want ride'){
        navigate('/NeedRide')
      }
      else if(search=='share' || search=='share ride'|| search=='get ride' || search=='ride'){
        navigate('/ShareRide')
      }
      else if(search=='about' || search=='about us'|| search=='contact' || search=='contact us' || search=='contact info' ||search=='contact form'){
        navigate('/about')
      }
      else if(search=='home' || search=='home page'){
        navigate('/')
      }
    else{
      Store.addNotification({
        title: "Oops!",
        message: "results not found",
        type: "danger",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
    
    return () => clearTimeout(timeout)
  }
}, 2000)
  }
  

};
useEffect(()=>{
  setSearch1(search);
  console.log(search)
 
},[search])

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

  



    return ( 
        <>
        <div className='HomeDiv'>
        <ReactNotifications />
    <Container fluid id='banner' >
    <Navbar.Brand>
          <img width="90px"
            height="90px"
            style={{ float: "left", marginTop: "15px" }}
            className="img-responsive"
            src={NewLogo}
            alt="logo" />
        </Navbar.Brand>
        <MDBCol md="3" style={{ float: "right", marginTop: "20px" }}>
          <MDBInput hint="Search" type="text" containerClass="active-pink active-pink-2 mt-0" 
          onChange={handleChange}
          onKeyDown={handleChange1}
          />
        </MDBCol>
        <div className='lanButton'>
        {engShown && ( 
          <div className='urdu' onClick={()=>{engClick()}}>
        <Button variant='contained' className='urduB' color='success' onClick={changeLanguage("en")}>English</Button>
        </div>
        )}
        {udShown && ( 
        <div className='english' onClick={()=>{udClick()}}>
        <Button variant='contained' sx={{fontSize: 15}} className='englishB' color='success' onClick={changeLanguage("ud")}>اردو</Button>
        </div>
        )}
        <div>
        <MaterialUISwitch
         sx={{ m: 1 }} 
         checked={toggleDark}
         onChange={handleModeChange}
         name="toggleDark"
         color="default" />
        </div>
        </div>
        <div className="center_div">
          <h1 className={learn}> {t('Learn')} </h1>
          <h2 className="learnM">{t('LearnText1')} </h2>
          <h3 className="learnN">{t('LearnText2')} </h3>
          <div className="apButton">
          <Button variant='contained' sx={{fontSize: 20}} color="primary" className="aButton" onClick={() => { window.location.href = url; } }>{t('AppointmentB')}</Button>
          </div>
        </div>
        
        <div className="HM">
       <HomeMenu/>
       </div>
        </Container>
        <div className='homeText'>
          <h1 className="over">{t('overview')}</h1>
          <p>{t('hometext')}</p>
        </div>
         
<Container fluid id='divs'>
  <div id='div1' onClick={() => navigate('/RegularDrivingLicense')}>
    <img id={img} className="img-responsive"src={licence}alt="logo" />
    <h4 id='info1'> {t('Div1')}</h4>
    <h5 id='info1o1'> {t('Div123')} </h5>

     </div>
     <a href="https://dlims.punjab.gov.pk/track/" id='tls' target="_blank">
  <div id='div2'>
    <img id='img2' className="img-responsive"src={verification}alt="logo" />
    <h4 id='info2'> {t('Div2')}</h4>
    <h5 id='info2o1'> {t('Div123')} </h5>
    </div>
    </a>
  <div id='div3' onClick={() => navigate('/testcenters')}>
    <img id='img3' className="img-responsive"src={testcenter}alt="logo" />
    <h4 id='info3'> {t('Div3')}</h4>
    <h5 id='info3o1'> {t('Div123')} </h5>
    </div>

  </Container>
  <div className='homeText1'>

          <p>{t('hometext1')}</p>
        </div>
<Footer/>
</div>
    </>
    );
}
 
export default Home;