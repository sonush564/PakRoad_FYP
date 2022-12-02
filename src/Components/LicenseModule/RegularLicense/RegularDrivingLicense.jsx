import React from 'react';
import Header from '../../Header/Header';
import RegularDrivingLicenseInformation from './RegularDrivingLicenseInformation';
import Footer from '../../Header/Footer';
import { useNavigate } from 'react-router-dom';
const RegularDrivingLicense = ({changeLanguage, toggleDark, settoggleDark}) => {
  const navigate = useNavigate();
    return ( 
        <> 
        <Header changeLanguage={changeLanguage} toggleDark={toggleDark} settoggleDark={settoggleDark}/>
       <RegularDrivingLicenseInformation/>
  
      <Footer/>
      </>


     );
}
 
export default RegularDrivingLicense;