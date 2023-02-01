import React, { useDebugValue, useState } from 'react';

import Header from '../../Header/Header';
import Footer from '../../Header/Footer';
import bulb from '../../Images/bulb.png'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useTranslation, initReactI18next } from "react-i18next";


const Quiz = ({changeLanguage, toggleDark, settoggleDark}) => {
  const navigate = useNavigate();
  const [lanDiv, setLanDive] = useState(false);
  const [lnDiv, setLnDive] = useState('');
  const {t, il8n}= useTranslation();

    return ( 
        <> 
        <div className={lnDiv}>
        <Header changeLanguage={changeLanguage} toggleDark={toggleDark} settoggleDark={settoggleDark}/>
        </div>
        <div className={lnDiv}>      
      <h1 id='LP'> {t('Quiz')}</h1>
      <h2 style={{float:"left"}}>{t('Quiz1')}</h2>
      <p style={{float:"left", marginLeft:"170px",textAlign:"left", fontSize:"25px"}}>{t('Quiz2')}.</p>
      </div>
      {lanDiv && ( 
      <div className='quizLan'>
        < AiFillCloseCircle className='cross' onClick={()=>{{navigate('/Quiz')}{setLnDive('')}{setLanDive(false)}}}/>
      <p className='bb'>{t('qb3')}</p>
        <div className='quizUB'>
      <Button className='EB' sx={{fontSize: 25}} variant='contained' color='success' id='BtnQuiz'onClick={() => navigate('/testquiz')} > اردو</Button> 
      </div>
      <div className='quizEB'>
      <Button className='EB' sx={{fontSize: 18}} variant="contained" id='BtnQuiz'onClick={() => navigate('/QuizFinal')}>English</Button>
      </div>

      </div>
      )}
      <div className={lnDiv}>      
      <img id='light' className="img-responsive" src={bulb}  alt="logo"  />

      <Button variant="contained" id='BtnQuiz' onClick={() => {{setLanDive(true)}{setLnDive('quizDiv')}}}> {t('qb2')} </Button> 
      <Button  variant="contained" id='BtnQuiz' onClick={() => navigate('/Sign')}>{t('qb1')}</Button>
      

<Footer/>
</div>

</>

     );
}
 
export default Quiz;