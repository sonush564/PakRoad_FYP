import React from 'react';
import Header from '../../Header/Header';
import InternationDrivingLicenseInformation from './InternationDrivingLicenseInformation';
import Footer from '../../Header/Footer';
const InternationDrivingLicense = ({changeLanguage, toggleDark, settoggleDark}) => {
    return ( 
        <> 
        <Header changeLanguage={changeLanguage} toggleDark={toggleDark} settoggleDark={settoggleDark}/>
<InternationDrivingLicenseInformation/>        
    
      <Footer/>
      </>


     );
}
 
export default InternationDrivingLicense;