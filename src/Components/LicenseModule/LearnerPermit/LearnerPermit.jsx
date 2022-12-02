import React from 'react';
import Header from '../../Header/Header';
import LearnerPermitInformation from './LearnerPermitInformation';
import Footer from '../../Header/Footer';
const LearnerPermit = ({changeLanguage, toggleDark, settoggleDark}) => {
    return ( 
     <> 
     <Header changeLanguage={changeLanguage} toggleDark={toggleDark} settoggleDark={settoggleDark}/>
<LearnerPermitInformation/> 
      <Footer/>
      </>
  
  
     );
     
}
 
export default LearnerPermit;