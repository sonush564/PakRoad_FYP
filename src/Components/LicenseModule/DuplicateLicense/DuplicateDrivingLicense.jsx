import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Header/Footer';
import DuplicateDrivingLicenseInformation from './DuplicateDrivingLicenseInformation';
const DuplicateDrivingLicense = ({changeLanguage, toggleDark, settoggleDark}) => {
    return ( 
        <> 
<Header changeLanguage={changeLanguage} toggleDark={toggleDark} settoggleDark={settoggleDark}/>
<DuplicateDrivingLicenseInformation/>        
    
      <Footer/>
      </>


     );
}
 
export default DuplicateDrivingLicense;