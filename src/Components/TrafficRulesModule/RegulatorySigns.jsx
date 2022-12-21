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
import Info from '../Images/Info.png'
const Sign = ({changeLanguage, toggleDark, settoggleDark}) => {

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
     <h1 id='LP'>Regulatory Signs:</h1>
     <div className='Wtext'>
     Regulatory signs describe a range of sign that are used to indicate or reinforce traffic laws, regulations or requirements which apply either at all times or at specified times or places upon a street or highway, the disregard of which may constitute a violation, or signs in general that regulate public behavior in places open to the public. Regulatory signs include Stop Signs, Yield Signs, Speed Limit Signs, Do Not Enter, Handicapped, One Way Signs and HOV Signs

        </div>
     <Container id='warn' style={{float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}} onClick={()=>allFalse()}>
     <img id='warsign' className="img-responsive" src={noLeft}  alt="logo" /> 
     <div>
     <h6 style={{float:"left", marginLeft:"130px"}}>No Left Turn</h6>
     <div onMouseEnter={()=> setSign({danger:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.danger &&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px", marginBottom:"59px"}} >No Left turn Ahead or Left turn not allowed</p>)}
     </div>   
     </div> 
     </Container>


     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}>
    <img id='warsign' className="img-responsive" src={noRight}  alt="logo" />
    <div >
     <h6 style={{float:"left", marginLeft:"130px"}}>No Right Turn </h6>
     <div onMouseEnter={()=> setSign({leftTurn:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.leftTurn &&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>No right turn Ahead or right turn not allowed</p>)}
     </div>   
     </div> 
    </Container>


     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}><img id='warsign' className="img-responsive" src={noUturn}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"150px"}}>No U Trun</h6>
     <div  onMouseEnter={()=> setSign({towWay:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.towWay&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>No U turn Ahead or U turn not allowed</p>)}
     </div>   
     </div> 
    </Container>
    

     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}><img id='warsign' className="img-responsive" src={HM}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"80px"}}>Hazardous Materials Prohibited Sign</h6>
     <div onMouseEnter={()=> setSign({roadHump:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.roadHump&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>On routes where the transporting of hazardous material is prohibited, the Hazardous Material Prohibition sign may be used.</p>)}
     </div>
     </div>
      </Container>




     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}><img id='warsign' className="img-responsive" src={carTrack}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"80px"}}> No Motor Vehicles On Tracks Sign </h6>
     <div  onMouseEnter={()=> setSign({risk:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.risk&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>The No Motor Vehicles On Tracks (R15-6) sign is used where there are adjacent traffic lanes separated from the LRT lane by a curb or pavement markings.
</p>)}
     </div>
     </div>
     </Container>





     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}><img id='warsign' className="img-responsive" src={noULturn}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"100px", textAlign:'start'}}>No U Turn or Left Turn Sign</h6>
     <div onMouseEnter={()=> setSign({signal:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.signal&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px", }}>At least one should be used at a location specified for No Left Turn signs.</p>)}
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