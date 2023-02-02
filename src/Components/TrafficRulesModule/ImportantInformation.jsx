import React from 'react';
import { useState } from 'react';
import {Container} from 'react-bootstrap';
import Header from '../Header/Header';
import 'react-html5video/dist/styles.css'
import { Player } from 'video-react';
import {DefaultPlayer as Video} from 'react-html5video'
import v1 from '../Video/v1.mp4'
import v2 from '../Video/v2.mp4'
import { useTranslation, initReactI18next } from "react-i18next";
import Footer from '../Header/Footer';

const ImportantInformation = ({changeLanguage, toggleDark, settoggleDark}) => {
    const {t, il8n}= useTranslation();
    
    return ( 
       
<div>
<Header changeLanguage={changeLanguage} toggleDark={toggleDark} settoggleDark={settoggleDark}/>
<div>
    <h1 id='LP'>{t('impinfo')}</h1>
    <p className='infotext'>{t('im1')}</p>
</div>
<div>
    <div className='anitext1'>
        <h2 className='aniH'>{t('im2')}</h2>
        <p>{t('im3')}</p>
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
    <h2 className='aniH'> {t('im7')}</h2>
        <p>{t('im4')} <br />
        {t('im5')} <br />
        {t('im6')}
        </p>   
    </div>
<div className='v2'> 
<Player
      playsInline
      src={v2}
    />
</div>
</div>
<div>
    <div className='anitext3'>
        <h2 className='aniH'>{t('im9')}</h2>
        <p>
            1.{t('im10')} <br />
            2.{t('im11')} <br />
            3.{t('im12')} <br />
            4.{t('im13')}
        </p>
        </div>
<div className='v3'> 
<Player
      playsInline
      src={v1}
    />
</div>
</div>
<div>
    <div className='anitext2' >
    <h2 className='aniH'>{t('im14')}</h2>
        <p>
        1.{t('im15')} <br />
        2.{t('im16')} <br />
        3.{t('im17')} <br />
        4.{t('im18')} <br />
        5.{t('im19')} <br />
        6.{t('im20')} <br />
        7.{t('im21')} <br />
        8.{t('im22')}
            </p>   
    </div>
<div className='v4'> 
<Player
      playsInline
      src={v2}
    />
</div>
</div>
<div>
    <div className='anitext5'>
        <h2 className='aniH'>{t('im23')}</h2>
        <p>
            {t('im24')} <br />
           
        </p>
        </div>
<div className='v5'> 
<Player
      playsInline
      src={v1}
    />
</div>
</div>
<Footer/>
</div>
    );
}
 
export default ImportantInformation;