import React from 'react';
import Header from '../Header/Header';
import { useEffect, useState } from 'react';
import Footer from '../Header/Footer';
import Table from 'react-bootstrap/Table';
import { GoLocation } from 'react-icons/go';
import { MdLocationOn } from 'react-icons/md';
const TestCenter = ({changeLanguage, toggleDark, settoggleDark}) => {

  const [tabel, setTable] = useState('light');
  useEffect(()=>{
    if(toggleDark==true){
      setTable('dark')
    }
    if(toggleDark==false){
      setTable('light')
    }
   
   })
    return ( 
<>
<div className='headerTable'>
<Header  changeLanguage={changeLanguage} toggleDark={toggleDark} settoggleDark={settoggleDark}/>
</div>
<div id='center'>
<Table bordered  variant={tabel}  className='centerTable'>
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
      <td  className='click' onClick={() => { window.location.href ='https://goo.gl/maps/s5vNzAXcEGB13wcm9' } }>Click Here <MdLocationOn/></td>
      
    </tr> 
    <tr>
      <td>Zahid Gondal Shaheed (CTO OFFICE)</td>
      <td>Learner Permit<br/>
      Duplicate License<br/>
      Renewal License<br/>
      International Driving License</td>
      <td>8:00 AM To 06:00 PM</td>
      <td className='click' onClick={() => { window.location.href = 'https://goo.gl/maps/5H3Xr5x6NMM3NzL88' } }>Click Here <MdLocationOn/></td>   
    </tr> 
    <tr>
      <td>Greater Iqbal Park Testing Center</td>
      <td>Learner Permit<br/> 
      Regular Driving License<br/> 
      Duplicate License<br/> 
      Renewal License<br/>
      International Driving License</td>
      <td>8:00 AM To 06:00 PM</td>
    
      <td className='click' onClick={() => { window.location.href = 'https://goo.gl/maps/SyqfRqDE9uz3hHNLA' } }>Click Here <MdLocationOn/></td>
      
    </tr> 
    <tr>
      <td>Ravi Road Booth</td>
      <td>Learner Permit<br/>
      Duplicate License<br/>
      Renewal License<br/>
      International Driving License
      </td>
      <td>8:00 AM To 06:00 PM</td>
      <td className='click' onClick={() => { window.location.href = 'https://goo.gl/maps/L63ejUKxBPXmtEJP9' } }>Click Here <MdLocationOn/></td>
      
    </tr> 
    <tr>
      <td>Railway Station Booth</td>
      <td>Learner Permit<br/>
      Duplicate License<br/>
      Renewal License<br/>
      International Driving License
      </td>
      <td>8:00 AM To 06:00 PM</td>

      <td className='click' onClick={() => { window.location.href = 'https://goo.gl/maps/NzyNGmoPQb55LU1q8' } }>Click Here<MdLocationOn/></td>
    </tr> 
    <tr>
      <td>Town Hall Facilitation Center</td>
      <td>Learner Permit<br/>
      Duplicate License<br/>
      Renewal License<br/>
      International Driving License
      </td>
      <td>8:00 AM To 06:00 PM</td>
    
      <td className='click' onClick={() => { window.location.href = 'https://goo.gl/maps/qaJwL1rM5RPGLdR37' } }>Click Here<MdLocationOn/></td>
      
    </tr> 
    <tr>
      <td>PKM Mayo Hospital Booth</td>
      <td>Learner Permit<br/>
      Duplicate License<br/>
      Renewal License<br/>
      International Driving License
      </td>
      <td>8:00 AM To 06:00 PM</td>
    
      <td className='click' onClick={() => { window.location.href = 'https://goo.gl/maps/1bWvD2doUBDuBEnY8' } }>Click Here<MdLocationOn/></td>
    
    </tr> 
    <tr>
      <td>High Court Facilitation Center</td>
      <td>Learner Permit<br/>
      Duplicate License<br/>
      Renewal License<br/>
      International Driving License
      </td>
      <td>8:00 AM To 06:00 PM</td>
      
      <td className='click' onClick={() => { window.location.href = 'https://goo.gl/maps/Xf5eyEr5WFt2bNNa6' } }>Click Here<MdLocationOn/></td>
      
    </tr> 
    <tr>
      <td>Lahore Chamber of Commerce Booth</td>
      <td>Learner Permit<br/>
      Duplicate License<br/>
      Renewal License<br/>
      International Driving License
      </td>
      <td>8:00 AM To 06:00 PM</td>

      <td className='click' onClick={() => { window.location.href = 'https://goo.gl/maps/nSLfRwU5YgKsjiHU8' } }>Click Here<MdLocationOn/></td>
      
    </tr> 
    <tr>
      <td>Ichhra Booth</td>
      <td>Learner Permit <br/>
      Duplicate License<br/>
      Renewal License<br/>
      International Driving License
      </td>
      <td>8:00 AM To 06:00 PM</td>
      
      <td className='click' onClick={() => { window.location.href = 'https://goo.gl/maps/4YLLPUixezeywdAa8' } }>Click Here<MdLocationOn/></td>
      
    </tr> 
    <tr>
      <td>Samanabad Booth</td>
      <td>Learner Permit<br/>
      Duplicate License<br/>
      Renewal License<br/>
      International Driving License
      </td>
      <td>8:00 AM To 06:00 PM</td>
      <td className='click' onClick={() => { window.location.href = 'https://goo.gl/maps/Gnvuu3Nzn6ZtoUFj8' } }>Click Here<MdLocationOn/></td>
    </tr> 
    <tr>
      <td>Moon Market Facilitation Center</td>
      <td>Learner Permit<br/>
      Duplicate License<br/>
      Renewal License<br/>
      International Driving License
      </td>
      <td>8:00 AM To 06:00 PM</td>
      <td className='click' onClick={() => { window.location.href = 'https://goo.gl/maps/1FAxk3yTatN5Fovw9' } }>Click Here<MdLocationOn/></td>  
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
      
      <td className='click' onClick={() => { window.location.href = 'https://goo.gl/maps/s59qmcNmtzLsYsct9' } }>Click Here<MdLocationOn/></td>
    
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
      
      <td className='click' onClick={() => { window.location.href = 'https://goo.gl/maps/AbLa16mVRs3siMTu8' } }>Click Here<MdLocationOn/></td>
    
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
    
      <td className='click' onClick={() => { window.location.href = 'https://goo.gl/maps/7LZjAyg9vzQAhr7N9' } }>Click Here<MdLocationOn/></td>
    
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
  
      <td className='click' onClick={() => { window.location.href = 'https://goo.gl/maps/njiYYQvf5RfcHi896' } }>Click Here<MdLocationOn/></td>
      
    </tr> 
    <tr>
      <td>Cantt Booth</td>
      <td>Learner Permit<br/>
      Duplicate License<br/>
      Renewal License<br/>
      International Driving License
      </td>
      <td>8:00 AM To 06:00 PM</td>
      
      <td className='click' onClick={() => { window.location.href = 'https://goo.gl/maps/X1ZXpuLvBbB56m9F8' } }>Click Here<MdLocationOn/></td>
    
    </tr> 
    <tr>
      <td>Green Town Booth</td>
      <td>Learner Permit<br/>
      Duplicate License<br/>
      Renewal License<br/>
      International Driving License
      </td>
      <td>8:00 AM To 06:00 PM</td>
    
      <td className='click' onClick={() => { window.location.href = 'https://goo.gl/maps/yM7cLwfhMAne7rFTA' } }>Click Here<MdLocationOn/></td>
      
    </tr> 
    <tr>
      <td>Raiwind Booth Pajiyan Chowk</td>
      <td>Learner Permit<br/>
      Duplicate License<br/>
      Renewal License<br/>
      International Driving License
      </td>
      <td>8:00 AM To 06:00 PM</td>
    
      <td className='click' onClick={() => { window.location.href = 'https://goo.gl/maps/juRmesBdHdKTZyTf6' } }>Click Here<MdLocationOn/></td>
    
    </tr> 
    
  </tbody>
</Table>
</div>
<Footer/>
</>
     );
}
 
export default TestCenter;