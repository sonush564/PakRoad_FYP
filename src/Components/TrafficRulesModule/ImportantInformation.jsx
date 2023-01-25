import React from 'react';
import { useState } from 'react';
import {Container} from 'react-bootstrap';
import Header from '../Header/Header';
import 'react-html5video/dist/styles.css'
import {DefaultPlayer as Video} from 'react-html5video'
import v1 from '../Video/v1.mp4'
import v2 from '../Video/v2.mp4'


const ImportantInformation = ({changeLanguage, toggleDark, settoggleDark}) => {

    
    return ( 
       
<div>
<Header changeLanguage={changeLanguage} toggleDark={toggleDark} settoggleDark={settoggleDark}/>
<div className='v1'> 
<Video autoPlay loop>
<source src={v1} type='video/webm'/>
</Video>
</div>
<div className='v1'> 
<Video autoPlay loop>
<source src={v2} type='video/webm'/>
</Video>
</div>

</div>
    );
}
 
export default ImportantInformation;