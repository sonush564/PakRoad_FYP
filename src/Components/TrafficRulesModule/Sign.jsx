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
     <h6 style={{float:"left", marginLeft:"130px"}}>Danger Ahead </h6>
     <div onMouseEnter={()=> setSign({danger:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.danger &&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px", marginBottom:"59px"}} >Might be a Danger Ahead <br/> Reduce Speed and Stay focused</p>)}
     </div>   
     </div> 
     </Container>


     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}>
    <img id='warsign' className="img-responsive" src={LeftRight}  alt="logo" />
    <div >
     <h6 style={{float:"left", marginLeft:"110px"}}>Left Turn Right Turn</h6>
     <div onMouseEnter={()=> setSign({leftTurn:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.leftTurn &&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>First Turn Right <br/> and then <br/> Turn Right</p>)}
     </div>   
     </div> 
    </Container>


     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}><img id='warsign' className="img-responsive" src={TwoWay}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"130px"}}>Two Way Traffic</h6>
     <div  onMouseEnter={()=> setSign({towWay:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.towWay&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>Traffic coming from opposite direction too <br/>Be Alert</p>)}
     </div>   
     </div> 
    </Container>
    

     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}><img id='warsign' className="img-responsive" src={Hump}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"130px"}}>Road Hump </h6>
     <div onMouseEnter={()=> setSign({roadHump:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.roadHump&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>Reduce Your speed there is a Hump ahead and Be Alert</p>)}
     </div>
     </div>
      </Container>




     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}><img id='warsign' className="img-responsive" src={Falling}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"130px"}}>Risk of Falling </h6>
     <div  onMouseEnter={()=> setSign({risk:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.risk&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>Risk of falling rocks/land sliding or anything from above so Be Alert</p>)}
     </div>
     </div>
     </Container>





     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}><img id='warsign' className="img-responsive" src={Signal}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"130px"}}>Traffic signal </h6>
     <div onMouseEnter={()=> setSign({signal:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.signal&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>slow down and be prepared to stop if necessary a special situation or hazard is ahead.</p>)}
     </div>
     </div>
     </Container>


     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}><img id='warsign' className="img-responsive" src={animals}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"130px"}}> Animals Ahead </h6>
     <div  onMouseEnter={()=> setSign({animal:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.animal&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>WILD ANIMALS LIKELY TO BE IN ROAD AHEAD <br/>Be Alert</p>)}
     </div>
     </div>
     </Container>


     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}><img id='warsign' className="img-responsive" src={Stop}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"130px"}}>Road Works Ahead</h6>
     <div onMouseEnter={()=> setSign({worker:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.worker&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>Road Works or temporary obstruction of the carriageway ahead</p>)}
     </div>
     </div>
     </Container>



     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}><img id='warsign' className="img-responsive" src={NoParking}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"130px"}}>Uneven Road </h6>
     <div  onMouseEnter={()=> setSign({uneven:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.uneven&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>UNEVEN ROAD AHEAD <br/>Be Alert</p>)}
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