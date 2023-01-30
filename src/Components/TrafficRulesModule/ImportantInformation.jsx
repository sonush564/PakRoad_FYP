import React from 'react';
import { useState } from 'react';
import {Container} from 'react-bootstrap';
import Header from '../Header/Header';
import 'react-html5video/dist/styles.css'
import { Player } from 'video-react';
import {DefaultPlayer as Video} from 'react-html5video'
import v1 from '../Video/v1.mp4'
import v2 from '../Video/v2.mp4'


const ImportantInformation = ({changeLanguage, toggleDark, settoggleDark}) => {

    
    return ( 
       
<div>
<Header changeLanguage={changeLanguage} toggleDark={toggleDark} settoggleDark={settoggleDark}/>
<div>
    <h1 id='LP'>Important Information</h1>
    <p className='infotext'>People occasionally have concentration lapses and misjudge their manoeuvres. Rather than punishing them, we should drive to allow for them. There's no point in causing an accident when it's avoidable as you could end up injuring yourself or someone else. So, the most important rule of using the road is to drive to avoid accidents or harm to other road users. 
You can do this by anticipating other drivers' actions, leaving a safety bubble and driving within the law. If a pedestrian steps out in front of you, even if they have a red no-crossing line, you must slow down for them. If another vehicle starts moving into your lane because they haven't seen you, it's your responsibility to change your lane position safely, if possible, to avoid an accident.Here are some animations that teachs how to deal with these situations that help us to avoid these type of accidents</p>
</div>
<div>
    <div className='anitext1'>
        <h2 className='aniH'>Signals Information</h2>
        <p>A traffic signal, or stoplight as it is also known, controls vehicle traffic passing through the intersection of two or more roadways by giving a visual indication to drivers when to proceed, when to slow, and when to stop. In some cases, traffic signals also indicate to drivers when they may make a turn. These signals may be operated manually or by a simple timer which allows traffic to flow on one roadway for a fixed period of time, and then on the other road-way for another fixed period of time before repeating the cycle. Other signals may be operated by sophisticated electronic controllers that sense the time of day and flow of traffic to continually adjust the sequence of operation of the signals. Traffic engineers use signals to avoid traffic congestion and improve safety for both motorists and pedestrians alike.

</p>
        </div>
<div className='v1'> 
<Player
      playsInline
      src={v1}
    />


</div>
</div>
<div>
    <div className='anitext2' >
    <h2 className='aniH'>Roundabout Crossing</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sunt consequatur nam sit eum harum, reprehenderit quas magni obcaecati vitae repellendus eligendi delectus soluta libero perspiciatis! Blanditiis accusamus eveniet perferendis.</p>
        
    </div>
<div className='v2'> 
<Player
      playsInline
      src={v2}
    />
</div>
</div>

</div>
    );
}
 
export default ImportantInformation;