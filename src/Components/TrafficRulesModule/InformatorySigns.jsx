import React, { useState } from 'react';
import {Container} from 'react-bootstrap';
import Header from '../Header/Header';
import Footer from '../Header/Footer';
import bed from '../Signs/bed.png';
import bed2 from '../Signs/bed2.png';
import petrol from '../Signs/petrol.png';
import phone from '../Signs/phone.png';
import spoon from '../Signs/spoon.png';
import p1 from '../Signs/p1.png';
import CArrow from '../Signs/CArrow.png';
import Info from '../Images/Info.png'
import { useTranslation, initReactI18next } from "react-i18next";
const InformatorySign = ({changeLanguage, toggleDark, settoggleDark}) => {
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
     <h1 id='LP'> {t('IS')}</h1>
     <div className='Wtext'>
     {t('IS1')}
        </div>
     <Container id='warn' style={{float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}} onClick={()=>allFalse()}>
     <img id='warsign' className="img-responsive" src={bed}  alt="logo" /> 
     <div>
     <h6 style={{float:"left", marginLeft:"150px"}}>{t('i1')}</h6>
     <div onMouseEnter={()=> setSign({danger:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.danger &&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px", marginBottom:"59px"}} >{t('ii1')}</p>)}
     </div>   
     </div> 
     </Container>


     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}>
    <img id='warsign' className="img-responsive" src={spoon}  alt="logo" />
    <div >
     <h6 style={{float:"left", marginLeft:"130px"}}>{t('i2')}</h6>
     <div onMouseEnter={()=> setSign({leftTurn:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.leftTurn &&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>{t('ii2')}</p>)}
     </div>   
     </div> 
    </Container>


     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}><img id='warsign' className="img-responsive" src={phone}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"120px"}}>{t('i3')}</h6>
     <div  onMouseEnter={()=> setSign({towWay:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.towWay&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>{t('ii3')}</p>)}
     </div>   
     </div> 
    </Container>
    

     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"150px"}}><img id='warsign' className="img-responsive" src={petrol}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"130px"}}>{t('i4')}</h6>
     <div onMouseEnter={()=> setSign({roadHump:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.roadHump&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px",width:"300px"}}>{t('ii4')}</p>)}
     </div>
     </div>
      </Container>




     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"150px"}}><img id='warsign' className="img-responsive" src={p1}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"130px"}}>{t('i5')}</h6>
     <div  onMouseEnter={()=> setSign({risk:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.risk&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px", width:"300px"}}>{t('ii5')}
</p>)}
     </div>
     </div>
     </Container>





     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"150px"}}><img id='warsign' className="img-responsive" src={bed2}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"130px", textAlign:'start'}}>{t('i6')}</h6>
     <div onMouseEnter={()=> setSign({signal:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.signal&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px",width:"300px" }}>{t('ii6')}
 
 </p>)}
     </div>
     </div>
     </Container>











    </div>
    <div class="clear"></div>

    <Footer/>

     </>
      
     );
}
 
export default InformatorySign;