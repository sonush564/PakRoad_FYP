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
import Info from '../Images/Info.png'
const CumpulsorySign = ({changeLanguage, toggleDark, settoggleDark}) => {

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
     <h1 id='LP'>Compulsary Signs:</h1>
     <div className='Wtext'>
     These signs are obligatory on the traffic which uses a specific area of road. These signs indicate what must one do, rather than must not do. Mandatory Road signs are generally round in shape with red border. Some of them are blue in colour. 'Stop' and 'Give Way' are octagon and triangular, respectively, in shape. Violation of these signs attracts heavy fines and punishments. Importantly, violation of these could lead to major accidents also.

        </div>
     <Container id='warn' style={{float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}} onClick={()=>allFalse()}>
     <img id='warsign' className="img-responsive" src={CArrow}  alt="logo" /> 
     <div>
     <h6 style={{float:"left", marginLeft:"110px"}}>COMPULSORY KEEP LEFT</h6>
     <div onMouseEnter={()=> setSign({danger:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.danger &&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px", marginBottom:"59px"}} >Driver should drive in left lane for smooth traffic flow. This sign is installed mainly on the roads, which do not have divider in between, and two way traffic flows on the same road.</p>)}
     </div>   
     </div> 
     </Container>


     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}>
    <img id='warsign' className="img-responsive" src={CLeft}  alt="logo" />
    <div >
     <h6 style={{float:"left", marginLeft:"110px"}}>COMPULSORY TURN LEFT</h6>
     <div onMouseEnter={()=> setSign({leftTurn:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.leftTurn &&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>One has to turn towards left after seeing this sign. This may have been installed due to diversion.</p>)}
     </div>   
     </div> 
    </Container>


     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}><img id='warsign' className="img-responsive" src={CRight}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"110px"}}>COMPULSORY TURN RIGHT</h6>
     <div  onMouseEnter={()=> setSign({towWay:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.towWay&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>Turn right only, there could be any reason for it but obeying this signal would lead to safety and hassle free drive</p>)}
     </div>   
     </div> 
    </Container>
    

     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"180px"}}><img id='warsign' className="img-responsive" src={CCR}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"80px"}}>COMPULSORY AHEAD OR TURN RIGHT</h6>
     <div onMouseEnter={()=> setSign({roadHump:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.roadHump&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px",width:"300px"}}>This sign directs the traffic to either move straight or take right turn. Turning towards left is prohibited.</p>)}
     </div>
     </div>
      </Container>




     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"180px"}}><img id='warsign' className="img-responsive" src={CCL}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"80px"}}> COMPULSORY AHEAD OR TURN LEFT</h6>
     <div  onMouseEnter={()=> setSign({risk:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.risk&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px", width:"300px"}}>Move straight or take left turn. Turning towards right is prohibited. Violation of these sign may jeopardize your safety and may also lead to penal action.
</p>)}
     </div>
     </div>
     </Container>





     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"180px"}}><img id='warsign' className="img-responsive" src={CCycle}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"100px", textAlign:'start'}}>COMPULSORY CYCLE TRACK</h6>
     <div onMouseEnter={()=> setSign({signal:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.signal&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px",width:"300px" }}>This sign directs that the cyclist should use this lane compulsorily and no other motorized vehicle should enter it. To be a safe cyclist and to avoid fines always follow this sign.</p>)}
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