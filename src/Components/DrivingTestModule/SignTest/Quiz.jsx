import React, { useDebugValue, useState } from 'react';

import Header from '../../Header/Header';
import Footer from '../../Header/Footer';
import bulb from '../../Images/bulb.png'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { AiFillCloseCircle } from 'react-icons/ai';


const Quiz = ({changeLanguage, toggleDark, settoggleDark}) => {
  const navigate = useNavigate();
  const [lanDiv, setLanDive] = useState(false);
  const [lnDiv, setLnDive] = useState('');

    return ( 
        <> 
        <div className={lnDiv}>
        <Header changeLanguage={changeLanguage} toggleDark={toggleDark} settoggleDark={settoggleDark}/>
        </div>
        <div className={lnDiv}>      
      <h1 id='LP'> Quiz</h1>
      <h2 style={{float:"left"}}>Instructions:</h2>
      <p style={{float:"left", marginLeft:"170px",textAlign:"left", fontSize:"25px"}}>You will be asked a few questions and terms related to traffic and safety rules.
      You have to choose the correct answers to every question, and your final score will be displayed at the end.
      You have 2 minutes to solve 10 questions. to pass this test you must answer 6 questions right.</p>
      </div>
      {lanDiv && ( 
      <div className='quizLan'>
        < AiFillCloseCircle className='cross' onClick={()=>{{navigate('/Quiz')}{setLnDive('')}{setLanDive(false)}}}/>
      <p className='bb'>Select Your Language</p>
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

      <Button variant="contained" id='BtnQuiz' onClick={() => {{setLanDive(true)}{setLnDive('quizDiv')}}}> Take Quiz </Button> 
      <Button  variant="contained" id='BtnQuiz' onClick={() => navigate('/Sign')}>Prepare Quiz</Button>
      

<Footer/>
</div>

</>

     );
}
 
export default Quiz;