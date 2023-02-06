import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import Header from '../Header/Header';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import Form from 'react-bootstrap/Form';
import { ReactNotifications } from 'react-notifications-component'
import { Store } from 'react-notifications-component';
import Footer from '../Header/Footer';
import { useTranslation, initReactI18next } from "react-i18next";
import { AiFillCloseCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Contact = ({changeLanguage, toggleDark, settoggleDark}) => {
  const form = useRef();
  const navigate = useNavigate();
  const {t, il8n}= useTranslation();
  const [btnShown, setBtnShown] = useState(true);
const [loadShown, setLoadShown] = useState(false);
const [value, setValue] = React.useState('');
const [name, setName] = React.useState('');
const [email, setEmail] = React.useState('');
const [msg, setMsg] = React.useState('');
const [hHight, setHHeight] = React.useState('aheader');
const [lanDiv, setLanDive] = useState(false);
  const [lnDiv, setLnDive] = useState('');
const nameChange = event => {
    setName(event.target.value);
 };
 const emailChange = event => {
    setEmail(event.target.value);
    console.log(event.target.value)
 };
 const msgChange = event => {
    setMsg(event.target.value);
 };
 const handleChange = (event) => {
    setValue(event.target.value);
  };
  const sendEmail = (e) => {
    e.preventDefault();
if(value){
    setBtnShown(false);
    setLoadShown(true);
    emailjs
      .sendForm(
        "service_fw9c66i",
        "template_65s6lhm",
        form.current,
        "eRAl3UoubKThKWtyS"
      )
      .then(
        (result) => {
          
            setBtnShown(true);
            setLoadShown(false);
            Store.addNotification({
              title: "Wonderful!",
              message: "Your form submitted successfully",
              type: "success",
              insert: "top",
              container: "top-center",
              animationIn: ["animate__animated", "animate__fadeIn"],
              animationOut: ["animate__animated", "animate__fadeOut"],
              dismiss: {
                duration: 5000,
                onScreen: true
              }
            });
            setHHeight('aheader')
            setValue('')
            setName('')
            setEmail('')
            setMsg('')

        },
        (error) => {
          console.log(error.text);
        }
      );
      }
    else{
      toast.error('Kindly select the purpose')
    }
  } 



  return (
    <div >
      
      <div >
       
        <div className={lnDiv}  >
      <div className={hHight}>
    <Header changeLanguage={changeLanguage} toggleDark={toggleDark} settoggleDark={settoggleDark}/>
    </div>
    <div className="aboutUs1">
<h1 id="LP">{t('About')}</h1>
<p>{t('About1')}</p> <br />
<h1 id="LP11">{t('About14')}</h1>
<p>{t('About11')}</p> <br />
<h1 id="LP11">{t('About15')}</h1>
<p>{t('About12')}</p> <br />


<div className="cbb">
<Button variant="contained" color="primary" onClick={() => {{setLanDive(true)}{setLnDive('quizDiv')}}}>Contact Us</Button>
</div>
    </div>
    </div>
    <div >
    {lanDiv && ( 
    <div className='quizLan1'>
      < AiFillCloseCircle className='cross22' onClick={()=>{{navigate('/about')}{setLnDive('')}{setLanDive(false)}}}/>
    <h1 id="LP1" >{t('About9')}</h1>
    <ReactNotifications />
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>{t('share1')}</label>
        <input  type="text" name="user_name" value={name} onChange={nameChange} required/>
        <label>{t('About2')}</label>
        <input type="email" name="user_email" value={email} onChange={emailChange} required />
    
    
    <Form.Select  aria-label="Default select example"  name="user_select"
    className='pupose'
    
          value={value}
          label="Age"
          onChange={handleChange}>
      <option>{t('About3')}</option>
      <option value="FeedBack">{t('About4')}</option>
      <option value="Complaint">{t('About5')}</option>
      <option value="Suggession">{t('About6')}</option>
      <option value="Other">{t('About7')}</option>
    </Form.Select>
        <label>{t('About8')}</label>
        <textarea name="message" value={msg}onChange={msgChange} required/>
        <div className="LSdiv">
        {loadShown && (
          <div className="AbLoad">
        <LoadingButton className="LB" loading  variant="contained" loadingPosition="end">
        Send
      </LoadingButton>
      </div>
        )}
        {btnShown && ( 
        <div className="ASB">
        <Button color="success" onClick={() => setHHeight('a1header')}  type="submit" variant="contained" className='AbSubmit'endIcon={<SendIcon />}>{t('need3')}
         </Button>
         <ToastContainer />
         </div>
         )}
        </div>
      </form>
    </StyledContactForm>
    </div>
    )}
    </div>
    <div className={lnDiv}  id='fo' >

    <Footer/>
    </div>
    </div>
    </div>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;
