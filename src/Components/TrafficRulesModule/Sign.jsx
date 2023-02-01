import React, { useState } from 'react';
import {Container} from 'react-bootstrap';
import Header from '../Header/Header';
import Footer from '../Header/Footer';
import Danger from '../Signs/Danger.png';
import Falling from '../Signs/Falling.png';
import Hump from '../Signs/Hump.png';
import LeftRight from '../Signs/LeftRight.png';
import Signal from '../Signs/Signal.png';
import TwoWay from '../Signs/TwoWay.png';
import animals from '../Signs/animals.png';
import Stop from '../Signs/Stop.png';
import NoParking from '../Signs/NoParking.png';
import Info from '../Images/Info.png'
import { useTranslation, initReactI18next } from "react-i18next";
const RegulatorySign = ({changeLanguage, toggleDark, settoggleDark}) => {
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
     <h1 id='LP'>{t('WS')}</h1>
     <div className='Wtext'>
     {t('WS1')}

        </div>
     <Container id='warn' style={{float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}} onClick={()=>allFalse()}>
     <img id='warsign' className="img-responsive" src={Danger}  alt="logo" /> 
     <div>
     <h6 style={{float:"left", marginLeft:"130px"}}>{t('w1')}</h6>
     <div onMouseEnter={()=> setSign({danger:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.danger &&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px", marginBottom:"59px"}} >{t('ww1')}</p>)}
     </div>   
     </div> 
     </Container>


     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}>
    <img id='warsign' className="img-responsive" src={LeftRight}  alt="logo" />
    <div >
     <h6 style={{float:"left", marginLeft:"110px"}}>{t('w2')}</h6>
     <div onMouseEnter={()=> setSign({leftTurn:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.leftTurn &&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>{t('ww2')}</p>)}
     </div>   
     </div> 
    </Container>


     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}><img id='warsign' className="img-responsive" src={TwoWay}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"130px"}}>{t('w3')}</h6>
     <div  onMouseEnter={()=> setSign({towWay:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.towWay&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>{t('ww3')}</p>)}
     </div>   
     </div> 
    </Container>
    

     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}><img id='warsign' className="img-responsive" src={Hump}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"130px"}}>{t('w4')}</h6>
     <div onMouseEnter={()=> setSign({roadHump:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.roadHump&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>{t('ww4')}</p>)}
     </div>
     </div>
      </Container>




     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}><img id='warsign' className="img-responsive" src={Falling}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"130px"}}>{t('w5')}</h6>
     <div  onMouseEnter={()=> setSign({risk:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.risk&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>{t('ww5')}</p>)}
     </div>
     </div>
     </Container>





     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}><img id='warsign' className="img-responsive" src={Signal}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"130px"}}>{t('w6')}</h6>
     <div onMouseEnter={()=> setSign({signal:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.signal&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>{t('ww6')}</p>)}
     </div>
     </div>
     </Container>


     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}><img id='warsign' className="img-responsive" src={animals}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"130px"}}>{t('w7')}</h6>
     <div  onMouseEnter={()=> setSign({animal:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.animal&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>{t('ww7')}</p>)}
     </div>
     </div>
     </Container>


     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}><img id='warsign' className="img-responsive" src={Stop}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"130px"}}>{t('w8')}</h6>
     <div onMouseEnter={()=> setSign({worker:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.worker&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>{t('ww8')}</p>)}
     </div>
     </div>
     </Container>



     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}><img id='warsign' className="img-responsive" src={NoParking}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"130px"}}>{t('w9')} </h6>
     <div  onMouseEnter={()=> setSign({uneven:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.uneven&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>{t('ww9')}</p>)}
     </div>
     </div>
     </Container>









    </div>
    <div class="clear"></div>

    <Footer/>

     </>
      
     );
}
 
export default RegulatorySign;