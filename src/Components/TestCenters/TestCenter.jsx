import React from 'react';
import Header from '../Header/Header';
import Footer from '../Header/Footer';
import Table from 'react-bootstrap/Table';
import { GoLocation } from 'react-icons/go';
import { MdLocationOn } from 'react-icons/md';
const TestCenter = ({changeLanguage, toggleDark, settoggleDark}) => {
    return ( 
<>
<div className='headerTable'>
<Header  changeLanguage={changeLanguage} toggleDark={toggleDark} settoggleDark={settoggleDark}/>
</div>
<div id='center'>
<Table bordered   className='centerTable'>
    <thead>
        <tr>
            <th colSpan={4} style={{fontSize:"30px"}}>
            Traffic License Centers
            </th>   
        </tr>       
  </thead>
  <thead>
  <tr>
      <th width="25%" style={{fontSize:"20px"}}>Name</th>
      <th style={{fontSize:"20px"}}>Service</th>
      <th style={{fontSize:"20px"}} >Timing</th>
      <th  style={{fontSize:"20px"}}>Location <GoLocation/></th>
    </tr>  
  </thead>

  <tbody >
    <tr>
      <td>CTPL Smart Licensing Center Manawan Traffic Police Lahore</td>
      <td>Learner Permit<br/> 
      Regular Driving License<br/> 
      Duplicate License<br/> 
      Renewal License<br/>
      International Driving License</td>
      <td>24/7</td>
      <a href="https://goo.gl/maps/s5vNzAXcEGB13wcm9" id='tls' target="_blank" >
      <td >Click Here <MdLocationOn/></td>
      </a>
    </tr> 
    <tr>
      <td>Zahid Gondal Shaheed (CTO OFFICE)</td>
      <td>Learner Permit<br/>
      Duplicate License<br/>
      Renewal License<br/>
      International Driving License</td>
      <td>8:00 AM To 06:00 PM</td>
      <a href="https://goo.gl/maps/5H3Xr5x6NMM3NzL88" id='tls' target="_blank" >
      <td>Click Here <MdLocationOn/></td>
      </a>
    </tr> 
    <tr>
      <td>Greater Iqbal Park Testing Center</td>
      <td>Learner Permit<br/> 
      Regular Driving License<br/> 
      Duplicate License<br/> 
      Renewal License<br/>
      International Driving License</td>
      <td>8:00 AM To 06:00 PM</td>
      <a href="https://goo.gl/maps/SyqfRqDE9uz3hHNLA" id='tls' target="_blank" >
      <td>Click Here <MdLocationOn/></td>
      </a>
    </tr> 
    <tr>
      <td>Ravi Road Booth</td>
      <td>Learner Permit<br/>
      Duplicate License<br/>
      Renewal License<br/>
      International Driving License
      </td>
      <td>8:00 AM To 06:00 PM</td>
      <a href="https://goo.gl/maps/L63ejUKxBPXmtEJP9" id='tls' target="_blank" >
      <td>Click Here <MdLocationOn/></td>
      </a>
    </tr> 
    <tr>
      <td>Railway Station Booth</td>
      <td>Learner Permit<br/>
      Duplicate License<br/>
      Renewal License<br/>
      International Driving License
      </td>
      <td>8:00 AM To 06:00 PM</td>
      <a href="https://goo.gl/maps/NzyNGmoPQb55LU1q8" id='tls' target="_blank" >
      <td>Click Here<MdLocationOn/></td>
      </a>
    </tr> 
    <tr>
      <td>Town Hall Facilitation Center</td>
      <td>Learner Permit<br/>
      Duplicate License<br/>
      Renewal License<br/>
      International Driving License
      </td>
      <td>8:00 AM To 06:00 PM</td>
      <a href="https://goo.gl/maps/qaJwL1rM5RPGLdR37" id='tls' target="_blank" >
      <td>Click Here<MdLocationOn/></td>
      </a>
    </tr> 
    <tr>
      <td>PKM Mayo Hospital Booth</td>
      <td>Learner Permit<br/>
      Duplicate License<br/>
      Renewal License<br/>
      International Driving License
      </td>
      <td>8:00 AM To 06:00 PM</td>
      <a href="https://goo.gl/maps/1bWvD2doUBDuBEnY8" id='tls' target="_blank" >
      <td>Click Here<MdLocationOn/></td>
      </a>
    </tr> 
    <tr>
      <td>High Court Facilitation Center</td>
      <td>Learner Permit<br/>
      Duplicate License<br/>
      Renewal License<br/>
      International Driving License
      </td>
      <td>8:00 AM To 06:00 PM</td>
      <a href="https://goo.gl/maps/Xf5eyEr5WFt2bNNa6" id='tls' target="_blank" >
      <td>Click Here<MdLocationOn/></td>
      </a>
    </tr> 
    <tr>
      <td>Lahore Chamber of Commerce Booth</td>
      <td>Learner Permit<br/>
      Duplicate License<br/>
      Renewal License<br/>
      International Driving License
      </td>
      <td>8:00 AM To 06:00 PM</td>
      <a href="https://goo.gl/maps/nSLfRwU5YgKsjiHU8" id='tls' target="_blank" >
      <td>Click Here<MdLocationOn/></td>
      </a>
    </tr> 
    <tr>
      <td>Ichhra Booth</td>
      <td>Learner Permit <br/>
      Duplicate License<br/>
      Renewal License<br/>
      International Driving License
      </td>
      <td>8:00 AM To 06:00 PM</td>
      <a href="https://goo.gl/maps/4YLLPUixezeywdAa8" id='tls' target="_blank" >
      <td>Click Here<MdLocationOn/></td>
      </a>
    </tr> 
    <tr>
      <td>Samanabad Booth</td>
      <td>Learner Permit<br/>
      Duplicate License<br/>
      Renewal License<br/>
      International Driving License
      </td>
      <td>8:00 AM To 06:00 PM</td>
      <a href="https://goo.gl/maps/Gnvuu3Nzn6ZtoUFj8" id='tls' target="_blank" >
      <td>Click Here<MdLocationOn/></td>
      </a>
    </tr> 
    <tr>
      <td>Moon Market Facilitation Center</td>
      <td>Learner Permit<br/>
      Duplicate License<br/>
      Renewal License<br/>
      International Driving License
      </td>
      <td>8:00 AM To 06:00 PM</td>
      <a href="https://goo.gl/maps/1FAxk3yTatN5Fovw9" id='tls' target="_blank" >
      <td>Click Here<MdLocationOn/></td>
      </a>
    </tr> 
    <tr>
      <td>Women Testing Center Liberty</td>
      <td>Learner Permit<br/>
      Regular Driving License<br/>
      Duplicate License<br/>
      Renewal License<br/>
      International Driving License
      </td>
      <td>8:00 AM To 06:00 PM</td>
      <a href="https://goo.gl/maps/s59qmcNmtzLsYsct9" id='tls' target="_blank" >
      <td>Click Here<MdLocationOn/></td>
      </a>
    </tr> 
    <tr>
      <td>Arfa Karim Testing Center</td>
      <td>Learner Permit<br/>
      Regular Driving License<br/>
      Duplicate License<br/>
      Renewal License<br/>
      International Driving License
      </td>
      <td>8:00 AM To 06:00 PM</td>
      <a href="https://goo.gl/maps/AbLa16mVRs3siMTu8" id='tls' target="_blank" >
      <td>Click Here<MdLocationOn/></td>
      </a>
    </tr> 
    <tr>
      <td>DHA Testing Center</td>
      <td>Learner Permit<br/>
      Regular Driving License<br/>
      Duplicate License<br/>
      Renewal License<br/>
      International Driving License
      </td>
      <td>8:00 AM To 06:00 PM</td>
      <a href="https://goo.gl/maps/7LZjAyg9vzQAhr7N9" id='tls' target="_blank" >
      <td>Click Here<MdLocationOn/></td>
      </a>
    </tr> 
    <tr>
      <td>Bahria Town Testing Center</td>
      <td>Learner Permit<br/>
      Regular Driving License<br/>
      Duplicate License<br/>
      Renewal License<br/>
      International Driving License
      </td>
      <td>8:00 AM To 06:00 PM</td>
      <a href="https://goo.gl/maps/njiYYQvf5RfcHi896" id='tls' target="_blank" >
      <td>Click Here<MdLocationOn/></td>
      </a>
    </tr> 
    <tr>
      <td>Cantt Booth</td>
      <td>Learner Permit<br/>
      Duplicate License<br/>
      Renewal License<br/>
      International Driving License
      </td>
      <td>8:00 AM To 06:00 PM</td>
      <a href="https://goo.gl/maps/X1ZXpuLvBbB56m9F8" id='tls' target="_blank" >
      <td>Click Here<MdLocationOn/></td>
      </a>
    </tr> 
    <tr>
      <td>Green Town Booth</td>
      <td>Learner Permit<br/>
      Duplicate License<br/>
      Renewal License<br/>
      International Driving License
      </td>
      <td>8:00 AM To 06:00 PM</td>
      <a href="https://goo.gl/maps/yM7cLwfhMAne7rFTA" id='tls' target="_blank" >
      <td>Click Here<MdLocationOn/></td>
      </a>
    </tr> 
    <tr>
      <td>Raiwind Booth Pajiyan Chowk</td>
      <td>Learner Permit<br/>
      Duplicate License<br/>
      Renewal License<br/>
      International Driving License
      </td>
      <td>8:00 AM To 06:00 PM</td>
      <a href="https://goo.gl/maps/juRmesBdHdKTZyTf6" id='tls' target="_blank" >
      <td>Click Here<MdLocationOn/></td>
      </a>
    </tr> 
    
  </tbody>
</Table>
</div>
<Footer/>
</>
     );
}
 
export default TestCenter;