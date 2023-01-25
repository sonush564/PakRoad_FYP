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


const Contact = ({changeLanguage, toggleDark, settoggleDark}) => {
  const form = useRef();
 
  const [btnShown, setBtnShown] = useState(true);
const [loadShown, setLoadShown] = useState(false);
const [value, setValue] = React.useState('');
const [name, setName] = React.useState('');
const [email, setEmail] = React.useState('');
const [msg, setMsg] = React.useState('');
const [hHight, setHHeight] = React.useState('aheader');
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
              container: "bottom-center",
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
    <div>
        <ReactNotifications />
        
      <div className={hHight}>
    <Header changeLanguage={changeLanguage} toggleDark={toggleDark} settoggleDark={settoggleDark}/>
    </div>
    <div>
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input  type="text" name="user_name" value={name} onChange={nameChange} required/>
        <label>Email</label>
        <input type="email" name="user_email" value={email} onChange={emailChange} required />
    
    
    <Form.Select  aria-label="Default select example"  name="user_select"
    className='pupose'
    
          value={value}
          label="Age"
          onChange={handleChange}>
      <option>Select Purpose</option>
      <option value="FeedBack">FeedBack</option>
      <option value="Complaint">Complaint</option>
      <option value="Suggession">Suggession</option>
      <option value="Other">Other</option>
    </Form.Select>
        <label>Message</label>
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
        <Button color="success" onClick={() => setHHeight('a1header')}  type="submit" variant="contained" className='AbSubmit'endIcon={<SendIcon />}>Submit
         </Button>
         <ToastContainer />
         </div>
         )}
        </div>
      </form>
    </StyledContactForm>
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
