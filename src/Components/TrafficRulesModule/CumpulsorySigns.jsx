import React, { useState } from 'react';
import {Container} from 'react-bootstrap';
import Header from '../Header/Header';
import Footer from '../Header/Footer';
import CCL from '../Signs/CCL.png';
import CCR from '../Signs/CCR.png';
import CCycle from '../Signs/CCycle.png';
import CLeft from '../Signs/CLeft.png';
import CRight from '../Signs/CRight.png';
import CStraight from '../Signs/CStraight.png';
import CArrow from '../Signs/CArrow.png';
import { useTranslation, initReactI18next } from "react-i18next";
import Info from '../Images/Info.png'
const CumpulsorySign = ({changeLanguage, toggleDark, settoggleDark}) => {
  const {t, il8n}= useTranslation();
    const [sign, setSign] = useState({
      danger: false,
      leftTurn: false,
      towWay: false,
      roadHump: false,
      risk: false,
      signal: false,
      animal: false,
      worker:false,
      uneven:false

      });
      const allFalse=()=>{
     setSign({
      danger: false,
      leftTurn: false,
      towWay: false,
      roadHump: false,
      risk: false,
      signal: false,
      animal: false,
      worker:false,
      uneven:false
      })
      }
    return ( 
        <>
        <Header changeLanguage={changeLanguage} toggleDark={toggleDark} settoggleDark={settoggleDark}/>
        
      <div onClick={()=> allFalse()} >
     <h1 id='LP'>{t('CS')}</h1>
     <div className='Wtext'>
     {t('RS1')}
        </div>
     <Container id='warn' style={{float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}} onClick={()=>allFalse()}>
     <img id='warsign' className="img-responsive" src={CArrow}  alt="logo" /> 
     <div>
     <h6 style={{float:"left", marginLeft:"110px"}}>{t('c1')}</h6>
     <div onMouseEnter={()=> setSign({danger:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.danger &&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px", marginBottom:"59px"}} >{t('cc1')}</p>)}
     </div>   
     </div> 
     </Container>


     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}>
    <img id='warsign' className="img-responsive" src={CLeft}  alt="logo" />
    <div >
     <h6 style={{float:"left", marginLeft:"110px"}}>{t('c2')}</h6>
     <div onMouseEnter={()=> setSign({leftTurn:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.leftTurn &&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>{t('cc2')}</p>)}
     </div>   
     </div> 
    </Container>


     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}><img id='warsign' className="img-responsive" src={CRight}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"110px"}}>{t('c3')}</h6>
     <div  onMouseEnter={()=> setSign({towWay:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.towWay&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>{t('cc3')}</p>)}
     </div>   
     </div> 
    </Container>
    

     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"180px"}}><img id='warsign' className="img-responsive" src={CCR}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"80px"}}>{t('c4')}</h6>
     <div onMouseEnter={()=> setSign({roadHump:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.roadHump&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px",width:"300px"}}>{t('cc4')}</p>)}
     </div>
     </div>
      </Container>




     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"180px"}}><img id='warsign' className="img-responsive" src={CCL}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"80px"}}>{t('c5')}</h6>
     <div  onMouseEnter={()=> setSign({risk:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.risk&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px", width:"300px"}}>{t('cc5')}
</p>)}
     </div>
     </div>
     </Container>





     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"180px"}}><img id='warsign' className="img-responsive" src={CCycle}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"100px", textAlign:'start'}}>{t('c6')}</h6>
     <div onMouseEnter={()=> setSign({signal:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.signal&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px",width:"300px" }}>{t('cc6')}</p>)}
     </div>
     </div>
     </Container>











    </div>
    <div class="clear"></div>

    <Footer/>

     </>
      
     );
}
 
export default CumpulsorySign;