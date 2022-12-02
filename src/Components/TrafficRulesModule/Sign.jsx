import React, { useState } from 'react';
import {Container} from 'react-bootstrap';
import Header from '../Header/Header';
import Footer from '../Header/Footer';
import Danger from '../Signs/Danger.jpg';
import Falling from '../Signs/Falling.jpg';
import Hump from '../Signs/Hump.jpg';
import LeftRight from '../Signs/LeftRight.jpg';
import Signal from '../Signs/Signal.jpg';
import TwoWay from '../Signs/TwoWay.jpg';
import Info from '../Images/Info.png'

const Sign = ({changeLanguage, toggleDark, settoggleDark}) => {

    const [sign, setSign] = useState({
      danger: false,
      leftTurn: false,
      towWay: false,
      roadHump: false,
      risk: false,
      signal: false,

      });
      const allFalse=()=>{
     setSign({
      danger: false,
      leftTurn: false,
      towWay: false,
      roadHump: false,
      risk: false,
      signal: false,
      })
      }
    return ( 
        <>
        <Header changeLanguage={changeLanguage} toggleDark={toggleDark} settoggleDark={settoggleDark}/>
      <div onClick={()=> allFalse()} >
      <h1 id='LP'> Signs</h1>
     <h3 id='WS'>Warning Signs:</h3>
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
     {sign.roadHump&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>Traffic coming from opposite direction too <br/>Be Alert</p>)}
     </div>
     </div>
      </Container>




     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}><img id='warsign' className="img-responsive" src={Falling}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"130px"}}>Risk of Falling </h6>
     <div  onMouseEnter={()=> setSign({risk:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.risk&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>Traffic coming from opposite direction too <br/>Be Alert</p>)}
     </div>
     </div>
     </Container>





     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}><img id='warsign' className="img-responsive" src={Signal}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"130px"}}>Traffic signal </h6>
     <div onMouseEnter={()=> setSign({signal:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.signal&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>Traffic coming from opposite direction too <br/>Be Alert</p>)}
     </div>
     </div>
     </Container>


     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}><img id='warsign' className="img-responsive" src={Signal}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"130px"}}>Traffic signal </h6>
     <div  onMouseEnter={()=> setSign({signal:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.signal&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>Traffic coming from opposite direction too <br/>Be Alert</p>)}
     </div>
     </div>
     </Container>


     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}><img id='warsign' className="img-responsive" src={Signal}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"130px"}}>Traffic signal </h6>
     <div onMouseEnter={()=> setSign({signal:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.signal&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>Traffic coming from opposite direction too <br/>Be Alert</p>)}
     </div>
     </div>
     </Container>



     <Container id='warn' style={{ float:"left", width:"30%", height:"150px",marginLeft:"30px", marginTop:"30px"}}><img id='warsign' className="img-responsive" src={Signal}  alt="logo" />
     <div>
     <h6 style={{float:"left", marginLeft:"130px"}}>Traffic signal </h6>
     <div  onMouseEnter={()=> setSign({signal:true})}>
     <img id='infosign' className="img-responsive" src={Info}  alt="logo" style={{float:"left", marginTop:"3px", marginLeft:"3px"}} />
     {sign.signal&&(<p style={{border:"solid 2px",float:"right", marginLeft:"260px"}}>Traffic coming from opposite direction too <br/>Be Alert</p>)}
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