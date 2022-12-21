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
const InformatorySign = ({changeLanguage, toggleDark, settoggleDark}) => {

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
     <h1 id='LP'>Informatory Signs:</h1>
     <div className='Wtext'>
     These signs are meant to provide information on direction, destination, roadside facilities, etc. to the road user. Following informative road signs helps a driver in saving time, reaching destination without wandering around. These signs are generally facilitators to the driver. These signs are normally blue in colour.

        </div>
     <Container id='warn' style={{float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}} onClick={()=>allFalse()}>
     <img id='warsign' className="img-responsive" src={bed}  alt="logo" /> 
     <div>
     <h6 style={{float:"left", marginLeft:"150px"}}>HOSPITAL</h6>
     <div onMouseEnter={()=> setSign({danger:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.danger &&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px", marginBottom:"59px"}} >This sign indicates that there is Hospital nearby. The drivers should be careful while driving through this stretch and should not honk unnecessarily.</p>)}
     </div>   
     </div> 
     </Container>


     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}>
    <img id='warsign' className="img-responsive" src={spoon}  alt="logo" />
    <div >
     <h6 style={{float:"left", marginLeft:"130px"}}>EATING PLACE</h6>
     <div onMouseEnter={()=> setSign({leftTurn:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.leftTurn &&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>This sign indicates that there is an eating-place in the vicinity. This sign is common on highways and long stretches of road.</p>)}
     </div>   
     </div> 
    </Container>


     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}><img id='warsign' className="img-responsive" src={phone}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"120px"}}>PUBLIC TELEPHONE</h6>
     <div  onMouseEnter={()=> setSign({towWay:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.towWay&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>This sign indicates the availability of Telephone near road.</p>)}
     </div>   
     </div> 
    </Container>
    

     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"150px"}}><img id='warsign' className="img-responsive" src={petrol}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"130px"}}>PETROL PUMP</h6>
     <div onMouseEnter={()=> setSign({roadHump:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.roadHump&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px",width:"300px"}}>This informatory sign indicates that there is a Petrol Pump ahead. Sometimes distance is also indicated on this sign which gives an idea that how far is the Petrol pump from the sign post.</p>)}
     </div>
     </div>
      </Container>




     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"150px"}}><img id='warsign' className="img-responsive" src={p1}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"130px"}}> PARK THIS SIDE</h6>
     <div  onMouseEnter={()=> setSign({risk:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.risk&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px", width:"300px"}}>This sign is erected at destination telling exactly where to park your vehicles. This also indicates the type of vehicles to be parked.
</p>)}
     </div>
     </div>
     </Container>





     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"150px"}}><img id='warsign' className="img-responsive" src={bed2}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"130px", textAlign:'start'}}>RESTING PLACE</h6>
     <div onMouseEnter={()=> setSign({signal:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.signal&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px",width:"300px" }}>This sign is erected near motel, lodge or any other facility for resting on the road. These signs can be seen on highways.
 
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