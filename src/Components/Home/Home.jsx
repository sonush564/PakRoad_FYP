import React, { useState } from "react";
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



const Home = ({changeLanguage, toggleDark, settoggleDark} ) => {
  const [udShown, setUdShown] = useState(true);
const [engShown, setEngShown] = useState(false);
  const {t, il8n}= useTranslation();
  const navigate = useNavigate();
 const engClick=()=>{

 setEngShown(false);
 setUdShown(true)
 }
 const udClick=()=>{
 setEngShown(true);
 setUdShown(false)

 }
 const handleModeChange = () => {
  settoggleDark(!toggleDark);
};
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
          <MDBInput hint="Search" type="text" containerClass="active-pink active-pink-2 mt-0" />
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
          <h1 className="learn"> {t('Learn')} </h1>
          <h2 className="learnM">{t('LearnText1')} </h2>
          <h3 className="learnN">{t('LearnText2')} </h3>
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
  <div id='div1'>
    <img id='img1' className="img-responsive"src={licence}alt="logo" />
    <h4 id='info1'> License Information</h4>
    <h6 id='info1o1'> Read More </h6>

     </div>
     <a href="https://dlims.punjab.gov.pk/track/" id='tls' target="_blank">
  <div id='div2'>
    <img id='img2' className="img-responsive"src={verification}alt="logo" />
    <h4 id='info2'> License Verfication</h4>
    <h6 id='info2o1'> Read More </h6>
    </div>
    </a>
  <div id='div3'>
    <img id='img3' className="img-responsive"src={testcenter}alt="logo" />
    <h4 id='info3'> Test Centers</h4>
    <h6 id='info3o1'> Read More </h6>
    </div>

  </Container>
<Footer/>
</div>
    </>
    );
}
 
export default Home;