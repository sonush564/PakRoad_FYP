import React, { useState } from 'react';
import {Container} from 'react-bootstrap';
import Header from '../Header/Header';
import Footer from '../Header/Footer';
import noLeft from '../Signs/noLeftt.gif';
import noRight from '../Signs/noRightt.jpg';
import noUturn from '../Signs/noUturn.gif';
import noULturn from '../Signs/noULturn.jpg';
import carTrack from '../Signs/carTrack.jpg';
import HM from '../Signs/HM.jpg';
import { useTranslation, initReactI18next } from "react-i18next";
import Info from '../Images/Info.png'
const Sign = ({changeLanguage, toggleDark, settoggleDark}) => {
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
     <h1 id='LP'>{t('RS')}</h1>
     <div className='Wtext'>
     {t('RS1')}
        </div>
     <Container id='warn' style={{float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}} onClick={()=>allFalse()}>
     <img id='warsign' className="img-responsive" src={noLeft}  alt="logo" /> 
     <div>
     <h6 style={{float:"left", marginLeft:"130px"}}>{t('r1')}</h6>
     <div onMouseEnter={()=> setSign({danger:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.danger &&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px", marginBottom:"59px"}} >{t('rr1')}</p>)}
     </div>   
     </div> 
     </Container>


     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}>
    <img id='warsign' className="img-responsive" src={noRight}  alt="logo" />
    <div >
     <h6 style={{float:"left", marginLeft:"130px"}}>{t('r2')}</h6>
     <div onMouseEnter={()=> setSign({leftTurn:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.leftTurn &&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>{t('rr2')}</p>)}
     </div>   
     </div> 
    </Container>


     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}><img id='warsign' className="img-responsive" src={noUturn}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"150px"}}>{t('r3')}</h6>
     <div  onMouseEnter={()=> setSign({towWay:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.towWay&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>{t('rr3')}</p>)}
     </div>   
     </div> 
    </Container>
    

     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}><img id='warsign' className="img-responsive" src={HM}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"80px"}}>{t('r4')}</h6>
     <div onMouseEnter={()=> setSign({roadHump:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.roadHump&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px",  width:"300px"}}>{t('rr4')}</p>)}
     </div>
     </div>
      </Container>




     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}><img id='warsign' className="img-responsive" src={carTrack}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"80px"}}>{t('r5')}</h6>
     <div  onMouseEnter={()=> setSign({risk:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.risk&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px",  width:"300px"}}>{t('rr5')}
</p>)}
     </div>
     </div>
     </Container>





     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}><img id='warsign' className="img-responsive" src={noULturn}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"100px", textAlign:'start'}}>{t('r6')}</h6>
     <div onMouseEnter={()=> setSign({signal:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.signal&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px", width:"300px" }}>{t('rr6')}</p>)}
     </div>
     </div>
     </Container>











    </div>
    <div class="clear"></div>

    <Footer/>

     </>
      
     );
}
 
export default Sign;