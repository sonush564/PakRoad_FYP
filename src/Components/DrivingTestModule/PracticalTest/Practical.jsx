import React from 'react';
import PracticalInformation from './PracticalInformation';
import Header from '../../Header/Header';
import Footer from '../../Header/Footer';
const Practical = ({changeLanguage, toggleDark, settoggleDark}) => {
    return ( 
     <> 
     <Header changeLanguage={changeLanguage} toggleDark={toggleDark} settoggleDark={settoggleDark} />
<PracticalInformation/>
       
      <Footer/>
      </>
  
  
     );
     
}
 
export default Practical;