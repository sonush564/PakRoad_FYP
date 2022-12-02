import React from 'react';
import {Button, Container} from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import garri from '../../Images/garri.png';


const PracticalInformation = () => {
  return ( 
    <>
    <h1 id='LP'> Practical Test</h1>
    <Container id="infocontainer" fluid style={{ width:"100%"}}>
       <Container fluid id='gameinfo' style={{width:"65%"}}>
       
        <div id='game' >
        <img id='carimg' className="img-responsive"src={garri}alt="logo" />
     <a href="https://usamamalik9.itch.io/newdrivingtest?secret=w2elCactrpZHpWqbDivXcunDQBQ" id='tls' target="_blank">
      <Button  variant='default' id='gamebtn' > Play Now</Button>
      </a>
  </div>

    
    
       </Container>
       <Container id='infoR'style={{width:"35%"}}>
        <h1 id='ins'>Instructions</h1>
        <p id='insinfo' >
 You will have a game with different modes available for practicing Road Test, Parking etc. For Road Test you will be given 80 seconds (in game) to pass the test.
 You can also practice different modes in order to implement it in real life.
</p>
       </Container>
    </Container>
    </>
   );
}
 
export default PracticalInformation;
