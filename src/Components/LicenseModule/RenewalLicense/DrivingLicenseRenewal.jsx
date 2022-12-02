import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Header/Footer';
import DrivingLicenseRenewalInformation from './DrivingLicenseRenewalInformation';
const DrivingLicenseRenewal = ({changeLanguage, toggleDark, settoggleDark}) => {
    return ( 
        <> 
        <Header changeLanguage={changeLanguage} toggleDark={toggleDark} settoggleDark={settoggleDark}/>
<DrivingLicenseRenewalInformation/>        
      
      <Footer/>
      </>


     );
}
 
export default DrivingLicenseRenewal;